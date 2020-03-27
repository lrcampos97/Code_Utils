program Maps;

uses
  System.StartUpCopy,
  FMX.Forms,
  Main in 'Main.pas' {frmApp},
  ClientClasses in 'ClientClasses.pas',
  ClientModule in 'ClientModule.pas' {ClientModule1: TDataModule};

{$R *.res}

begin
  Application.Initialize;
  Application.FormFactor.Orientations := [TFormOrientation.Portrait];
  Application.CreateForm(TfrmApp, frmApp);
  Application.CreateForm(TClientModule1, ClientModule1);
  Application.Run;
end.
