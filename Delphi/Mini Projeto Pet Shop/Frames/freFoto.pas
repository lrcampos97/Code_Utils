unit freFoto;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes,
  Vcl.Graphics, Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.Buttons, Vcl.StdCtrls,
  Vcl.DBCtrls, Vcl.ExtDlgs, frmFoto;

type
  TframeFoto = class(TFrame)
    lblFoto: TLabel;
    dbimgCliente: TDBImage;
    edtCaminhoFoto: TEdit;
    btnVisualizarFoto: TSpeedButton;
    btnAddFoto: TSpeedButton;
    btnExcluirFoto: TSpeedButton;
    dlgOpenPic: TOpenPictureDialog;
    procedure btnAddFotoClick(Sender: TObject);
    procedure btnExcluirFotoClick(Sender: TObject);
    procedure btnVisualizarFotoClick(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

implementation

{$R *.dfm}

procedure TframeFoto.btnAddFotoClick(Sender: TObject);
begin
  if dlgOpenPic.Execute() then
    if FileExists(dlgOpenPic.FileName) then
      dbimgCliente.Picture.LoadFromFile(dlgOpenPic.FileName)
    else
      raise Exception.Create('O arquivo selecionado n�o existe.');

  edtCaminhoFoto.Text := dlgOpenPic.FileName;
end;

procedure TframeFoto.btnExcluirFotoClick(Sender: TObject);
begin
  dbimgCliente.Picture.Bitmap := nil;
  edtCaminhoFoto.Clear;
end;

procedure TframeFoto.btnVisualizarFotoClick(Sender: TObject);
begin
  if not (dbimgCliente.Picture.Graphic = nil) then
  begin
    formFoto := TformFoto.Create(nil);
    try
      formFoto.imgFrmFoto.Picture := dbimgCliente.Picture;
      formFoto.ShowModal;
    finally
      FreeAndNil(formFoto);
    end;
  end;
end;

end.
