import { Component } from '@angular/core';
import { Platform, ActionSheetController, MenuController, App, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { LojasPage } from '../pages/lojas/lojas';
import { Events } from 'ionic-angular';
import { ApiBdProvider} from '../providers/api-bd/api-bd';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  loja: string = 'Loja - '+localStorage.getItem('loja_DESCRICAO');
  usuario: string; //= localStorage.getItem('usuario');

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              public actionSheetCtrl: ActionSheetController,
              public menuCtrl: MenuController,
              public app: App,
              public events: Events,
              private api: ApiBdProvider) {

    events.subscribe('usuario', (usuario,loja) => {
      this.usuario = usuario;    
      this.loja = loja;
    });

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ionViewDidLoad() {
    this.loja = 'Loja - ' + localStorage.getItem('loja_DESCRICAO');
    //this.usuario = localStorage.getItem('usuario');

    this.events.subscribe('usuario', (usuario,loja) => {
      this.usuario = usuario;   
      this.loja = loja;   
    });
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Lojas Disponíveis'               
    });

    let storageLojas = JSON.parse(localStorage.getItem('lojas'));
    
    for (let index = 0; index < storageLojas.length; index++) {      
      var button = {
        text: storageLojas[index].DESCRICAO,
        handler: () => {
          localStorage.setItem('loja_IP', storageLojas[index].SERVIDOR);
          localStorage.setItem('loja_BANCO', storageLojas[index].BANCO);
          localStorage.setItem('loja_DESCRICAO', storageLojas[index].DESCRICAO);
          localStorage.setItem('loja_CDLOJA', storageLojas[index].CDLOJA);          

          this.loja = storageLojas[index].DESCRICAO;
          
          //location.reload();  
        }
      }
      actionSheet.addButton(button)
    }

   actionSheet.present();
  }

  logout() {
    localStorage.setItem('usuario', '');
    localStorage.setItem('senha', '');
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }

  lojas(){
    //  this.navCtrl.push(LojasPage);
    var nav = this.app.getRootNav();
    nav.push(LojasPage);    
  }

}

