unit uSuporte;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, ExtCtrls, StdCtrls, jpeg,Shellapi;

type
  TfrmSuporte = class(TForm)
    Image1: TImage;
    lblSuportePetShop: TLabel;
    Panel1: TPanel;
    Label2: TLabel;
    Label1: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    Label5: TLabel;
    Label6: TLabel;
    procedure Label6MouseMove(Sender: TObject; Shift: TShiftState; X,
      Y: Integer);
    procedure Label6MouseLeave(Sender: TObject);
    procedure Label6Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
    procedure JumpTo(const aAdress: String); 
  end;

var
  frmSuporte: TfrmSuporte;

implementation

{$R *.dfm}

procedure TfrmSuporte.Label6MouseMove(Sender: TObject; Shift: TShiftState;
  X, Y: Integer);
begin
  TLabel(Sender).Font.Color := clBlue;
  TLabel(Sender).Font.Style := [fsUnderline];
  Cursor := crHandPoint;
end;

procedure TfrmSuporte.Label6MouseLeave(Sender: TObject);
begin
  TLabel(Sender).Font.Color := clBlack;
  TLabel(Sender).Font.Style := [];
  Cursor := crDefault;
end;

procedure TfrmSuporte.JumpTo(const aAdress: String);
var
  buffer : String;
begin
  buffer := 'http://\' + aAdress;
  ShellExecute(Application.Handle, nil, PChar(buffer), nil, nil, SW_SHOWNORMAL);
end;

procedure TfrmSuporte.Label6Click(Sender: TObject);
begin
  JumpTo('www.google.com\');
end;

end.
