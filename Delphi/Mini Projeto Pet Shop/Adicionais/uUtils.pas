unit uUtils;

interface

uses
  frePesquisa, uTypes;

type
  TUtils = class
    function iif(sCondition,vtrue,vfalse: Variant):Variant;

    procedure AplicaCriterios(frePesquisa: TfrePesquisar; var sCriterios: String);
  end;


implementation

{ TUtils }


procedure TUtils.AplicaCriterios(frePesquisa: TfrePesquisar; var sCriterios: String);
begin
  if frePesquisa.TipoCriterio = stNumerico then
  begin
    case frePesquisa.cbCriterios.ItemIndex of
      1: sCriterios := ' = ';
      2: sCriterios := ' > ';
      3: sCriterios := ' < ';
      4: sCriterios := ' <> ';
    end;
  end
  else if (frePesquisa.TipoCriterio = stTexto) or
    (frePesquisa.TipoCriterio = stAtivInativo) then
  begin
    case frePesquisa.cbCriterios.ItemIndex of
      1: sCriterios := ' = ';
      2: sCriterios := ' LIKE ';
      3: sCriterios := ' <> ';
    end;
  end;
end;

function TUtils.iif(sCondition, vtrue, vfalse: Variant): Variant;
begin
  if sCondition = true then
    Result := vtrue
  else
    Result := vfalse;
end;

end.
