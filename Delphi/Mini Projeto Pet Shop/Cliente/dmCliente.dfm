object dmClientes: TdmClientes
  OldCreateOrder = False
  OnCreate = DataModuleCreate
  OnDestroy = DataModuleDestroy
  Height = 151
  Width = 486
  object dsConsultaCliente: TDataSource
    DataSet = QryConsultaCliente
    Left = 40
    Top = 72
  end
  object QryConsultaCliente: TFDQuery
    MasterSource = dsCliente
    MasterFields = 
      'CODIGOCLIENTE;CODIGOPESSOA;CODIGOUSUARIO;DATAATUALIZACAO;FIDELID' +
      'ADE;INATIVO;LIMITECREDITO;OBSERVACOES;ULTIMACOMPRA;UTILIZALIMITE' +
      'CRED;VALORPENDENTE'
    Connection = dmBase.Connection
    UpdateOptions.AssignedValues = [uvLockMode]
    UpdateOptions.LockMode = lmOptimistic
    SQL.Strings = (
      'SELECT     CLI.CODIGOCLIENTE,'
      #9'   PES.NOME,'
      #9'   CLI.FIDELIDADE,'
      #9'   CLI.VALORPENDENTE,'
      #9'   CLI.ULTIMACOMPRA,'
      #9'   CLI.INATIVO,'
      #9'   PES.TELEFONEPRINCIPAL,'
      
        #9'   (ENR.LOGRADOURO + '#39' / '#39' + ENR.NUMERO + '#39' - '#39' + MUN.NOME) AS ' +
        'ENDERECO,'
      ' '#9'   CLI.CODIGOPESSOA'#9'  '#9'   '#9' '
      'FROM CLIENTE CLI'
      #9'INNER JOIN PESSOA PES'
      #9#9'ON CLI.CODIGOPESSOA = PES.CODIGOPESSOA'
      #9'INNER JOIN ENDERECO ENR'
      #9#9'ON PES.CODIGOENDERECO = ENR.CODIGOENDERECO'
      #9'INNER JOIN MUNICIPIO MUN'
      #9#9'ON ENR.CODIGOMUNICIPIO = MUN.CODIGOMUNICIPIO'
      '&M_FILTROS'
      ''
      ''
      ''
      ''
      '')
    Left = 40
    Top = 16
    MacroData = <
      item
        Value = Null
        Name = 'M_FILTROS'
        DataType = mdUnknown
      end>
  end
  object tblCliente: TFDTable
    AfterInsert = tblClienteAfterInsert
    BeforePost = tblClienteBeforePost
    IndexFieldNames = 'CODIGOCLIENTE'
    MasterSource = dsPessoa
    MasterFields = 'CODIGOPESSOA'
    Connection = dmBase.Connection
    UpdateOptions.UpdateTableName = 'PetShop_Homologacao..CLIENTE'
    TableName = 'PetShop_Homologacao..CLIENTE'
    Left = 128
    Top = 16
    object tblClienteCODIGOCLIENTE: TIntegerField
      FieldName = 'CODIGOCLIENTE'
      Origin = 'CODIGOCLIENTE'
      ProviderFlags = [pfInUpdate, pfInWhere, pfInKey]
      Required = True
    end
    object tblClienteCODIGOPESSOA: TIntegerField
      FieldName = 'CODIGOPESSOA'
      Origin = 'CODIGOPESSOA'
      Required = True
    end
    object tblClienteCODIGOUSUARIO: TIntegerField
      FieldName = 'CODIGOUSUARIO'
      Origin = 'CODIGOUSUARIO'
      Required = True
    end
    object tblClienteDATAATUALIZACAO: TSQLTimeStampField
      FieldName = 'DATAATUALIZACAO'
      Origin = 'DATAATUALIZACAO'
      Required = True
    end
    object tblClienteFIDELIDADE: TBCDField
      FieldName = 'FIDELIDADE'
      Origin = 'FIDELIDADE'
      Precision = 15
      Size = 2
    end
    object tblClienteLIMITECREDITO: TBCDField
      FieldName = 'LIMITECREDITO'
      Origin = 'LIMITECREDITO'
      Precision = 15
      Size = 2
    end
    object tblClienteUTILIZALIMITECRED: TIntegerField
      FieldName = 'UTILIZALIMITECRED'
      Origin = 'UTILIZALIMITECRED'
      Required = True
    end
    object tblClienteVALORPENDENTE: TBCDField
      FieldName = 'VALORPENDENTE'
      Origin = 'VALORPENDENTE'
      Precision = 15
      Size = 2
    end
    object tblClienteULTIMACOMPRA: TSQLTimeStampField
      FieldName = 'ULTIMACOMPRA'
      Origin = 'ULTIMACOMPRA'
    end
    object tblClienteINATIVO: TIntegerField
      FieldName = 'INATIVO'
      Origin = 'INATIVO'
      Required = True
    end
    object tblClienteOBSERVACOES: TStringField
      FieldName = 'OBSERVACOES'
      Origin = 'OBSERVACOES'
      Size = 200
    end
  end
  object dsCliente: TDataSource
    DataSet = tblCliente
    Left = 128
    Top = 72
  end
  object tblPessoa: TFDTable
    BeforeInsert = tblPessoaBeforeInsert
    IndexFieldNames = 'CODIGOPESSOA'
    Connection = dmBase.Connection
    Transaction = dmBase.Transaction
    UpdateOptions.UpdateTableName = 'PetShop_Homologacao..PESSOA'
    TableName = 'PetShop_Homologacao..PESSOA'
    Left = 192
    Top = 16
    object tblPessoaCODIGOPESSOA: TIntegerField
      FieldName = 'CODIGOPESSOA'
      Origin = 'CODIGOPESSOA'
      Required = True
    end
    object tblPessoaCODIGOENDERECO: TIntegerField
      FieldName = 'CODIGOENDERECO'
      Origin = 'CODIGOENDERECO'
      Required = True
    end
    object tblPessoaCODIGOUSUARIO: TIntegerField
      FieldName = 'CODIGOUSUARIO'
      Origin = 'CODIGOUSUARIO'
      Required = True
    end
    object tblPessoaNOME: TStringField
      FieldName = 'NOME'
      Origin = 'NOME'
      Required = True
      Size = 50
    end
    object tblPessoaRAZAOSOCIAL: TStringField
      FieldName = 'RAZAOSOCIAL'
      Origin = 'RAZAOSOCIAL'
      Size = 100
    end
    object tblPessoaTIPOPESSOA: TStringField
      FieldName = 'TIPOPESSOA'
      Origin = 'TIPOPESSOA'
      Required = True
      FixedChar = True
      Size = 1
    end
    object tblPessoaCPFCNPJ: TStringField
      FieldName = 'CPFCNPJ'
      Origin = 'CPFCNPJ'
      Size = 18
    end
    object tblPessoaRG: TStringField
      FieldName = 'RG'
      Origin = 'RG'
      Size = 10
    end
    object tblPessoaSEXO: TStringField
      FieldName = 'SEXO'
      Origin = 'SEXO'
      Required = True
      FixedChar = True
      Size = 1
    end
    object tblPessoaIDADE: TIntegerField
      FieldName = 'IDADE'
      Origin = 'IDADE'
      Required = True
    end
    object tblPessoaTELEFONEPRINCIPAL: TStringField
      FieldName = 'TELEFONEPRINCIPAL'
      Origin = 'TELEFONEPRINCIPAL'
      Required = True
      Size = 11
    end
    object tblPessoaTELEFONEOPCIONAL1: TStringField
      FieldName = 'TELEFONEOPCIONAL1'
      Origin = 'TELEFONEOPCIONAL1'
      Size = 11
    end
    object tblPessoaTELEFONEOPCIONAL2: TStringField
      FieldName = 'TELEFONEOPCIONAL2'
      Origin = 'TELEFONEOPCIONAL2'
      Size = 11
    end
    object tblPessoaDATACADASTRO: TDateField
      FieldName = 'DATACADASTRO'
      Origin = 'DATACADASTRO'
      Required = True
    end
    object tblPessoaEMAIL: TStringField
      FieldName = 'EMAIL'
      Origin = 'EMAIL'
      Size = 80
    end
    object tblPessoaFOTOPESSOA: TBlobField
      FieldName = 'FOTOPESSOA'
      Origin = 'FOTOPESSOA'
    end
    object tblPessoaDATANASCIMENTO: TSQLTimeStampField
      FieldName = 'DATANASCIMENTO'
      Origin = 'DATANASCIMENTO'
    end
  end
  object dsPessoa: TDataSource
    DataSet = tblPessoa
    Left = 192
    Top = 72
  end
  object tblEndereco: TFDTable
    BeforeInsert = tblEnderecoBeforeInsert
    IndexFieldNames = 'CODIGOENDERECO'
    MasterSource = dsPessoa
    MasterFields = 'CODIGOENDERECO'
    Connection = dmBase.Connection
    Transaction = dmBase.Transaction
    UpdateOptions.UpdateTableName = 'PetShop_Homologacao..ENDERECO'
    TableName = 'PetShop_Homologacao..ENDERECO'
    Left = 256
    Top = 16
    object tblEnderecoCODIGOENDERECO: TIntegerField
      FieldName = 'CODIGOENDERECO'
      Origin = 'CODIGOENDERECO'
      ProviderFlags = [pfInUpdate, pfInWhere, pfInKey]
      Required = True
    end
    object tblEnderecoCODIGOPESSOA: TIntegerField
      FieldName = 'CODIGOPESSOA'
      Origin = 'CODIGOPESSOA'
      Required = True
    end
    object tblEnderecoCODIGOUF: TIntegerField
      FieldName = 'CODIGOUF'
      Origin = 'CODIGOUF'
      Required = True
    end
    object tblEnderecoCODIGOMUNICIPIO: TIntegerField
      FieldName = 'CODIGOMUNICIPIO'
      Origin = 'CODIGOMUNICIPIO'
      Required = True
    end
    object tblEnderecoLOGRADOURO: TStringField
      FieldName = 'LOGRADOURO'
      Origin = 'LOGRADOURO'
      Required = True
      Size = 60
    end
    object tblEnderecoNUMERO: TStringField
      FieldName = 'NUMERO'
      Origin = 'NUMERO'
      Required = True
      Size = 10
    end
    object tblEnderecoBAIRRO: TStringField
      FieldName = 'BAIRRO'
      Origin = 'BAIRRO'
      Required = True
      Size = 60
    end
    object tblEnderecoCOMPLEMENTO: TStringField
      FieldName = 'COMPLEMENTO'
      Origin = 'COMPLEMENTO'
      Size = 50
    end
    object tblEnderecoCEP: TStringField
      FieldName = 'CEP'
      Origin = 'CEP'
      Size = 9
    end
  end
  object dsEndereco: TDataSource
    DataSet = tblEndereco
    Left = 256
    Top = 72
  end
  object tblAnimais: TFDTable
    Left = 376
    Top = 16
  end
  object dsAnimais: TDataSource
    Left = 376
    Top = 72
  end
end
