object loginDM: TloginDM
  OldCreateOrder = False
  OnCreate = DataModuleCreate
  OnDestroy = DataModuleDestroy
  Height = 197
  Width = 263
  object qryLogin: TFDQuery
    Connection = dmBase.Connection
    SQL.Strings = (
      'SELECT USUARIO, SENHA, CODIGOUSUARIO, CODIGOUNIDADE FROM LOGIN'
      'WHERE USUARIO = :USUARIO')
    Left = 40
    Top = 88
    ParamData = <
      item
        Name = 'USUARIO'
        DataType = ftString
        FDDataType = dtByteString
        ParamType = ptInput
        Value = ''
      end>
    object qryLoginUSUARIO: TStringField
      FieldName = 'USUARIO'
      Origin = 'USUARIO'
      Required = True
      Size = 50
    end
    object qryLoginSENHA: TStringField
      FieldName = 'SENHA'
      Origin = 'SENHA'
      Required = True
      Size = 70
    end
    object qryLoginCODIGOUSUARIO: TIntegerField
      FieldName = 'CODIGOUSUARIO'
      Origin = 'CODIGOUSUARIO'
      ProviderFlags = [pfInUpdate, pfInWhere, pfInKey]
      Required = True
    end
    object intgrfldLoginCODIGOUNIDADE: TIntegerField
      FieldName = 'CODIGOUNIDADE'
      Required = True
    end
  end
  object qryAlimentaUltimoAcesso: TFDQuery
    Connection = dmBase.Connection
    SQL.Strings = (
      'EXEC SP_ALIMENTAULTIMOACESSO'
      '@CODIGOUSUARIO = :CODIGOUSUARIO,'
      '@USUARIO = :USUARIO,'
      '@DATAATUALIZACAO = :DATAATUALIZACAO,'
      '@MESMOUSUARIO = :MESMOUSUARIO,'
      '@SENHA = :SENHA,'
      '@LEMBRARSENHA = :LEMBRARSENHA,'
      '@CODIGOUNIDADE = :CODIGOUNIDADE')
    Left = 40
    Top = 24
    ParamData = <
      item
        Name = 'CODIGOUSUARIO'
        DataType = ftInteger
        FDDataType = dtInt32
        ParamType = ptInput
        Value = Null
      end
      item
        Name = 'USUARIO'
        DataType = ftString
        FDDataType = dtByteString
        ParamType = ptInput
        Value = Null
      end
      item
        Name = 'DATAATUALIZACAO'
        DataType = ftDateTime
        FDDataType = dtDateTime
        ParamType = ptInput
        Value = Null
      end
      item
        Name = 'MESMOUSUARIO'
        DataType = ftInteger
        FDDataType = dtInt32
        ParamType = ptInput
        Value = Null
      end
      item
        Name = 'SENHA'
        DataType = ftString
        FDDataType = dtByteString
        ParamType = ptInput
        Value = Null
      end
      item
        Name = 'LEMBRARSENHA'
        DataType = ftInteger
        FDDataType = dtInt32
        ParamType = ptInput
        Value = Null
      end
      item
        Name = 'CODIGOUNIDADE'
        ParamType = ptInput
      end>
  end
  object qryConsultaUltimoAcesso: TFDQuery
    Connection = dmBase.Connection
    SQL.Strings = (
      
        'SELECT TOP 1 USUARIO, SENHA,LEMBRARSENHA FROM ULTIMOACESSO ORDER' +
        ' BY DATAATUALIZACAO DESC')
    Left = 184
    Top = 24
    object qryConsultaUltimoAcessoUSUARIO: TStringField
      FieldName = 'USUARIO'
      Origin = 'USUARIO'
      Required = True
      Size = 50
    end
    object qryConsultaUltimoAcessoSENHA: TStringField
      FieldName = 'SENHA'
      Origin = 'SENHA'
      Required = True
      Size = 70
    end
    object qryConsultaUltimoAcessoLEMBRARSENHA: TIntegerField
      FieldName = 'LEMBRARSENHA'
      Origin = 'LEMBRARSENHA'
      Required = True
    end
  end
  object qryUnidade: TFDQuery
    Connection = dmBase.Connection
    Transaction = dmBase.Transaction
    SQL.Strings = (
      'SELECT NOMEUNIDADE, CODIGOUNIDADE FROM UNIDADE')
    Left = 184
    Top = 80
    object qryUnidadeNOMEUNIDADE: TStringField
      FieldName = 'NOMEUNIDADE'
      Required = True
      Size = 80
    end
    object qryUnidadeCODIGOUNIDADE: TIntegerField
      FieldName = 'CODIGOUNIDADE'
      Origin = 'CODIGOUNIDADE'
      Required = True
    end
  end
  object dsUnidade: TDataSource
    DataSet = qryUnidade
    Left = 184
    Top = 136
  end
end
