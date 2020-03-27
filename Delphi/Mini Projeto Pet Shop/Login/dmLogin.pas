unit dmLogin;

interface

uses
  SysUtils, Classes, Provider, DB, DBClient, ADODB, UdmBase,windows,
  FireDAC.Stan.Intf, FireDAC.Stan.Option, FireDAC.Stan.Param,
  FireDAC.Stan.Error, FireDAC.DatS, FireDAC.Phys.Intf, FireDAC.DApt.Intf,
  FireDAC.Stan.Async, FireDAC.DApt, FireDAC.Comp.DataSet, FireDAC.Comp.Client,
  uUtils;

type
  TloginDM = class(TDataModule)
    qryLogin: TFDQuery;
    qryLoginUSUARIO: TStringField;
    qryLoginSENHA: TStringField;
    qryLoginCODIGOUSUARIO: TIntegerField;
    qryAlimentaUltimoAcesso: TFDQuery;
    qryConsultaUltimoAcesso: TFDQuery;
    qryConsultaUltimoAcessoUSUARIO: TStringField;
    qryConsultaUltimoAcessoSENHA: TStringField;
    qryConsultaUltimoAcessoLEMBRARSENHA: TIntegerField;
    qryUnidade: TFDQuery;
    qryUnidadeNOMEUNIDADE: TStringField;
    qryUnidadeCODIGOUNIDADE: TIntegerField;
    dsUnidade: TDataSource;
    intgrfldLoginCODIGOUNIDADE: TIntegerField;
    procedure DataModuleCreate(Sender: TObject);
    procedure DataModuleDestroy(Sender: TObject);
  private
    FUtils: TUtils;
    { Private declarations }
  public
    { Public declarations }
    procedure AlimentarUltimoAcesso(sUsuario, sSenha: String; iCodigoUsuario, iCodigoUnidade: Integer;
      DataAtualizacao: TDateTime; bLembrarSenha: Boolean);

    function ConsultaUltimoAcesso(): String;
    function ValidarSenha(sSenha: String): Boolean;
    function ValidarUsuario(sUsuario: String): Boolean;

    property Utils: TUtils read FUtils;
  end;

var
  loginDM: TloginDM;

implementation

{$R *.dfm}

{ TloginDM }


procedure TloginDM.AlimentarUltimoAcesso(sUsuario, sSenha: String;
  iCodigoUsuario, iCodigoUnidade: Integer; DataAtualizacao: TDateTime; bLembrarSenha: Boolean);
begin
  try
    dmBase.Transaction.StartTransaction;

    qryAlimentaUltimoAcesso.ParamByName('CODIGOUSUARIO').Value := iCodigoUsuario;
    qryAlimentaUltimoAcesso.ParamByName('USUARIO').Value := sUsuario;
    qryAlimentaUltimoAcesso.ParamByName('DATAATUALIZACAO').Value := DataAtualizacao;
    qryAlimentaUltimoAcesso.ParamByName('MESMOUSUARIO').Value := FUtils.iif(Trim(ConsultaUltimoAcesso) = sUsuario,1,0);
    qryAlimentaUltimoAcesso.ParamByName('LEMBRARSENHA').Value := FUtils.iif(bLembrarSenha,1,0);
    qryAlimentaUltimoAcesso.ParamByName('SENHA').Value := FUtils.iif(bLembrarSenha,sSenha,'');
    qryAlimentaUltimoAcesso.ParamByName('CODIGOUNIDADE').Value := iCodigoUnidade;
    qryAlimentaUltimoAcesso.ExecSQL;

    dmBase.Transaction.Commit;


  except on E: Exception do
    begin
      dmbase.Transaction.Rollback;
      raise Exception.Create('N�o foi poss�vel atualizar a tabela ' + QuotedStr('Ultimo Acesso') + #13 +
                             'Erro original: ' + e.Message);
    end;
  end;
end;

function TloginDM.ConsultaUltimoAcesso: String;
begin
  try
    qryConsultaUltimoAcesso.Open;
    Result := qryConsultaUltimoAcessoUSUARIO.AsString;
  finally
    qryConsultaUltimoAcesso.Close;
  end;
end;

procedure TloginDM.DataModuleCreate(Sender: TObject);
begin
//  qryUnidade.Open;
end;

procedure TloginDM.DataModuleDestroy(Sender: TObject);
begin
  qryUnidade.Close;
end;

function TloginDM.ValidarSenha(sSenha: String): Boolean;
begin
  Result := sSenha = qryLoginSENHA.AsString;
end;

function TloginDM.ValidarUsuario(sUsuario: String): Boolean;
begin
  Result := not qryLogin.IsEmpty;
end;

end.
