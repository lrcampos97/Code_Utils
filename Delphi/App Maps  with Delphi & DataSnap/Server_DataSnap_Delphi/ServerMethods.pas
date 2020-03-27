unit ServerMethods;

interface

uses System.SysUtils, System.Classes, System.Json,
    DataSnap.DSProviderDataModuleAdapter,
    Datasnap.DSServer, Datasnap.DSAuth, FireDAC.Stan.Intf, FireDAC.Stan.Option,
  FireDAC.Stan.Error, FireDAC.UI.Intf, FireDAC.Phys.Intf, FireDAC.Stan.Def,
  FireDAC.Stan.Pool, FireDAC.Stan.Async, FireDAC.Phys, FireDAC.Phys.MySQL,
  FireDAC.Phys.MySQLDef, FireDAC.VCLUI.Wait, Data.DB, FireDAC.Comp.Client,
  FireDAC.Stan.Param, FireDAC.DatS, FireDAC.DApt.Intf, FireDAC.DApt,
  FireDAC.Comp.DataSet, FireDAC.Stan.StorageJSON, uConnectionDB, uServerLib, Data.FireDACJSONReflect,
  FireDAC.Stan.StorageBin;

type
  TServerMethods1 = class(TDSServerModule)
    Driver: TFDPhysMySQLDriverLink;
    JsonLink: TFDStanStorageJSONLink;
    FDStanStorageBinLink1: TFDStanStorageBinLink;
    procedure DSServerModuleCreate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }

    //Client methods
    function SearchUser(sName, sPassword: string): TFDJSONDataSets;
    function AddNewUser(Name, Email, PassWord: String): TFDJSONDataSets;
    function LoadUser(iID: Integer): TFDJSONDataSets;
end;


implementation

{$R *.dfm}

uses System.StrUtils,uClient;

var
  ConnectionDB: TConnectionDB;
  Client: TClient;

function TServerMethods1.AddNewUser(Name, Email, PassWord: String): TFDJSONDataSets;
begin
  Result := TFDJSONDataSets.Create;

  TFDJSONDataSetsWriter.ListAdd(Result, Client.AddNewUser(Name, Email, PassWord));
end;


procedure TServerMethods1.DSServerModuleCreate(Sender: TObject);
begin
  ConnectionDB := TConnectionDB.Create;
  Client := TClient.Create(ConnectionDB.Connection);
end;


function TServerMethods1.LoadUser(iID: Integer): TFDJSONDataSets;
begin
  Result := TFDJSONDataSets.Create;

  TFDJSONDataSetsWriter.ListAdd(Result, Client.LoadUser(iID));
end;

function TServerMethods1.SearchUser(sName, sPassword: string): TFDJSONDataSets;
begin
  Result := TFDJSONDataSets.Create;

  TFDJSONDataSetsWriter.ListAdd(Result, Client.SearchUser(sName, sPassword));
end;

end.

