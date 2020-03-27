unit uConnectionDB;

interface

uses SysUtils, FireDAC.Comp.Client;

type
  TConnectionDB = class
  private
      fConnection : TFDConnection;
    protected
      procedure ConfigureDB;
      {procedure ConfigurarTabelas;
      procedure CriarTabela(sTabela : String);}
    public
      constructor Create;
      destructor Destroy;

    published
      property Connection : TFDConnection read fConnection;
  end;

implementation

{ TConnectionDB }

procedure TConnectionDB.ConfigureDB;
Var
  sDbPath          : String;
  handleFile       : Integer;
begin
  try
    // Passa os parametros de Conex�o e Conecta ao Banco de Dados
    Connection.LoginPrompt := False;
    Connection.Params.Values['DriverID']     := 'MySql';
    Connection.Params.Values['Server']       := 'Server';
    Connection.Params.Values['DataBase']     := 'DataBase';
    Connection.Params.Values['User_Name']    := 'User_Name';
    Connection.Params.Values['Password']     := 'Password';
    Connection.Connected := True;
  except  
    on e: exception do
      raise Exception.Create('TConnectionDB.ConfigureDB:' + e.Message);
  end;  
end;

constructor TConnectionDB.Create;
begin
  fConnection := TFDConnection.Create(nil);
  ConfigureDB;
end;

destructor TConnectionDB.Destroy;
begin
  FreeAndNil(fConnection);
end;

end.
