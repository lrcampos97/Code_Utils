unit frmPrincipal_un;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.Grids, Data.DB,
  Datasnap.DBClient, Vcl.DBGrids, comobj;

type
  TForm1 = class(TForm)
    Button1: TButton;
    DBGrid1: TDBGrid;
    cdsDados: TClientDataSet;
    dsDados: TDataSource;
    edtDir: TEdit;
    Label1: TLabel;
    procedure Button1Click(Sender: TObject);
  private
    { Private declarations }
    function PesquisaArquivo(sDiretorio: String): String;
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.Button1Click(Sender: TObject);
var
  planilha,xValue: OLEVariant;
  Colunas, Linhas, c: integer;
  xColumn, sFile: String;
begin
  Screen.Cursor:=crHourglass;
  sFile := PesquisaArquivo(edtDir.Text);

  try
    if sFile.IsEmpty then
      Exit;

    planilha:= CreateOleObject('Excel.Application');
    planilha.workbooks.open(sFile);
    planilha.Sheets[1].Select;

    cdsDados.FieldDefs.Clear;
    cdsDados.Close;

    // procurar as colunas para criar os campos
    for Colunas := 1 to 1500 do
    begin
      xValue := planilha.Cells[1,Colunas].Value;

      // se nao tiver nada
      if xValue = Unassigned then
        Break;

      xColumn := VarToStr(xValue);
      xValue := planilha.Cells[2,Colunas].Value;

      if xValue = Unassigned then
        xValue := 'Textfield';

      // verifica o tipo
      if VarType(xValue) = varOleStr then
        cdsDados.FieldDefs.Add(xColumn,ftString,100)
      else if VarType(xValue) = varDate then
        cdsDados.FieldDefs.Add(xColumn,ftDate,0)
      else if VarType(xValue) = varInteger then
        cdsDados.FieldDefs.Add(xColumn,ftInteger,0)
      else if VarType(xValue) = varDouble then
        cdsDados.FieldDefs.Add(xColumn,ftFloat,0);
    end;

    if cdsDados.Active then
      cdsDados.EmptyDataSet
    else
      cdsDados.CreateDataSet;

    // se criou algum campo
    if cdsDados.FieldDefs.Count > 0  then
    begin
      // Segunda linha
      for Linhas := 2 to 500000 do // valor qualquer
      begin
        // para caso n�o tiver nada
        if planilha.Cells[Linhas,1].Value = Unassigned then
          Break;

        cdsDados.Append;

        Colunas := 0;
        for C := 1 to cdsDados.Fields.Count  do
        begin
          cdsDados.Fields[Colunas].Value := planilha.Cells[Linhas,C].Value;
          Inc(Colunas);
        end;

        cdsDados.Post;
      end;
    end;

    cdsDados.First;
    cdsDados.Open;

  finally
    Screen.Cursor:= crDefault;
    planilha.workbooks.Close;
    planilha := Unassigned;
    FreeAndNil(planilha);
  end;
end;

function TForm1.PesquisaArquivo(sDiretorio: String): String;
var
  F: TSearchRec;
  Ret: Integer;
begin
  Ret := FindFirst(sDiretorio+'\*.xlsx*', faArchive, F);

  Result := sDiretorio + '\'+F.Name;
end;

end.
