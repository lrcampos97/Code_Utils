unit freButtons;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes,
  Vcl.Graphics, Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Buttons, Vcl.ExtCtrls,
  System.ImageList, Vcl.ImgList, System.Actions, Vcl.ActnList, Vcl.DBActns;

type
  TfreBotoes = class(TFrame)
    pnlButtons: TPanel;
    btnPrevious: TSpeedButton;
    btnFirst: TSpeedButton;
    btnLast: TSpeedButton;
    btnNext: TSpeedButton;
    btnVisualizar: TSpeedButton;
    btnEditar: TSpeedButton;
    btnSair: TSpeedButton;
    btnDelete: TSpeedButton;
    btnIncluir: TSpeedButton;
    btnSalvar: TSpeedButton;
    btnCancelar: TSpeedButton;
    ActionFrameBotoes: TActionList;
    actFirst: TDataSetFirst;
    actPrior: TDataSetPrior;
    actNext: TDataSetNext;
    actLast: TDataSetLast;
    actInsert: TDataSetInsert;
    actDelete: TDataSetDelete;
    actEdit: TDataSetEdit;
    actPost: TDataSetPost;
    actCancel: TDataSetCancel;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

implementation

{$R *.dfm}

end.
