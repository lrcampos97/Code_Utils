unit UdmBase;

interface

uses
  SysUtils, Classes, DB, DBClient, Provider, ADODB, Data.FMTBcd, Data.SqlExpr,
  FireDAC.Stan.Intf, FireDAC.Stan.Option, FireDAC.Stan.Error, FireDAC.UI.Intf,
  FireDAC.Phys.Intf, FireDAC.Stan.Def, FireDAC.Stan.Pool, FireDAC.Stan.Async,
  FireDAC.Phys, FireDAC.Phys.MSSQL, FireDAC.Phys.MSSQLDef, FireDAC.VCLUI.Wait,
  FireDAC.Comp.Client, FireDAC.Stan.Param, FireDAC.DatS, FireDAC.DApt.Intf,
  FireDAC.DApt, FireDAC.Comp.DataSet;

type
  TdmBase = class(TDataModule)
    Connection: TFDConnection;
    Transaction: TFDTransaction;
    tblMunicipio: TFDTable;
    tblMunicipioCODIGOMUNICIPIO: TIntegerField;
    tblMunicipioNOME: TStringField;
    tblMunicipioCODIGOUF: TIntegerField;
    dsMunicipio: TDataSource;
    dsUF: TDataSource;
    tblUF: TFDTable;
    tblCODIGOUF: TIntegerField;
    tblUFNOME: TStringField;
    tblUFSIGLA: TStringField;
    fdqryVerificaLicenca: TFDQuery;
    procedure DataModuleCreate(Sender: TObject);
  private
    FCodigoUnidade: Integer;
    FCodigoEmpresa: Integer;
    FNomeEmpresa: string;

    procedure AlimentaDadosEmpresa;
    { Private declarations }
  public
    { Public declarations }
    function BuscaUltimoCodigo(tabela :String):String;

    property CodigoEmpresa: Integer read FCodigoEmpresa write FCodigoEmpresa;
    property CodigoUnidade: Integer read FCodigoUnidade write FCodigoUnidade;
    property NomeEmpresa: string read FNomeEmpresa write FNomeEmpresa;
  end;

var
  dmBase: TdmBase;

implementation

{$R *.dfm}

{ TdmBase }

{ TdmBase }

procedure TdmBase.AlimentaDadosEmpresa;
var
  SqlDataSet: TFDQuery;
begin
  try
    SqlDataSet := TFDQuery.Create(nil);
    SqlDataSet.Connection := Connection;
    SqlDataSet.SQL.Text := 'SELECT TOP 1 CODIGOEMPRESA, NOMEEMPRESA FROM SYSTEMCONFIG ';
    SqlDataSet.Open;

    CodigoEmpresa := SqlDataSet.FieldByName('CODIGOEMPRESA').AsInteger;
    NomeEmpresa := SqlDataSet.FieldByName('NOMEEMPRESA').AsString;
  finally
    FreeAndNil(SqlDataSet);
  end;
end;

function TdmBase.BuscaUltimoCodigo(tabela: String): String;
var
  oSql: TFDQuery;
begin
  try
    oSql := TFDQuery.Create(nil);
    osql.Connection := Connection;
    osql.SQL.Text := 'SELECT MAX(CODIGO'+TABELA+') CODIGO FROM '+ TABELA;
    oSql.Open;

    oSql.First;

    Result := IntToStr(oSql.FieldByName('CODIGO').AsInteger + 1);
  finally
    FreeAndNil(oSql);
  end;
end;

procedure TdmBase.DataModuleCreate(Sender: TObject);
begin
 // Connection.Connected := True;
  //AlimentaDadosEmpresa;
end;

end.
