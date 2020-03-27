unit uLogin;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, ExtCtrls, StdCtrls, Mask, DBCtrls, jpeg, ComCtrls, Buttons,UdmBase,DB,
  uSuporte,dmlogin,formPrincipal, uUsuario;

type
  TfrmLogin = class(TForm)
    Panel1: TPanel;
    StatusBarLogin: TStatusBar;
    Image1: TImage;
    btnAcessar: TButton;
    lblUsuario: TLabel;
    Label2: TLabel;
    btnCancelar: TButton;
    edtUsuario: TEdit;
    edtSenha: TEdit;
    Timer1: TTimer;
    lblMensagem: TLabel;
    lblSejaBemVindo: TLabel;
    lblEsqueceuSenha: TLabel;
    btnSuporteLogin: TSpeedButton;
    ckSenha: TCheckBox;
    lblUnidade: TLabel;
    dcbUnidade: TDBLookupComboBox;
    procedure btnCancelarClick(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure btnSuporteLoginClick(Sender: TObject);
    procedure FormKeyPress(Sender: TObject; var Key: Char);
    procedure btnAcessarClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
  private
    { Private declarations }
    FdmDataBase: TdmBase;
    FdmLogin: TloginDM;
    FUsuario: TUsuarioClass;
  public
    { Public declarations }
    property DmdataBase: TdmBase read FdmDataBase;
    property dmLogin: TloginDM  read FdmLogin;
    property Usuario: TUsuarioClass read FUsuario write FUsuario;
  end;

var
  frmLogin: TfrmLogin;

implementation

{$R *.dfm}

procedure TfrmLogin.btnAcessarClick(Sender: TObject);
var
  frmPrincipal: TfrmPrincipal;
begin
  try
    if Trim(edtUsuario.Text) <> EmptyStr then
    begin
      if Trim(edtSenha.Text) <> EmptyStr then
      begin
        FdmLogin.qryLogin.Close;
        FdmLogin.qryLogin.ParamByName('USUARIO').Value := Trim(edtUsuario.Text);
        FdmLogin.qryLogin.Open;
            
        if FdmLogin.ValidarUsuario(Trim(edtUsuario.Text)) then
        begin
          if FdmLogin.ValidarSenha(Trim(edtSenha.Text)) then
          begin
            FdmLogin.AlimentarUltimoAcesso(FdmLogin.qryLoginUSUARIO.AsString, Trim(edtSenha.Text),
              FdmLogin.qryLoginCODIGOUSUARIO.AsInteger,FdmLogin.qryLogin.FieldByName('CODIGOUNIDADE').Value,
              Now,ckSenha.Checked);


          end
          else
          begin
            Application.MessageBox('Senha Inv�lida !!','Informa��o', MB_OK + MB_ICONWARNING);
            edtSenha.SetFocus;
          end;     
        end
        else
        begin
          Application.MessageBox('Usu�rio Inv�lido !!','Informa��o', MB_OK + MB_ICONWARNING);
          edtUsuario.SetFocus;
        end;

      end
      else
      begin
        Application.MessageBox('A senha deve ser informada !!','Informa��o', MB_OK+MB_ICONWARNING);
        edtSenha.SetFocus;
      end;    
    end
    else
    begin
      Application.MessageBox('O usu�rio deve ser informado !!','Informa��o', MB_OK+MB_ICONWARNING);
      edtUsuario.SetFocus;
    end;
  finally
    FreeAndNil(frmPrincipal);
  end;
end;

procedure TfrmLogin.btnCancelarClick(Sender: TObject);
begin
  Application.Terminate;
end;

procedure TfrmLogin.FormShow(Sender: TObject);
begin
  edtUsuario.SetFocus;
  edtUsuario.Text := dmLogin.ConsultaUltimoAcesso;
  if edtUsuario.Text <> '' then
  begin
    edtSenha.SetFocus;
    //validar se o usu�rio lembra a senha
    FdmLogin.qryConsultaUltimoAcesso.Close;
    FdmLogin.qryConsultaUltimoAcesso.Open;

    if FdmLogin.qryConsultaUltimoAcessoLEMBRARSENHA.AsInteger = 1 then
    begin
      edtSenha.Text := FdmLogin.qryConsultaUltimoAcessoSENHA.AsString;
      ckSenha.Checked := True;
      btnAcessar.SetFocus;
    end;
  end;
end;

procedure TfrmLogin.Timer1Timer(Sender: TObject);
begin
  StatusBarLogin.Panels [1].Text := 'Hora : '+formatdatetime ('hh:mm:ss',now);//para hora
  StatusBarLogin.Panels [2].Text := ' '+formatdatetime ('dddd","dd" de "mmmm" de "yyyy',now);// para data
end;

procedure TfrmLogin.btnSuporteLoginClick(Sender: TObject);
begin
  frmSuporte := TfrmSuporte.Create(nil);
  try
    frmSuporte.ShowModal;
  finally
    FreeAndNil(frmSuporte);
  end;
end;

procedure TfrmLogin.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  Application.Terminate;
end;

procedure TfrmLogin.FormCreate(Sender: TObject);
begin
  FdmLogin := TloginDM.Create(nil);
end;

procedure TfrmLogin.FormKeyPress(Sender: TObject; var Key: Char);
begin
  case key of
    #13 : btnAcessar.Click;
    #27 : btnCancelar.Click;
  end;
end;

end.
