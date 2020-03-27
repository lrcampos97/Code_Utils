unit formPrincipal;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Menus, CadPadrao;

type
  TfrmPrincipal = class(TForm)
    MainMenu1: TMainMenu;
    CadastrosBsicos1: TMenuItem;
    CadastrodeUsurios1: TMenuItem;
    CadastrodeFuncionrios1: TMenuItem;
    CadastrodeEspcies1: TMenuItem;
    CadastrodeRas1: TMenuItem;
    Cadastrodetipodepelagem1: TMenuItem;
    Cadastrodefunes1: TMenuItem;
    Cliente1: TMenuItem;
    Animais1: TMenuItem;
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure Cliente1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  frmPrincipal: TfrmPrincipal;

implementation

{$R *.dfm}

procedure TfrmPrincipal.Cliente1Click(Sender: TObject);
var
  frmPadrao: TfrmPadrao;
begin
  try
    frmPadrao := TfrmPadrao.Create(nil);
    frmPadrao.ShowModal;
  finally
    FreeAndNil(frmPadrao);
  end;
end;

procedure TfrmPrincipal.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  Application.Terminate
end;

end.
