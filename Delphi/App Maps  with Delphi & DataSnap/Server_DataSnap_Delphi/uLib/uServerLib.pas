unit uServerLib;

interface

uses
  SysUtils,
  Classes,
  {$ifndef FPC}
  Contnrs,
  {$endif}
  {$ifndef NOVARIANTS}
  Variants,
  {$endif}
  {$ifdef ISDELPHIXE2}
  System.Generics.Collections,
  Data.DB, Data.FMTBcd;
  {$else}
  DB, FMTBcd,
  {$endif}
  System.Json,
  System.Json.Writers;


implementation

end.
