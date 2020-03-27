unit freTitulo;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes,
  Vcl.Graphics, Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.ExtCtrls, Vcl.StdCtrls,
  uTypes, uUtils;

type
  TframeTitulo = class(TFrame)
    pnlTitulo: TPanel;
    lblTitulo: TLabel;
    bvlStatus: TBevel;
    lblState: TLabel;
  private
    { Private declarations }
  public
    { Public declarations }
    var
      CurrentState: TStatusTela;

    procedure SetState(Status: TStatusTela; WindowsState: TWindowState);
    procedure SetTitulo(sTitulo: String);

  end;

implementation

{$R *.dfm}

{ TFrame2 }

procedure TframeTitulo.SetState(Status: TStatusTela; WindowsState: TWindowState);
begin
  CurrentState := Status;
  if Status = stView then
  begin
    lblState.Caption := 'Visualiza��o';
    if WindowsState = wsNormal then lblState.Left := 904;
  end
  else if Status = stSearch then
  begin
    lblState.Caption := 'Pesquisa';
    if WindowsState = wsNormal then lblState.Left := 917;
  end
  else if Status = stEdit then
  begin
    lblState.Caption := 'Edi��o';
    if WindowsState = wsNormal then lblState.Left := 920;
  end
  else if Status = stInclude then
  begin
    lblState.Caption := 'Inclus�o';
    if WindowsState = wsNormal then lblState.Left := 917;
  end;
end;

procedure TframeTitulo.SetTitulo(sTitulo: String);
begin
  lblTitulo.Caption := sTitulo;
end;

end.
