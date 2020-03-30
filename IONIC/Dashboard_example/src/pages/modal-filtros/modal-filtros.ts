import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-modal-filtros',
  templateUrl: 'modal-filtros.html',
})
export class ModalFiltrosPage {

  public filtro: any;
  public dataInicio: any;
  public dataFim: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() { 
    this.filtro = localStorage.getItem('filtro');

    if (this.filtro == 'Personalizado'){
      this.dataInicio = localStorage.getItem('dataInicio');
      this.dataFim = localStorage.getItem('dataFim');
    }
    //
  }

  dataHoje() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [dia, mes, ano].join('.');
  }

  dataMes() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    return [dia, mes, ano].join('.');
  }

  dataSemana() {
    var data = new Date(); 
    var dia = data.getDate() - 7;
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [dia, mes, ano].join('.');
  }  

  backHome(){        
    if (this.filtro == 'Personalizado'){
      localStorage.setItem('filtro', this.dataInicio + ' a ' + this.dataFim);
      localStorage.setItem('dataInicio', this.dataInicio);
      localStorage.setItem('dataFim', this.dataFim);    
    } else {
      switch (this.filtro) {
        case 'Hoje':
          localStorage.setItem('filtro', this.filtro); 
          localStorage.setItem('filtro_data', this.dataHoje()); 
          break;
        case 'Mês': 
          localStorage.setItem('filtro', this.filtro);
          localStorage.setItem('filtro_data', this.dataMes()); 
          break;
        case 'Semana':
          localStorage.setItem('filtro', this.filtro);
          localStorage.setItem('filtro_data', this.dataSemana()); 
          break;
        case 'Personalizado':
          localStorage.setItem('filtro', this.filtro);
          localStorage.setItem('filtro_data', this.dataSemana()); 
          break;                    
        default:
          localStorage.setItem('filtro', this.filtro);
          localStorage.setItem('filtro_data', this.dataHoje()); 
      }      
    }
    // Volta para a tela de login
    this.navCtrl.setRoot(HomePage);
  }

  limparFiltros(){
    localStorage.setItem('filtro', 'Hoje'); 
    localStorage.setItem('filtro_data', this.dataHoje());     

    this.filtro = 'Hoje';
  }


}
