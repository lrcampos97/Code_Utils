//
// Created by the DataSnap proxy generator.
// 16/10/2017 00:00:30
//

unit ClientClasses;

interface

uses System.JSON, Datasnap.DSProxyRest, Datasnap.DSClientRest, Data.DBXCommon, Data.DBXClient, Data.DBXDataSnap, Data.DBXJSON, Datasnap.DSProxy, System.Classes, System.SysUtils, Data.DB, Data.SqlExpr, Data.DBXDBReaders, Data.DBXCDSReaders, Data.FireDACJSONReflect, Data.DBXJSONReflect;

type

  IDSRestCachedTFDJSONDataSets = interface;

  TServerMethods1Client = class(TDSAdminRestClient)
  private
    FDSServerModuleCreateCommand: TDSRestCommand;
    FSearchUserCommand: TDSRestCommand;
    FSearchUserCommand_Cache: TDSRestCommand;
    FAddNewUserCommand: TDSRestCommand;
    FAddNewUserCommand_Cache: TDSRestCommand;
    FLoadUserCommand: TDSRestCommand;
    FLoadUserCommand_Cache: TDSRestCommand;
  public
    constructor Create(ARestConnection: TDSRestConnection); overload;
    constructor Create(ARestConnection: TDSRestConnection; AInstanceOwner: Boolean); overload;
    destructor Destroy; override;
    procedure DSServerModuleCreate(Sender: TObject);
    function SearchUser(sName: string; sPassword: string; const ARequestFilter: string = ''): TFDJSONDataSets;
    function SearchUser_Cache(sName: string; sPassword: string; const ARequestFilter: string = ''): IDSRestCachedTFDJSONDataSets;
    function AddNewUser(Name: string; Email: string; PassWord: string; const ARequestFilter: string = ''): TFDJSONDataSets;
    function AddNewUser_Cache(Name: string; Email: string; PassWord: string; const ARequestFilter: string = ''): IDSRestCachedTFDJSONDataSets;
    function LoadUser(iID: Integer; const ARequestFilter: string = ''): TFDJSONDataSets;
    function LoadUser_Cache(iID: Integer; const ARequestFilter: string = ''): IDSRestCachedTFDJSONDataSets;
  end;

  IDSRestCachedTFDJSONDataSets = interface(IDSRestCachedObject<TFDJSONDataSets>)
  end;

  TDSRestCachedTFDJSONDataSets = class(TDSRestCachedObject<TFDJSONDataSets>, IDSRestCachedTFDJSONDataSets, IDSRestCachedCommand)
  end;

const
  TServerMethods1_DSServerModuleCreate: array [0..0] of TDSRestParameterMetaData =
  (
    (Name: 'Sender'; Direction: 1; DBXType: 37; TypeName: 'TObject')
  );

  TServerMethods1_SearchUser: array [0..2] of TDSRestParameterMetaData =
  (
    (Name: 'sName'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: 'sPassword'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: ''; Direction: 4; DBXType: 37; TypeName: 'TFDJSONDataSets')
  );

  TServerMethods1_SearchUser_Cache: array [0..2] of TDSRestParameterMetaData =
  (
    (Name: 'sName'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: 'sPassword'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: ''; Direction: 4; DBXType: 26; TypeName: 'String')
  );

  TServerMethods1_AddNewUser: array [0..3] of TDSRestParameterMetaData =
  (
    (Name: 'Name'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: 'Email'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: 'PassWord'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: ''; Direction: 4; DBXType: 37; TypeName: 'TFDJSONDataSets')
  );

  TServerMethods1_AddNewUser_Cache: array [0..3] of TDSRestParameterMetaData =
  (
    (Name: 'Name'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: 'Email'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: 'PassWord'; Direction: 1; DBXType: 26; TypeName: 'string'),
    (Name: ''; Direction: 4; DBXType: 26; TypeName: 'String')
  );

  TServerMethods1_LoadUser: array [0..1] of TDSRestParameterMetaData =
  (
    (Name: 'iID'; Direction: 1; DBXType: 6; TypeName: 'Integer'),
    (Name: ''; Direction: 4; DBXType: 37; TypeName: 'TFDJSONDataSets')
  );

  TServerMethods1_LoadUser_Cache: array [0..1] of TDSRestParameterMetaData =
  (
    (Name: 'iID'; Direction: 1; DBXType: 6; TypeName: 'Integer'),
    (Name: ''; Direction: 4; DBXType: 26; TypeName: 'String')
  );

