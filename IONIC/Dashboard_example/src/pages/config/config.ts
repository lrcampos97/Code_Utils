import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController, MenuController, Events } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import { ApiBdProvider} from '../../providers/api-bd/api-bd';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  public lojas: Array<Object> = [];


  public loja: String;
  public IP: string;
  public BANCO: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              private api: ApiBdProvider,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private menuCtrl: MenuController,
              public events: Events){
  }

  ionViewDidLoad() {
    this.loja = this.navParams.get('loja');

    this.IP = localStorage.getItem('IP');
    this.BANCO = localStorage.getItem('BANCO');
    this.menuCtrl.enable(false,'menu');
  }

  VerificarConexao(){
    // Faz a requisição. 
   // this.api.ValidaConexao(this.IP,this.BANCO).then((result: any) => {})        
  }

  SalvarDadosConfig(){
    // this.api.ValidaConexao(this.IP,this.BANCO, true).then((result: any) => {

      let loading = this.loadingCtrl.create({
        content: 'Salvando Dados...'
      });
  
      localStorage.setItem('IP', this.IP);           
      localStorage.setItem('BANCO', this.BANCO);    
      localStorage.removeItem('lojas');
  
      // this.api.GetLojas().then((resultLojas: any) =>{           
      //   for (let index = 0; index < resultLojas.length; index++) {
      //     if (index == 0) {
      //       localStorage.setItem('loja_IP', resultLojas[index].LOJA.SERVIDOR);
      //       localStorage.setItem('loja_BANCO', resultLojas[index].LOJA.BANCO);
      //     }   
          
      //     this.lojas.push(resultLojas[index].LOJA); 
      //   }
  
      //   // Armazena as lojas cadastradas
      //   localStorage.setItem('lojas', JSON.stringify(this.lojas));          
      // });
  
      loading.dismiss();

      this.alertCtrl.create({
        title: 'Confirmação',
        subTitle: 'Dados salvos com sucesso!',
        buttons: [
          { text: 'Ok',
            handler: () => {
              // Volta para a tela de login
              this.navCtrl.setRoot(LoginPage);
            }
          },
        ]        
      }).present();

    //});    
  }

}
