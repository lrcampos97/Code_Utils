import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import { ConfigPage } from '../config/config';
import { HomePage } from '../home/home';
import { ApiBdProvider} from '../../providers/api-bd/api-bd';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loja: string = localStorage.getItem('loja_DESCRICAO');

  formLogin: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              private api: ApiBdProvider,
              public menuCtrl: MenuController,
              public events: Events,
              public formbuilder: FormBuilder) {              
         
    this.formLogin = this.formbuilder.group({
      login: [null,[Validators.required]],
      password: [null, [Validators.required]]
    })

    this.menuCtrl.enable(false,'menu');    
  }
  
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Lojas Disponíveis'               
    });

    let storageLojas = JSON.parse(localStorage.getItem('lojas'));
    
    if (storageLojas != null){
      for (let index = 0; index < storageLojas.length; index++) {      
        var button = {
          text: storageLojas[index].DESCRICAO,
          handler: () => {
            localStorage.setItem('loja_IP', storageLojas[index].SERVIDOR);
            localStorage.setItem('loja_BANCO', storageLojas[index].BANCO);
            localStorage.setItem('loja_DESCRICAO', storageLojas[index].DESCRICAO);
            localStorage.setItem('loja_CDLOJA', storageLojas[index].CDLOJA);

            this.loja = storageLojas[index].DESCRICAO;
          }
        }
        actionSheet.addButton(button)
      }
      actionSheet.present();
    }
   }


  ionViewDidLoad() {
    this.loja = localStorage.getItem('loja_DESCRICAO');

  }

  OpenSettings(){
    this.navCtrl.push(ConfigPage, {loja: this.loja});
  }

  validaUsuario(){
    // this.api.validaUsuario(this.formLogin.value['login'], this.formLogin.value['password']).then((result: any) => {             
    //   if (result.length > 0) {

    //   this.events.publish('usuario',this.formLogin.value['login'], this.loja);
        this.navCtrl.setRoot(HomePage);
      // }

      // console.log(result);    
      // })
  
  }
}
