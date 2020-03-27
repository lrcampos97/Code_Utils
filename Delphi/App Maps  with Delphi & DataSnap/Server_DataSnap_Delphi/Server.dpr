program Server;
{$APPTYPE GUI}


uses
  Vcl.Forms,
  Web.WebReq,
  IdHTTPWebBrokerBridge,
  frmServer in 'frmServer.pas' {Form1},
  ServerMethods in 'ServerMethods.pas' {ServerMethods1: TDSServerModule},
  WebModule in 'WebModule.pas' {WebModule1: TWebModule},
  uClient in 'uClient\uClient.pas',
  uConnectionDB in 'uConnectionDB\uConnectionDB.pas',
  uServerLib in 'uLib\uServerLib.pas',
  ClientClassesUnit1 in '..\..\..\..\Client SN\ClientClassesUnit1.pas',
  ClientModuleUnit1 in '..\..\..\..\Client SN\ClientModuleUnit1.pas' {ClientModule1: TDataModule};

{$R *.res}

begin
  if WebRequestHandler <> nil then
    WebRequestHandler.WebModuleClass := WebModuleClass;
  Application.Initialize;
  Application.CreateForm(TForm1, Form1);
  Application.CreateForm(TClientModule1, ClientModule1);
  Application.Run;
end.
