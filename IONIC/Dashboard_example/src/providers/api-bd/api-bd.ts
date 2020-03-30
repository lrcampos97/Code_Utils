import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AlertController,LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiBdProvider {

  public URL = 'URL';

  constructor(public http: HttpClient, private alertCtrl: AlertController,private loadingCtrl: LoadingController) {
  }

  validaUsuario(_LOGIN, _SENHA: String){
    let loading = this.loadingCtrl.create({
      content: 'Validando Usuário...'
    });

    loading.present();

    return new Promise((resolve,reject) => {

      this.http.get(this.URL+'/usuario/'+localStorage.getItem('IP')+'/'+this.tools_replaceAll(localStorage.getItem('BANCO'),"\\\\","=")+'/'+_LOGIN+'/'+_SENHA)
        .subscribe((result: any) => {
          resolve(result); 
          
          if (result.length == 0) {
            loading.dismiss();
            this.alertCtrl.create({
              title: 'Status Login',
              subTitle: 'Usuário ou Senha incorreto!',
              buttons: [
                { text: 'Ok' }
              ]
            }).present();  
          } else {
             loading.dismiss();
             localStorage.setItem('usuario', result[0].USUARIO.LOGIN);        
             localStorage.setItem('senha', result[0].USUARIO.SENHA);
          }
      }, 
        (err: any) => {
          loading.dismiss();                
          //reject(error)
          this.alertCtrl.create({
            title: 'Erro de Conexão',
            subTitle: 'Não foi possível estabelecer uma conexão com o servidor. Tente novamente mais tarde! <br>',
            buttons: [
              { text: 'Ok' }
            ]
          }).present();

          console.log('ERRO LOGIN: ',err);
      });

    });  
  }

  tools_replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  ValidaConexao(_IP, _BANCO: String, _SIlencioso: Boolean = false){

    let loading = this.loadingCtrl.create({
      content: 'Verificando Conexão...'
    });

    loading.present();
    
    let banco = this.tools_replaceAll(_BANCO,"\\\\","=");

    return new Promise((resolve,reject) => {
      
      this.http.get(this.URL+'/ValidaConexao/'+_IP+'/'+banco)
        .subscribe((result: any) => {          
          resolve(result);           
          loading.dismiss();


          if (result.length > 0) {
            if (_SIlencioso == false) {
              this.alertCtrl.create({
                title: 'Status Conexão',
                subTitle: 'Conexão realizada com sucesso!',
                buttons: [
                  { text: 'Ok' }
                ]
              }).present();         
            } 
          }          
          
      },(error: any) => {
        loading.dismiss();                
        //reject(error)
        this.alertCtrl.create({
          title: 'Erro de Conexão',
          subTitle: 'Não foi possível estabelecer uma conexão. Tente novamente mais tarde! <br>',
          buttons: [
            { text: 'Ok' }
          ]
        }).present(); 

        console.log('Retorno: ',error); 
      });
    });  
  }

  GetLojas(){
    
    return new Promise((resolve,reject) => {

      this.http.get(this.URL+'/GetLojas/'+localStorage.getItem('IP')+'/'+this.tools_replaceAll(localStorage.getItem('BANCO'),"\\\\","="))
        .subscribe((result: any) => {
          resolve(result); 
      }, 
        (err) => {

          this.alertCtrl.create({
            title: 'Erro de Conexão',
            subTitle: 'Não foi possível carregar as lojas disponíveis. Tente novamente mais tarde! <br>',
            buttons: [
              { text: 'Ok' }
            ]
          }).present();
          console.log('ERRO GetLojas: ',err);
      });

    });

  }

  GetDadosVenda(){
    let loading = this.loadingCtrl.create({
      content: 'Consultando Dados...'
    });

    loading.present(); 

    return new Promise((resolve,reject) => {

      this.http.get(this.URL+'/GetDadosVenda/'+localStorage.getItem('IP')+'/'+
                    this.tools_replaceAll(localStorage.getItem('BANCO'),"\\\\","=")+'/'+
                    localStorage.getItem('loja_CDLOJA') +'/'+
                    localStorage.getItem('filtro_data'))
        .subscribe((result: any) => {
          resolve(result); 

          // Preenche Dados
          localStorage.setItem('TOTAL_BRUTO', result[0].DADOS.TOTAL_BRUTO);        
          localStorage.setItem('TOTAL_LIQUIDO', result[0].DADOS.TOTAL_LIQUIDO);
          localStorage.setItem('TOTALCUSTOLOJA', result[0].DADOS.TOTALCUSTOLOJA);
          localStorage.setItem('CLIENTESe', result[0].DADOS.CLIENTES);
          localStorage.setItem('CLIENTES_BALCAO', result[0].DADOS.CLIENTES_BALCAO);
          localStorage.setItem('CLIENTES_TELE', result[0].DADOS.CLIENTES_TELE);
          localStorage.setItem('TOTALDESC', result[0].DADOS.TOTALDESC);
          localStorage.setItem('DESC_VENDA', result[0].DADOS.DESC_VENDA);
          localStorage.setItem('DESC_PROMO', result[0].DADOS.DESC_PROMO);
          localStorage.setItem('DESC_PBM', result[0].DADOS.DESC_PBM);
          localStorage.setItem('DESC_CONV', result[0].DADOS.DESC_CONV);
          localStorage.setItem('MED_VENDA_CLI', result[0].DADOS.MED_VENDA_CLI);
          localStorage.setItem('MED_VENDA_BALCAO', result[0].DADOS.MED_VENDA_BALCAO);
          localStorage.setItem('MED_VENDA_TELE', result[0].DADOS.MED_VENDA_TELE);
          localStorage.setItem('TOTAL_ACRESCIMO', result[0].DADOS.TOTAL_ACRESCIMO);
          loading.dismiss();
      }, 
        (err) => {
          loading.dismiss();
          console.log('Erro GetDadosVenda: ',err);
      });
    });
  }

  GetDadosFuncionarios(){    
    let loading = this.loadingCtrl.create({
      content: 'Consultando Dados...'
    });

    loading.present();

    return new Promise((resolve,reject) => {

      this.http.get(this.URL+'/GetDadosFuncionarios/'+localStorage.getItem('IP')+'/'+
                    this.tools_replaceAll(localStorage.getItem('BANCO'),"\\\\","=")+'/'+
                    localStorage.getItem('loja_CDLOJA') + '/'+localStorage.getItem('filtro_data'))
        .subscribe((result: any) => {
          resolve(result); 

          // Preenche Dados
          localStorage.setItem('funcionarios', '[]');  
          let funcionarios: Array<Object> = [];      

          for (let index = 0; index < result.length; index++) {
            funcionarios.push(result[index].FUNCIONARIO); 
          }
          loading.dismiss();
          localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
      }, 
        (err) => {
          loading.dismiss();
          console.log('Erro GetDadosFuncionarios: ',err);
      });
    });
  }

  GetDadosFinanceiros(){
    let loading = this.loadingCtrl.create({
      content: 'Consultando Dados...'
    });

    loading.present();
    return new Promise((resolve,reject) => {

      this.http.get(this.URL+'/GetDadosFinanceiros/'+localStorage.getItem('IP')+'/'+
                    this.tools_replaceAll(localStorage.getItem('BANCO'),"\\\\","=")+'/'+
                    localStorage.getItem('loja_CDLOJA')+ '/'+localStorage.getItem('filtro_data'))
        .subscribe((result: any) => {
          resolve(result); 

          // Preenche Dados
          localStorage.setItem('TOTALVENDA', result[0].DADOS.TOTALVENDA);        
          localStorage.setItem('TOTALCUSTO', result[0].DADOS.TOTALCUSTO);
          localStorage.setItem('TOTAL_COMPRA_FORN', result[0].DADOS.TOTAL_COMPRA_FORN);
          localStorage.setItem('TOTAL_DEVOLUCAO_FORN', result[0].DADOS.TOTAL_DEVOLUCAO_FORN);
          localStorage.setItem('TOTAL_TRANS_ENVIADAS', result[0].DADOS.TOTAL_TRANS_ENVIADAS);
          localStorage.setItem('TOTAL_TRANS_RECEBIDAS', result[0].DADOS.TOTAL_TRANS_RECEBIDAS);
          localStorage.setItem('TOTAL_PRODUTO_VENC', result[0].DADOS.TOTAL_PRODUTO_VENC);
          localStorage.setItem('TOTAL_ABATIDAS_PAGAR', result[0].DADOS.TOTAL_ABATIDAS_PAGAR);
          localStorage.setItem('TOTAL_PAGAR', result[0].DADOS.TOTAL_PAGAR);
          localStorage.setItem('TOTAL_ABATIDAS_RECEBER', result[0].DADOS.TOTAL_ABATIDAS_RECEBER);
          localStorage.setItem('TOTAL_ABATIDAS_RECEBER_CAIXA', result[0].DADOS.TOTAL_ABATIDAS_RECEBER_CAIXA);
          localStorage.setItem('TOTAL_RECEBER_GERENCIAL', result[0].DADOS.TOTAL_RECEBER_GERENCIAL);
          localStorage.setItem('TOTAL_RECEBER_PERDIDAS', result[0].DADOS.TOTAL_RECEBER_PERDIDAS);
          localStorage.setItem('TOTAL_RECEBER_EXCLUIDAS', result[0].DADOS.TOTAL_RECEBER_EXCLUIDAS);
          loading.dismiss();
      }, 
        (err) => {
          loading.dismiss();
          console.log('Erro GetDadosFinanceiros: ',err);
      });
    });
  }
}
