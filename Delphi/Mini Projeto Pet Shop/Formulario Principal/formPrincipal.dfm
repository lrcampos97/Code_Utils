object frmPrincipal: TfrmPrincipal
  Left = 0
  Top = 0
  Caption = 'Principal'
  ClientHeight = 300
  ClientWidth = 493
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  Menu = MainMenu1
  OldCreateOrder = False
  OnClose = FormClose
  PixelsPerInch = 96
  TextHeight = 13
  object MainMenu1: TMainMenu
    Left = 264
    Top = 40
    object CadastrosBsicos1: TMenuItem
      Caption = '&Cadastros B'#225'sicos'
      object CadastrodeUsurios1: TMenuItem
        Caption = '&Cadastro de Usu'#225'rios'
      end
      object CadastrodeFuncionrios1: TMenuItem
        Caption = '&Cadastro de Funcion'#225'rios'
      end
      object CadastrodeEspcies1: TMenuItem
        Caption = '&Cadastro de Esp'#233'cies '
      end
      object CadastrodeRas1: TMenuItem
        Caption = '&Cadastro de Ra'#231'as'
      end
      object Cadastrodetipodepelagem1: TMenuItem
        Caption = '&Cadastro de tipo de pelagem'
      end
      object Cadastrodefunes1: TMenuItem
        Caption = '&Cadastro de fun'#231#245'es'
      end
    end
    object Cliente1: TMenuItem
      Caption = '&Cliente'
      OnClick = Cliente1Click
    end
    object Animais1: TMenuItem
      Caption = '&Animais'
    end
  end
end
