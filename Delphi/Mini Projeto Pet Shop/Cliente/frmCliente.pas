unit frmCliente;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, CadPadrao, Data.DB, freTitulo,
  freButtons, Vcl.Grids, Vcl.DBGrids, Vcl.ComCtrls, frePesquisa, dmCliente, uTypes,
  uUtils, Vcl.WinXCalendars, Vcl.StdCtrls, Vcl.DBCtrls, Vcl.Mask, UdmBase,
  Vcl.DBActns, System.Actions, Vcl.ActnList, Vcl.ExtCtrls, System.ImageList,
  Vcl.ImgList, Vcl.PlatformDefaultStyleActnCtrls, Vcl.ActnMan, Vcl.ToolWin,
  Vcl.ActnCtrls, Vcl.Buttons, Vcl.ExtDlgs, freFoto;

type
  TfrmClientes = class(TfrmPadrao)
    GroupBox1: TGroupBox;
    lblCodigoCliente: TLabel;
    dbedtCODIGOCLIENTE: TDBEdit;
    lblTipoPessoa: TLabel;
    lbl1: TLabel;
    lblCPFCNPJ: TLabel;
    medtCPFCNPJ: TMaskEdit;
    lblRG: TLabel;
    dbedtRG: TDBEdit;
    lblNomeCliente: TLabel;
    dbedtNomeCliente: TDBEdit;
    lblRazao: TLabel;
    dbedtRAZAOSOCIAL: TDBEdit;
    pgcCadastro: TPageControl;
    tsDadosCadastrais: TTabSheet;
    lblSexo: TLabel;
    cbbSexo: TComboBox;
    lblDataNascimento: TLabel;
    dtpDataCadastro: TDateTimePicker;
    dtpDataNascimento: TDateTimePicker;
    tsDadosAdicionais: TTabSheet;
    grpContato: TGroupBox;
    dbedtEMAIL: TDBEdit;
    lblEmail: TLabel;
    lblTelefonePrincipal: TLabel;
    medtFonePrincipal: TMaskEdit;
    lblFoneOpcional1: TLabel;
    medtFoneOpcional1: TMaskEdit;
    lblFoneOpcional2: TLabel;
    medtFoneOpcional2: TMaskEdit;
    grpCliente: TGroupBox;
    lblFidelidade: TLabel;
    medtFidelidade: TMaskEdit;
    dbchkUsaLimiteCred: TDBCheckBox;
    dbchkClienteAtivo: TDBCheckBox;
    medtLimiteCredito: TMaskEdit;
    lblValorPendente: TLabel;
    medtValoPendente: TMaskEdit;
    lblUltimaCompra: TLabel;
    lblDataUltimaCompra: TLabel;
    grpEndereco: TGroupBox;
    lblCep: TLabel;
    medtCEP: TMaskEdit;
    lblLogradouro: TLabel;
    dbedtLOGRADOURO: TDBEdit;
    lblNumero: TLabel;
    dbedtNUMERO: TDBEdit;
    lblBairro: TLabel;
    dbedtBAIRRO: TDBEdit;
    lblComplemento: TLabel;
    dbedtCOMPLEMENTO: TDBEdit;
    lblEstado: TLabel;
    lblCidade: TLabel;
    dblkcbb1: TDBLookupComboBox;
    dblkcbbCidade: TDBLookupComboBox;
    cbbTipoPessoa: TComboBox;
    tsAnimais: TTabSheet;
    grp1: TGroupBox;
    dbmmoOBSERVACOES: TDBMemo;
    lblObservacao: TLabel;
    frameFoto1: TframeFoto;
    grpAnimais: TGroupBox;
    dbgrd1: TDBGrid;
    btnAnimais: TSpeedButton;
    btnAbrirAnimal: TSpeedButton;
    btnNovoAnimal: TSpeedButton;
    procedure frePesquisar1btnPesquisarClick(Sender: TObject);
    procedure frePesquisar1cbPesquisarExit(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure pgCadastroEnter(Sender: TObject);
    procedure sbtnVisualizarClick(Sender: TObject);
    procedure freBotoesactPostExecute(Sender: TObject);
    procedure cbbTipoPessoaChange(Sender: TObject);
    procedure freBotoesactCancelExecute(Sender: TObject);
    procedure dblkcbb1Click(Sender: TObject);

  private
    FdmCliente: TdmClientes;
    FUtils: TUtils;
    { Private declarations }
  public
    { Public declarations }
    function  AplicaFiltrosConsulta: String;
    procedure GravarDados;
    procedure AlteraCPFCNPJ;

    procedure FiltraDadosCidade(iCodigoEstado: Integer);
    property dmCliente: TdmClientes read FdmCliente write FdmCliente;
    property Utils: TUtils  read FUtils write FUtils;
  end;

var
  frmClientes: TfrmClientes;


implementation

{$R *.dfm}

procedure TfrmClientes.AlteraCPFCNPJ;
begin
  if cbbTipoPessoa.ItemIndex = 0 then
  begin
    medtCPFCNPJ.EditMask := MASCARA_CPF;
    medtCPFCNPJ.Width := 108;
    lblCPFCNPJ.Caption := 'CPF:';
  end
  else
  begin
    medtCPFCNPJ.EditMask := MASCARA_CNPJ;
    medtCPFCNPJ.Width := 124;
    lblCPFCNPJ.Caption := 'CNPJ:';
  end;
end;

function TfrmClientes.AplicaFiltrosConsulta: String;
var
  sCriterio, sCondicao: String;
begin
  Utils.AplicaCriterios(frePesquisar1,sCriterio);

  if frePesquisar1.cbPesquisar.ItemIndex = 1 then
    sCondicao := 'CODIGOCLIENTE'
  else if frePesquisar1.cbPesquisar.ItemIndex = 6 then
    sCondicao := 'ULTIMACOMPRA'
  else if frePesquisar1.cbPesquisar.ItemIndex = 8 then
    sCondicao := 'ENDERECO'
  else if frePesquisar1.cbPesquisar.ItemIndex = 2 then
    sCondicao := 'PES.NOME'
  else
    sCondicao := Trim(frePesquisar1.cbPesquisar.Items[frePesquisar1.cbPesquisar.ItemIndex]);

  // remove os espa�os em branco da condi��o
  sCondicao := StringReplace(sCondicao,' ','',[rfReplaceAll,rfIgnoreCase]);
  // crit�rios
  if frePesquisar1.cbCriterios.ItemIndex = 2 then
    Result := sCondicao + sCriterio + QuotedStr('%' + frePesquisar1.edtPesquisar.Text + '%')
  else
    Result := sCondicao + sCriterio;
end;

procedure TfrmClientes.cbbTipoPessoaChange(Sender: TObject);
begin
  inherited;
  if dmcliente.tblPessoa.State in [dsEdit,dsInsert] then
    medtCPFCNPJ.Clear;

  AlteraCPFCNPJ;
end;

procedure TfrmClientes.dblkcbb1Click(Sender: TObject);
begin
  FiltraDadosCidade(dblkcbb1.KeyValue);
  dblkcbbCidade.Refresh;
  inherited;
end;

procedure TfrmClientes.FiltraDadosCidade(iCodigoEstado: Integer);
begin
  dmbase.tblMunicipio.Filtered := false;
  dmbase.tblMunicipio.Filter := 'CODIGOUF = ' + IntToStr(iCodigoEstado);
  dmbase.tblMunicipio.Filtered := True;
end;

procedure TfrmClientes.FormCreate(Sender: TObject);
begin
  Utils := TUtils.Create;
  dmCliente := TdmClientes.Create(nil);
  dbGridPesquisa.DataSource := dmCliente.dsConsultaCliente;
  inherited;


  freBotoes.actEdit.DataSource := dmCliente.dsPessoa;
  freBotoes.actInsert.DataSource := dmCliente.dsPessoa;
  freBotoes.actDelete.DataSource := dmCliente.dsPessoa;
  freBotoes.actPost.DataSource := dmCliente.dsPessoa;
  freBotoes.actCancel.DataSource := dmCliente.dsPessoa;
end;

procedure TfrmClientes.freBotoesactCancelExecute(Sender: TObject);
begin
  inherited;
  dmCliente.tblPessoa.Refresh;
  dmCliente.tblCliente.Refresh;
  dmCliente.tblEndereco.Refresh;
end;

procedure TfrmClientes.freBotoesactPostExecute(Sender: TObject);
begin
  dmcliente.tblPessoaDATACADASTRO.AsDateTime := dtpDataCadastro.DateTime;
  dmCliente.tblPessoaDATANASCIMENTO.AsDateTime :=  dtpDataNascimento.DateTime;
  dmCliente.tblPessoaTIPOPESSOA.Value := Utils.iif(cbbTipoPessoa.ItemIndex = 0, 'F', 'J');
  dmCliente.tblPessoaCPFCNPJ.AsString := medtCPFCNPJ.Text;
  dmcliente.tblPessoaSEXO.AsString := Utils.iif(cbbSexo.ItemIndex = 0, 'M', 'F');
  dmcliente.tblPessoaTELEFONEPRINCIPAL.AsString := medtFonePrincipal.Text;

  inherited;
  // for�ando o post;
  dmCliente.tblPessoa.Post;
end;

procedure TfrmClientes.frePesquisar1btnPesquisarClick(Sender: TObject);
var
  bAplicouCondicao: Boolean;
begin
  bAplicouCondicao := False;
  try
    dbGridPesquisa.DataSource.DataSet.Close;

    if (frePesquisar1.cbPesquisar.ItemIndex <> 0) and
        (frePesquisar1.cbCriterios.ItemIndex <> 0)then
    begin
      dmCliente.QryConsultaCliente.Macros[0].AsRaw := 'WHERE ' + #13 +
        AplicaFiltrosConsulta + Utils.iif(frePesquisar1.cbCriterios.ItemIndex = 2, '', QuotedStr(frePesquisar1.edtPesquisar.Text));
      bAplicouCondicao := True
    end
    else if (frePesquisar1.cbCriterios.ItemIndex = 0) and
            (frePesquisar1.cbPesquisar.ItemIndex <> 0) then
    begin
        Application.MessageBox(Pchar('Selecione algum crit�rio de pesquisa.'), 'Erro ao realizar pesquisa', mb_ok + MB_ICONEXCLAMATION);
        Exit;
    end;

    if not bAplicouCondicao then
      dmCliente.QryConsultaCliente.Macros[0].AsRaw := '';

    dmCliente.QryConsultaCliente.Open;
  except on E: Exception do
      Application.MessageBox(Pchar('Erro ao realizar pesquisa.' + #13 + 'Erro original: ' + e.Message),
        'Erro de banco de dados', mb_ok + MB_ICONERROR);
  end;
  inherited;
end;

procedure TfrmClientes.frePesquisar1cbPesquisarExit(Sender: TObject);
begin
  inherited;

  with frePesquisar1 do
  begin
    case cbpesquisar.ItemIndex  of
      1   : CBTipoNumerico;
      2,3 : CBTipoTexto;
      4,5 : CBTipoAtivInativo;
      7,8 : CBTipoTexto;
    end;
  end;

end;

procedure TfrmClientes.GravarDados;
begin
 // dmCliente.tblPessoaTIPOPESSOA.Value := Utils.iif(cbbTipoPessoa.ItemIndex = 0, 'F', 'J');
end;

procedure TfrmClientes.pgCadastroEnter(Sender: TObject);
begin
  inherited;
  if dmCliente.tblCliente.State in [dsInsert] then
  begin
    lblUltimaCompra.Visible := False;
    lblDataUltimaCompra.Visible := False;
  end;

end;

procedure TfrmClientes.sbtnVisualizarClick(Sender: TObject);
begin
  inherited;
  if StateForm in [stEdit,stView] then
  begin
    dmCliente.tblPessoa.Locate('CODIGOPESSOA',dbGridPesquisa.DataSource.DataSet.FieldByName('CODIGOPESSOA').AsInteger,[]);

    // ATUALIZA OS CAMPOS
    cbbTipoPessoa.ItemIndex := Utils.iif(dmCliente.tblPessoaTIPOPESSOA.AsString = 'F', 0, 1);
    dtpDataCadastro.DateTime :=  dmCliente.tblPessoaDATACADASTRO.AsDateTime;
    dtpDataNascimento.DateTime :=  dmCliente.tblPessoaDATANASCIMENTO.AsDateTime;
    AlteraCPFCNPJ;
    medtCPFCNPJ.Text := dmCliente.tblPessoaCPFCNPJ.AsString;
    cbbSexo.ItemIndex := Utils.iif(dmcliente.tblPessoaSEXO.AsString = 'M',0,1);
    medtFonePrincipal.Text := dmcliente.tblPessoaTELEFONEPRINCIPAL.AsString;
  end
  else
    dmCliente.QryConsultaCliente.Refresh;
end;

end.
