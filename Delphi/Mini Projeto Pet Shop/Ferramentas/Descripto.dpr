program Descripto;

uses
  Vcl.Forms,
  Descriptografador in 'Descriptografador.pas' {frmCriptografador};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TfrmCriptografador, frmCriptografador);
  Application.Run;
end.