implementation

procedure TServerMethods1Client.DSServerModuleCreate(Sender: TObject);
begin
  if FDSServerModuleCreateCommand = nil then
  begin
    FDSServerModuleCreateCommand := FConnection.CreateCommand;
    FDSServerModuleCreateCommand.RequestType := 'POST';
    FDSServerModuleCreateCommand.Text := 'TServerMethods1."DSServerModuleCreate"';
    FDSServerModuleCreateCommand.Prepare(TServerMethods1_DSServerModuleCreate);
  end;
  if not Assigned(Sender) then
    FDSServerModuleCreateCommand.Parameters[0].Value.SetNull
  else
  begin
    FMarshal := TDSRestCommand(FDSServerModuleCreateCommand.Parameters[0].ConnectionHandler).GetJSONMarshaler;
    try
      FDSServerModuleCreateCommand.Parameters[0].Value.SetJSONValue(FMarshal.Marshal(Sender), True);
      if FInstanceOwner then
        Sender.Free
    finally
      FreeAndNil(FMarshal)
    end
    end;
  FDSServerModuleCreateCommand.Execute;
end;

function TServerMethods1Client.SearchUser(sName: string; sPassword: string; const ARequestFilter: string): TFDJSONDataSets;
begin
  if FSearchUserCommand = nil then
  begin
    FSearchUserCommand := FConnection.CreateCommand;
    FSearchUserCommand.RequestType := 'GET';
    FSearchUserCommand.Text := 'TServerMethods1.SearchUser';
    FSearchUserCommand.Prepare(TServerMethods1_SearchUser);
  end;
  FSearchUserCommand.Parameters[0].Value.SetWideString(sName);
  FSearchUserCommand.Parameters[1].Value.SetWideString(sPassword);
  FSearchUserCommand.Execute(ARequestFilter);
  if not FSearchUserCommand.Parameters[2].Value.IsNull then
  begin
    FUnMarshal := TDSRestCommand(FSearchUserCommand.Parameters[2].ConnectionHandler).GetJSONUnMarshaler;
    try
      Result := TFDJSONDataSets(FUnMarshal.UnMarshal(FSearchUserCommand.Parameters[2].Value.GetJSONValue(True)));
      if FInstanceOwner then
        FSearchUserCommand.FreeOnExecute(Result);
    finally
      FreeAndNil(FUnMarshal)
    end
  end
  else
    Result := nil;
end;

function TServerMethods1Client.SearchUser_Cache(sName: string; sPassword: string; const ARequestFilter: string): IDSRestCachedTFDJSONDataSets;
begin
  if FSearchUserCommand_Cache = nil then
  begin
    FSearchUserCommand_Cache := FConnection.CreateCommand;
    FSearchUserCommand_Cache.RequestType := 'GET';
    FSearchUserCommand_Cache.Text := 'TServerMethods1.SearchUser';
    FSearchUserCommand_Cache.Prepare(TServerMethods1_SearchUser_Cache);
  end;
  FSearchUserCommand_Cache.Parameters[0].Value.SetWideString(sName);
  FSearchUserCommand_Cache.Parameters[1].Value.SetWideString(sPassword);
  FSearchUserCommand_Cache.ExecuteCache(ARequestFilter);
  Result := TDSRestCachedTFDJSONDataSets.Create(FSearchUserCommand_Cache.Parameters[2].Value.GetString);
end;

function TServerMethods1Client.AddNewUser(Name: string; Email: string; PassWord: string; const ARequestFilter: string): TFDJSONDataSets;
begin
  if FAddNewUserCommand = nil then
  begin
    FAddNewUserCommand := FConnection.CreateCommand;
    FAddNewUserCommand.RequestType := 'GET';
    FAddNewUserCommand.Text := 'TServerMethods1.AddNewUser';
    FAddNewUserCommand.Prepare(TServerMethods1_AddNewUser);
  end;
  FAddNewUserCommand.Parameters[0].Value.SetWideString(Name);
  FAddNewUserCommand.Parameters[1].Value.SetWideString(Email);
  FAddNewUserCommand.Parameters[2].Value.SetWideString(PassWord);
  FAddNewUserCommand.Execute(ARequestFilter);
  if not FAddNewUserCommand.Parameters[3].Value.IsNull then
  begin
    FUnMarshal := TDSRestCommand(FAddNewUserCommand.Parameters[3].ConnectionHandler).GetJSONUnMarshaler;
    try
      Result := TFDJSONDataSets(FUnMarshal.UnMarshal(FAddNewUserCommand.Parameters[3].Value.GetJSONValue(True)));
      if FInstanceOwner then
        FAddNewUserCommand.FreeOnExecute(Result);
    finally
      FreeAndNil(FUnMarshal)
    end
  end
  else
    Result := nil;
