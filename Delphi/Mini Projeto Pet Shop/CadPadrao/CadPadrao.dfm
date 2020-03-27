object frmPadrao: TfrmPadrao
  Left = 98
  Top = 0
  BorderIcons = [biSystemMenu]
  BorderStyle = bsSingle
  Caption = 'Cadastro Padr'#227'o'
  ClientHeight = 584
  ClientWidth = 1044
  Color = clBtnFace
  Constraints.MinHeight = 613
  Constraints.MinWidth = 1050
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  KeyPreview = True
  OldCreateOrder = False
  Position = poDesktopCenter
  OnCreate = FormCreate
  OnKeyDown = FormKeyDown
  OnShow = FormShow
  PixelsPerInch = 96
  TextHeight = 13
  object img1: TImage
    Left = 736
    Top = 296
    Width = 105
    Height = 105
  end
  object pgPrincipal: TPageControl
    Left = 0
    Top = 68
    Width = 1044
    Height = 445
    ActivePage = pgCadastro
    Align = alClient
    TabOrder = 0
    object pgPesquisa: TTabSheet
      Caption = 'pgPesquisa'
      TabVisible = False
      object dbGridPesquisa: TDBGrid
        Left = 0
        Top = 0
        Width = 812
        Height = 425
        Align = alCustom
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        TabOrder = 0
        TitleFont.Charset = DEFAULT_CHARSET
        TitleFont.Color = clWindowText
        TitleFont.Height = -11
        TitleFont.Name = 'Tahoma'
        TitleFont.Style = []
      end
      inline frePesquisar1: TfrePesquisar
        Left = 823
        Top = 0
        Width = 213
        Height = 435
        Align = alRight
        Color = clSilver
        ParentBackground = False
        ParentColor = False
        TabOrder = 1
        ExplicitLeft = 823
        ExplicitHeight = 435
        inherited pnlPesquisa: TPanel
          Height = 435
          ExplicitHeight = 435
          DesignSize = (
            213
            435)
          inherited lblQtdRegistros: TLabel
            Top = 393
            ExplicitTop = 393
          end
          inherited lblRegistros: TLabel
            Top = 393
            ExplicitTop = 393
          end
          inherited btnPesquisar: TSpeedButton
            Left = 52
            Top = 274
            OnClick = frePesquisar1btnPesquisarClick
            ExplicitLeft = 52
            ExplicitTop = 274
          end
        end
      end
    end
    object pgCadastro: TTabSheet
      Caption = 'pgCadastro'
      ImageIndex = 1
      TabVisible = False
    end
  end
  inline freBotoes: TfreBotoes
    Left = 0
    Top = 513
    Width = 1044
    Height = 71
    Align = alBottom
    TabOrder = 1
    ExplicitTop = 513
    ExplicitWidth = 1044
    inherited pnlButtons: TPanel
      Width = 1044
      ExplicitWidth = 1044
      inherited btnPrevious: TSpeedButton
        Anchors = [akLeft, akBottom]
      end
      inherited btnFirst: TSpeedButton
        Anchors = [akLeft, akBottom]
      end
      inherited btnLast: TSpeedButton
        Anchors = [akLeft, akBottom]
      end
      inherited btnNext: TSpeedButton
        Anchors = [akLeft, akBottom]
      end
      inherited btnVisualizar: TSpeedButton
        Left = 386
        Anchors = [akLeft, akBottom]
        OnClick = sbtnVisualizarClick
        ExplicitLeft = 386
      end
      inherited btnEditar: TSpeedButton
        Anchors = [akLeft, akBottom]
      end
      inherited btnSair: TSpeedButton
        Left = 962
        Anchors = [akRight, akBottom]
        OnClick = sbtnSairClick
        ExplicitLeft = 952
      end
      inherited btnDelete: TSpeedButton
        Anchors = [akLeft, akBottom]
      end
      inherited btnIncluir: TSpeedButton
        Anchors = [akLeft, akBottom]
      end
      inherited btnSalvar: TSpeedButton
        Left = 745
        Anchors = [akLeft, akBottom]
        ExplicitLeft = 745
      end
      inherited btnCancelar: TSpeedButton
        Left = 829
        Anchors = [akLeft, akBottom]
        ExplicitLeft = 829
      end
    end
  end
  inline freTitulo: TframeTitulo
    Left = 0
    Top = 0
    Width = 1044
    Height = 68
    Align = alTop
    TabOrder = 2
    ExplicitWidth = 1044
    inherited pnlTitulo: TPanel
      Width = 1044
      ExplicitWidth = 1044
      inherited bvlStatus: TBevel
        Left = 900
        ExplicitLeft = 890
      end
      inherited lblState: TLabel
        Left = 929
        Top = 22
        Anchors = [akTop, akRight]
        ExplicitLeft = 919
        ExplicitTop = 22
      end
    end
  end
end
