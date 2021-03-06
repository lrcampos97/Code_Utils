unit CadPadrao;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, frePesquisa, freButtons,
  Vcl.ComCtrls, Data.DB, Vcl.Grids, Vcl.DBGrids, freTitulo, uTypes, uUtils,
  Vcl.DBActns, System.Actions, Vcl.ActnList, Vcl.ExtCtrls, System.ImageList,
  Vcl.ImgList, Vcl.ToolWin;

type
  TfrmPadrao = class(TForm)
    pgPrincipal: TPageControl;
    pgPesquisa: TTabSheet;
    pgCadastro: TTabSheet;
    dbGridPesquisa: TDBGrid;
    freBotoes: TfreBotoes;
    freTitulo: TframeTitulo;
    frePesquisar1: TfrePesquisar;
    img1: TImage;
    procedure FormShow(Sender: TObject);
    procedure sbtnVisualizarClick(Sender: TObject);
    procedure sbtnEditarClick(Sender: TObject);
    procedure sbtnIncluirClick(Sender: TObject);
    procedure FormKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
    procedure sbtnSairClick(Sender: TObject);
    procedure frePesquisar1btnPesquisarClick(Sender: TObject);
    procedure sbtnNextClick(Sender: TObject);
    procedure sbtnPreviousClick(Sender: TObject);
    procedure sbtnFirstClick(Sender: TObject);
    procedure sbtnLastClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
  private
    FStateForm: TStatusTela;
    FUtils: TUtils;
    { Private declarations }

  public
    { Public declarations }
    procedure ConfiguraForm(State: TStatusTela);

    property StateForm: TStatusTela read FStateForm write FStateForm;
    property Utils: TUtils read FUtils write FUtils;
  end;

var
  frmPadrao: TfrmPadrao;

const
  MASCARA_CPF: String = '!999.999.999\-99;1;_';
  MASCARA_CNPJ: String = '!99.999.999/9999-99;1;_';

implementation

{$R *.dfm}

procedure TfrmPadrao.ConfiguraForm(State: TStatusTela);
begin
  if State <> stSearch then
  begin
    freBotoes.btnVisualizar.Caption := 'Pesquisar';
    StateForm := State;
    fretitulo.SetState(stView,WindowState);
    pgPrincipal.ActivePage := pgCadastro;
  end
  else
  begin
    if not (StateForm = State) then
    begin
      freBotoes.btnVisualizar.Caption := 'Visualizar';
      StateForm := State;
      fretitulo.SetState(stSearch,WindowState);
      pgPrincipal.ActivePage := pgPesquisa;
    end;
  end;
end;

procedure TfrmPadrao.FormCreate(Sender: TObject);
begin
  ConfiguraForm(stSearch);

  freBotoes.actFirst.DataSource := dbGridPesquisa.DataSource;
  freBotoes.actLast.DataSource := dbGridPesquisa.DataSource;
  freBotoes.actPrior.DataSource := dbGridPesquisa.DataSource;
  freBotoes.actNext.DataSource := dbGridPesquisa.DataSource;

end;

procedure TfrmPadrao.FormKeyDown(Sender: TObject; var Key: Word;
  Shift: TShiftState);
begin
  case Key of
    VK_F4: freBotoes.btnFirst.Click;
    VK_F6: freBotoes.btnLast.Click;
    VK_F3: freBotoes.btnNext.Click;
    VK_F7: freBotoes.btnPrevious.Click;
    VK_F1: freBotoes.btnVisualizar.Click;
    27: Close;
  end;
end;

procedure TfrmPadrao.FormShow(Sender: TObject);
begin
  pgPrincipal.ActivePage := pgPesquisa;
  fretitulo.SetState(stSearch, WindowState);
  frePesquisar1.lblRegistros.Visible := False;
  frePesquisar1.lblQtdRegistros.Visible := False;
end;

procedure TfrmPadrao.frePesquisar1btnPesquisarClick(Sender: TObject);
begin
  frePesquisar1.lblRegistros.Visible := True;
  frePesquisar1.lblQtdRegistros.Visible := True;
  frePesquisar1.lblQtdRegistros.Caption := IntToStr(dbGridPesquisa.DataSource.DataSet.RecordCount);
  ConfiguraForm(stSearch);
end;

procedure TfrmPadrao.sbtnEditarClick(Sender: TObject);
begin
  fretitulo.SetState(stEdit,WindowState);
end;

procedure TfrmPadrao.sbtnFirstClick(Sender: TObject);
begin
  if dbGridPesquisa.DataSource.DataSet.Active then
   dbGridPesquisa.DataSource.DataSet.First;
end;

procedure TfrmPadrao.sbtnIncluirClick(Sender: TObject);
begin
  fretitulo.SetState(stInclude,WindowState);

end;

procedure TfrmPadrao.sbtnLastClick(Sender: TObject);
begin
  if dbGridPesquisa.DataSource.DataSet.Active then
    dbGridPesquisa.DataSource.DataSet.Last;
end;

procedure TfrmPadrao.sbtnNextClick(Sender: TObject);
begin
  if dbGridPesquisa.DataSource.DataSet.Active then
    dbGridPesquisa.DataSource.DataSet.Next;
end;

procedure TfrmPadrao.sbtnPreviousClick(Sender: TObject);
begin
  if dbGridPesquisa.DataSource.DataSet.Active then
    dbGridPesquisa.DataSource.DataSet.Prior;
end;

procedure TfrmPadrao.sbtnSairClick(Sender: TObject);
begin
  Close;
end;

procedure TfrmPadrao.sbtnVisualizarClick(Sender: TObject);
begin
  ConfiguraForm(Utils.iif(StateForm = stSearch,stView,stSearch));
end;

end.
