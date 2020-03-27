unit frePesquisa;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes,
  Vcl.Graphics, Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Buttons, Vcl.StdCtrls,
  Vcl.ExtCtrls, uTypes;

type
  TfrePesquisar = class(TFrame)
    pnlPesquisa: TPanel;
    cbCriterios: TComboBox;
    lblPesquisar: TLabel;
    Label1: TLabel;
    lblQtdRegistros: TLabel;
    lblRegistros: TLabel;
    btnPesquisar: TSpeedButton;
    edtPesquisar: TEdit;
    cbPesquisar: TComboBox;
    procedure cbPesquisarClick(Sender: TObject);
  private
    FTipoCriterio: TTipoCriterio;
    { Private declarations }
  public
    { Public declarations }
    procedure CBTipoNumerico;
    procedure CBTipoTexto;
    procedure CBTipoAtivInativo;

    property TipoCriterio: TTipoCriterio read FTipoCriterio write FTipoCriterio;
  end;

implementation

{$R *.dfm}

{ TfrePesquisar }

procedure TfrePesquisar.cbPesquisarClick(Sender: TObject);
begin
  cbCriterios.ItemIndex := 0;
end;

procedure TfrePesquisar.CBTipoAtivInativo;
begin
  cbCriterios.Items.Text :=
  '<Nenhum>' + #13 +
  'Igual';

  FTipoCriterio := stAtivInativo;
end;

procedure TfrePesquisar.CBTipoNumerico;
begin
  cbCriterios.Items.Text :=
  '<Nenhum>' + #13 +
  'Igual' + #13 +
  'Maior' + #13 +
  'Menor' + #13 +
  'Diferente';
  FTipoCriterio := stNumerico;
end;

procedure TfrePesquisar.CBTipoTexto;
begin
  cbCriterios.Items.Text :=
  '<Nenhum>' + #13 +
  'Igual' + #13 +
  'Contém' + #13 +
  'Diferente';
  FTipoCriterio := stTexto;
end;

end.