end;

function TServerMethods1Client.AddNewUser_Cache(Name: string; Email: string; PassWord: string; const ARequestFilter: string): IDSRestCachedTFDJSONDataSets;
begin
  if FAddNewUserCommand_Cache = nil then
  begin
    FAddNewUserCommand_Cache := FConnection.CreateCommand;
    FAddNewUserCommand_Cache.RequestType := 'GET';
    FAddNewUserCommand_Cache.Text := 'TServerMethods1.AddNewUser';
    FAddNewUserCommand_Cache.Prepare(TServerMethods1_AddNewUser_Cache);
  end;
  FAddNewUserCommand_Cache.Parameters[0].Value.SetWideString(Name);
  FAddNewUserCommand_Cache.Parameters[1].Value.SetWideString(Email);
  FAddNewUserCommand_Cache.Parameters[2].Value.SetWideString(PassWord);
  FAddNewUserCommand_Cache.ExecuteCache(ARequestFilter);
  Result := TDSRestCachedTFDJSONDataSets.Create(FAddNewUserCommand_Cache.Parameters[3].Value.GetString);
end;

function TServerMethods1Client.LoadUser(iID: Integer; const ARequestFilter: string): TFDJSONDataSets;
begin
  if FLoadUserCommand = nil then
  begin
    FLoadUserCommand := FConnection.CreateCommand;
    FLoadUserCommand.RequestType := 'GET';
    FLoadUserCommand.Text := 'TServerMethods1.LoadUser';
    FLoadUserCommand.Prepare(TServerMethods1_LoadUser);
  end;
  FLoadUserCommand.Parameters[0].Value.SetInt32(iID);
  FLoadUserCommand.Execute(ARequestFilter);
  if not FLoadUserCommand.Parameters[1].Value.IsNull then
  begin
    FUnMarshal := TDSRestCommand(FLoadUserCommand.Parameters[1].ConnectionHandler).GetJSONUnMarshaler;
    try
      Result := TFDJSONDataSets(FUnMarshal.UnMarshal(FLoadUserCommand.Parameters[1].Value.GetJSONValue(True)));
      if FInstanceOwner then
        FLoadUserCommand.FreeOnExecute(Result);
    finally
      FreeAndNil(FUnMarshal)
    end
  end
  else
    Result := nil;
end;

function TServerMethods1Client.LoadUser_Cache(iID: Integer; const ARequestFilter: string): IDSRestCachedTFDJSONDataSets;
begin
  if FLoadUserCommand_Cache = nil then
  begin
    FLoadUserCommand_Cache := FConnection.CreateCommand;
    FLoadUserCommand_Cache.RequestType := 'GET';
    FLoadUserCommand_Cache.Text := 'TServerMethods1.LoadUser';
    FLoadUserCommand_Cache.Prepare(TServerMethods1_LoadUser_Cache);
  end;
  FLoadUserCommand_Cache.Parameters[0].Value.SetInt32(iID);
  FLoadUserCommand_Cache.ExecuteCache(ARequestFilter);
  Result := TDSRestCachedTFDJSONDataSets.Create(FLoadUserCommand_Cache.Parameters[1].Value.GetString);
end;

constructor TServerMethods1Client.Create(ARestConnection: TDSRestConnection);
begin
  inherited Create(ARestConnection);
end;

constructor TServerMethods1Client.Create(ARestConnection: TDSRestConnection; AInstanceOwner: Boolean);
begin
  inherited Create(ARestConnection, AInstanceOwner);
end;

destructor TServerMethods1Client.Destroy;
begin
  FDSServerModuleCreateCommand.DisposeOf;
  FSearchUserCommand.DisposeOf;
  FSearchUserCommand_Cache.DisposeOf;
  FAddNewUserCommand.DisposeOf;
  FAddNewUserCommand_Cache.DisposeOf;
  FLoadUserCommand.DisposeOf;
  FLoadUserCommand_Cache.DisposeOf;
  inherited;
end;

end.

