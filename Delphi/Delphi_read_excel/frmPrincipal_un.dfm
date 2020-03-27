object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 232
  ClientWidth = 486
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 197
    Top = 181
    Width = 45
    Height = 13
    Caption = 'Diret'#243'rio:'
  end
  object Button1: TButton
    Left = 384
    Top = 176
    Width = 75
    Height = 25
    Caption = 'Carregar'
    TabOrder = 0
    OnClick = Button1Click
  end
  object DBGrid1: TDBGrid
    Left = 0
    Top = 0
    Width = 486
    Height = 145
    Align = alTop
    DataSource = dsDados
    Options = [dgTitles, dgIndicator, dgColumnResize, dgColLines, dgRowLines, dgTabs, dgConfirmDelete, dgCancelOnExit, dgTitleClick, dgTitleHotTrack]
    TabOrder = 1
    TitleFont.Charset = DEFAULT_CHARSET
    TitleFont.Color = clWindowText
    TitleFont.Height = -11
    TitleFont.Name = 'Tahoma'
    TitleFont.Style = []
  end
  object edtDir: TEdit
    Left = 248
    Top = 178
    Width = 113
    Height = 21
    TabOrder = 2
  end
  object cdsDados: TClientDataSet
    Aggregates = <>
    Filtered = True
    Params = <>
    Left = 80
    Top = 160
  end
  object dsDados: TDataSource
    DataSet = cdsDados
    Left = 32
    Top = 160
  end
end
