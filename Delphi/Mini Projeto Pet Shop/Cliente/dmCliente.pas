unit dmCliente;

interface

uses
  System.SysUtils, System.Classes, FireDAC.Stan.Intf,
  FireDAC.Stan.Option, FireDAC.Stan.Param, FireDAC.Stan.Error, FireDAC.DatS,
  FireDAC.Phys.Intf, FireDAC.DApt.Intf, FireDAC.Stan.Async, FireDAC.DApt,
  Data.DB, FireDAC.Comp.DataSet, FireDAC.Comp.Client, UdmBase;

type
  TdmClientes = class(TDataModule)
    dsConsultaCliente: TDataSource;
    QryConsultaCliente: TFDQuery;
    tblCliente: TFDTable;
    tblClienteCODIGOCLIENTE: TIntegerField;
    tblClienteCODIGOPESSOA: TIntegerField;
    tblClienteCODIGOUSUARIO: TIntegerField;
    tblClienteDATAATUALIZACAO: TSQLTimeStampField;
    tblClienteFIDELIDADE: TBCDField;
    tblClienteLIMITECREDITO: TBCDField;
    tblClienteUTILIZALIMITECRED: TIntegerField;
    tblClienteVALORPENDENTE: TBCDField;
    tblClienteULTIMACOMPRA: TSQLTimeStampField;
    tblClienteINATIVO: TIntegerField;
    tblClienteOBSERVACOES: TStringField;
    dsCliente: TDataSource;
    tblPessoa: TFDTable;
    tblPessoaCODIGOPESSOA: TIntegerField;
    tblPessoaCODIGOENDERECO: TIntegerField;
    tblPessoaCODIGOUSUARIO: TIntegerField;
    tblPessoaNOME: TStringField;
    tblPessoaRAZAOSOCIAL: TStringField;
    tblPessoaTIPOPESSOA: TStringField;
    tblPessoaCPFCNPJ: TStringField;
    tblPessoaRG: TStringField;
    tblPessoaSEXO: TStringField;
    tblPessoaIDADE: TIntegerField;
    tblPessoaTELEFONEPRINCIPAL: TStringField;
    tblPessoaTELEFONEOPCIONAL1: TStringField;
    tblPessoaTELEFONEOPCIONAL2: TStringField;
    tblPessoaDATACADASTRO: TDateField;
    tblPessoaEMAIL: TStringField;
    tblPessoaFOTOPESSOA: TBlobField;
    tblPessoaDATANASCIMENTO: TSQLTimeStampField;
    dsPessoa: TDataSource;
    tblEndereco: TFDTable;
    dsEndereco: TDataSource;
    tblEnderecoCODIGOENDERECO: TIntegerField;
    tblEnderecoCODIGOPESSOA: TIntegerField;
    tblEnderecoCODIGOUF: TIntegerField;
    tblEnderecoCODIGOMUNICIPIO: TIntegerField;
    tblEnderecoLOGRADOURO: TStringField;
    tblEnderecoNUMERO: TStringField;
    tblEnderecoBAIRRO: TStringField;
    tblEnderecoCOMPLEMENTO: TStringField;
    tblEnderecoCEP: TStringField;
    tblAnimais: TFDTable;
    dsAnimais: TDataSource;
    procedure tblPessoaBeforeInsert(DataSet: TDataSet);
    procedure tblEnderecoBeforeInsert(DataSet: TDataSet);
    procedure DataModuleCreate(Sender: TObject);
    procedure DataModuleDestroy(Sender: TObject);
    procedure tblClienteBeforePost(DataSet: TDataSet);
    procedure tblClienteAfterInsert(DataSet: TDataSet);
  private
    { Private declarations }
  public
    { Public declarations }
    procedure IncluirCliente();

  end;

var
  dmClientes: TdmClientes;

implementation

{%CLASSGROUP 'Vcl.Controls.TControl'}

{$R *.dfm}

{ TdmClientes }

procedure TdmClientes.DataModuleCreate(Sender: TObject);
begin
  dmBase := TdmBase.Create(nil);

  // ATRIBUI AS CONEX�ES
  tblCliente.Connection := dmBase.Connection;
  tblPessoa.Connection := dmBase.Connection;
  tblEndereco.Connection := dmBase.Connection;

  // FAZ AS LIGA��ES DO MESTRE DETALHE
  tblCliente.TableName := 'CLIENTE';
  tblCliente.MasterSource := dsPessoa;
  tblCliente.MasterFields := 'CODIGOPESSOA';

  tblPessoa.TableName := 'PESSOA';

  tblEndereco.TableName := 'Endereco';
  tblEndereco.MasterSource := dsPessoa;
  tblEndereco.MasterFields := 'CODIGOENDERECO';

  tblCliente.open;
  tblPessoa.open;
  tblEndereco.open;
end;

procedure TdmClientes.DataModuleDestroy(Sender: TObject);
begin
  FreeAndNil(dmBase);
end;

procedure TdmClientes.IncluirCliente;
begin
  tblCliente.open;
  tblPessoa.open;
  tblEndereco.open;

  tblCliente.Append;
  tblPessoa.Insert;
  tblEndereco.Insert;
end;

procedure TdmClientes.tblClienteAfterInsert(DataSet: TDataSet);
begin
 // tblClienteCODIGOCLIENTE.AsInteger := StrToInt(dmBase.BuscaUltimoCodigo('CLIENTE'));
end;

procedure TdmClientes.tblClienteBeforePost(DataSet: TDataSet);
begin
  tblClienteDATAATUALIZACAO.AsDateTime := Now;
end;

procedure TdmClientes.tblEnderecoBeforeInsert(DataSet: TDataSet);
begin
 // tblClienteCODIGOCLIENTE.AsInteger := StrToInt(dmBase.BuscaUltimoCodigo('ENDERECO'));
end;

procedure TdmClientes.tblPessoaBeforeInsert(DataSet: TDataSet);
begin
  //tblClienteCODIGOCLIENTE.AsInteger := StrToInt(dmBase.BuscaUltimoCodigo('PESSOA'));
end;

end.

