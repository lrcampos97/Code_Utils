import { Component } from '@angular/core';
import { MenuController, NavController, NavParams, Platform, ModalController,LoadingController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ApiBdProvider} from '../../providers/api-bd/api-bd';
import { Http } from '@angular/http';
import { ModalFiltrosPage } from '../../pages/modal-filtros/modal-filtros'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public loja: String;
  public array_lojas: any;
  public loja_atual: any;


  // Dados Venda
  public TOTAL_BRUTO: String;
  public TOTAL_LIQUIDO: String;
  public TOTALCUSTOLOJA: String;
  public TOTAL_LUCRO: String;
  public CLIENTES: String;
  public CLIENTES_BALCAO: String;
  public CLIENTES_TELE: String;
  public TOTALDESC: String;
  public DESC_VENDA: String;
  public DESC_PROMO: String;
  public DESC_PBM: String;
  public DESC_CONV: String; 
  public MED_VENDA_CLI: String;
  public MED_VENDA_BALCAO: String;
  public MED_VENDA_TELE: String;
  public TOTAL_ACRESCIMO: String;

  // Dados Funcionarios
  public funcionarios: Array<Object> = [];

  // Dados Financeiros
  public TOTALVENDA: String;
  public TOTALCUSTO: String;
  public TOTAL_DEVOLUCAO_FORN: String;
  public TOTAL_RECEBER_GERENCIAL: String;
  public TOTAL_RECEBER_PERDIDAS: String;
  public TOTAL_RECEBER_EXCLUIDAS: String;
  public TOTAL_COMPRA_FORN: String;
  public TOTAL_TRANS_ENVIADAS: String;
  public TOTAL_TRANS_RECEBIDAS: String;
  public TOTAL_PRODUTO_VENC: String;
  public TOTAL_ABATIDAS_PAGAR: String;
  public TOTAL_PAGAR: String; 
  public TOTAL_ABATIDAS_RECEBER: String;
  public TOTAL_ABATIDAS_RECEBER_CAIXA: String;

  filtroSelecionado = [{name:'Hoje',date:'current_date'}];

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController, 
              public navParams: NavParams,
              public menuCtrl: MenuController,
              private api: ApiBdProvider,
              private http: Http,
              private modalCtrl: ModalController,
              private loadingCtrl: LoadingController) {

    
  }

  SelecaoLoja(value: any) { 
    console.log(value);
  }

  AtualizarDados(){
   this.array_lojas = JSON.parse(localStorage.getItem('lojas'));
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
          
        }
      }
    }
    
    this.loja = localStorage.getItem('loja_DESCRICAO');

    //CARREGAR DADOS VENDAS
    this.api.GetDadosVenda().then((resultDados: any) =>{
      this.TOTAL_BRUTO = (parseInt(localStorage.getItem('TOTAL_BRUTO'))).toLocaleString('pt-BR');             
      this.TOTAL_LIQUIDO = (parseInt(localStorage.getItem('TOTAL_LIQUIDO'))).toLocaleString('pt-BR');
      this.TOTALCUSTOLOJA = (parseInt(localStorage.getItem('TOTALCUSTOLOJA'))).toLocaleString('pt-BR');
      this.CLIENTES = (parseInt(localStorage.getItem('CLIENTES'))).toLocaleString('pt-BR');
      this.CLIENTES_BALCAO = (parseInt(localStorage.getItem('CLIENTES_BALCAO'))).toLocaleString('pt-BR');
      this.CLIENTES_TELE = (parseInt(localStorage.getItem('CLIENTES_TELE')).toLocaleString('pt-BR'));
      this.TOTALDESC =(parseInt( localStorage.getItem('TOTALDESC'))).toLocaleString('pt-BR');
      this.DESC_VENDA = (parseInt(localStorage.getItem('DESC_VENDA'))).toLocaleString('pt-BR'); 
      this.DESC_PROMO = (parseInt(localStorage.getItem('DESC_PROMO'))).toLocaleString('pt-BR');
      this.DESC_PBM = (parseInt(localStorage.getItem('DESC_PBM'))).toLocaleString('pt-BR');
      this.DESC_CONV = (parseInt(localStorage.getItem('DESC_CONV'))).toLocaleString('pt-BR');
      this.MED_VENDA_CLI = (parseInt(localStorage.getItem('MED_VENDA_CLI'))).toLocaleString('pt-BR');
      this.MED_VENDA_BALCAO = (parseInt(localStorage.getItem('MED_VENDA_BALCAO'))).toLocaleString('pt-BR');
      this.MED_VENDA_TELE = (parseInt(localStorage.getItem('MED_VENDA_TELE'))).toLocaleString('pt-BR');
      this.TOTAL_ACRESCIMO = (parseInt(localStorage.getItem('TOTAL_ACRESCIMO'))).toLocaleString('pt-BR');      
      console.log('Dados venda: '+resultDados);      
    }); 


    // DADOS FUNCIONARIOS
    this.api.GetDadosFuncionarios().then((resultFuncionarios: any) =>{     
      
      this.funcionarios = JSON.parse(localStorage.getItem('funcionarios'));

      console.log(this.funcionarios);
    }); 

    // DADOS FINANCEIROS
    this.api.GetDadosFinanceiros().then((resultDados: any) =>{
      this.TOTALVENDA = (parseInt(localStorage.getItem('TOTALVENDA'))).toLocaleString('pt-BR');             
      this.TOTALCUSTO = (parseInt(localStorage.getItem('TOTALCUSTO'))).toLocaleString('pt-BR');
      this.TOTAL_DEVOLUCAO_FORN = (parseInt(localStorage.getItem('TOTAL_DEVOLUCAO_FORN'))).toLocaleString('pt-BR');
      this.TOTAL_RECEBER_GERENCIAL = (parseInt(localStorage.getItem('TOTAL_ABATIDAS_RECEBER_GERENCIAL'))).toLocaleString('pt-BR');
      this.TOTAL_RECEBER_PERDIDAS = (parseInt(localStorage.getItem('TOTAL_RECEBER_PERDIDAS'))).toLocaleString('pt-BR');
      this.TOTAL_RECEBER_EXCLUIDAS = (parseInt(localStorage.getItem('TOTAL_RECEBER_EXCLUIDAS')).toLocaleString('pt-BR'));
      this.TOTAL_COMPRA_FORN =(parseInt( localStorage.getItem('TOTAL_COMPRA_FORN'))).toLocaleString('pt-BR');
      this.TOTAL_TRANS_ENVIADAS = (parseInt(localStorage.getItem('TOTAL_TRANS_ENVIADAS'))).toLocaleString('pt-BR'); 
      this.TOTAL_TRANS_RECEBIDAS = (parseInt(localStorage.getItem('TOTAL_TRANS_RECEBIDAS'))).toLocaleString('pt-BR');
      this.TOTAL_PRODUTO_VENC = (parseInt(localStorage.getItem('TOTAL_PRODUTO_VENC'))).toLocaleString('pt-BR');
      this.TOTAL_ABATIDAS_PAGAR = (parseInt(localStorage.getItem('TOTAL_ABATIDAS_PAGAR'))).toLocaleString('pt-BR');
      this.TOTAL_PAGAR = (parseInt(localStorage.getItem('TOTAL_PAGAR'))).toLocaleString('pt-BR');
      this.TOTAL_ABATIDAS_RECEBER = (parseInt(localStorage.getItem('TOTAL_ABATIDAS_RECEBER'))).toLocaleString('pt-BR');
      this.TOTAL_ABATIDAS_RECEBER_CAIXA = (parseInt(localStorage.getItem('TOTAL_ABATIDAS_RECEBER_CAIXA'))).toLocaleString('pt-BR');      
      console.log('Dados Financeiros: '+resultDados);      
    });    

    this.filtroSelecionado[0].name = localStorage.getItem('filtro');       
    
  }

  dataHoje() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    return [dia, mes, ano].join('.');
  }

  ionViewDidLoad() {
    if (localStorage.getItem('filtro_data') == '' ) {
      localStorage.setItem('filtro', 'Hoje'); 
      localStorage.setItem('filtro_data',this.dataHoje()); 
    }
    
    //this.AtualizarDados()

    this.menuCtrl.enable(true,'menu');
  }

  openModal(){          
      this.navCtrl.push(ModalFiltrosPage);      
  }
  addCurrencie(filtro){
    if(this.filtroSelecionado.indexOf(filtro) === -1){
      this.filtroSelecionado.push(filtro);
    }
  }

}
