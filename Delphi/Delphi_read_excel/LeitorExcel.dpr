program LeitorExcel;

uses
  Vcl.Forms,
  frmPrincipal_un in 'frmPrincipal_un.pas' {Form1};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TForm1, Form1);
  Application.Run;
end.
