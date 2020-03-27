program PetShop;

uses
  Vcl.Forms,
  SysUtils,
  windows,
  uLogin in 'Login\uLogin.pas' {frmLogin},
  dmLogin in 'Login\dmLogin.pas' {loginDM: TDataModule},
  uSuporte in 'formSuporte\uSuporte.pas' {frmSuporte},
  UdmBase in 'dmBase\UdmBase.pas' {dmBase: TDataModule},
  CadPadrao in 'CadPadrao\CadPadrao.pas' {frmPadrao},
  frePesquisa in 'Frames\frePesquisa.pas' {frePesquisar: TFrame},
  freButtons in 'Frames\freButtons.pas' {freBotoes: TFrame},
  formPrincipal in 'Formulario Principal\formPrincipal.pas' {frmPrincipal},
  uUsuario in 'Usuario\uUsuario.pas',
  freTitulo in 'Frames\freTitulo.pas' {Frame2: TFrame},
  uTypes in 'Adicionais\uTypes.pas',
  uUtils in 'Adicionais\uUtils.pas';

{$R *.res}


  function ValidateLicense: Integer;
  begin
    try
      dmBase.fdqryVerificaLicenca.Close;
      dmbase.fdqryVerificaLicenca.ParamByName('CODIGOEMPRESA').AsInteger := dmbase.CodigoEmpresa;
      dmbase.fdqryVerificaLicenca.Open();

      Result := dmBase.fdqryVerificaLicenca.FieldByName('RESULTADO').AsInteger;
    except on E: Exception do

      begin
        Application.messagebox(PChar(e.Message),'Erro ao inicializar a aplicaçao', mb_iconerror + mb_ok);
        Application.Terminate;
      end;

    end;
  end;


begin
  try
    try
      // CARREGAR TODOS OS DMS
      dmBase := TdmBase.Create(nil);

//      if ValidateLicense = 1 then
//        raise Exception.Create('Licença expirada.');

      frmLogin := TfrmLogin.Create(nil);
//      frmLogin.Hide;
      frmLogin.ShowModal;
    finally
      FreeAndNil(dmBase);
      FreeAndNil(loginDM);  
    end;

  except on E: Exception do
    begin
      Application.messagebox(PChar('Erro ao tentar conectar com o banco de dados.'+ #13+e.Message),'Erro no Banco do dados', mb_iconerror+mb_ok);
      Application.Terminate;
    end;
  end;

  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.Run;
end.
