webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_bd_api_bd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams, actionSheetCtrl, api, loadingCtrl, alertCtrl, menuCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.lojas = [];
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        this.loja = this.navParams.get('loja');
        this.IP = localStorage.getItem('IP');
        this.BANCO = localStorage.getItem('BANCO');
        this.menuCtrl.enable(false, 'menu');
    };
    ConfigPage.prototype.VerificarConexao = function () {
        // Faz a requisição. 
        // this.api.ValidaConexao(this.IP,this.BANCO).then((result: any) => {})        
    };
    ConfigPage.prototype.SalvarDadosConfig = function () {
        // this.api.ValidaConexao(this.IP,this.BANCO, true).then((result: any) => {
        var _this = this;
        var loading = this.loadingCtrl.create({
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
                    handler: function () {
                        // Volta para a tela de login
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    }
                },
            ]
        }).present();
        //});    
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\config\config.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Configurações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding no-scroll>\n  <!-- Logo -->\n  <div padding-horizontal text-center class="animated fadeInDown">\n    <div class="logo"></div>  \n  </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating color="primary">\n          <ion-icon name="wifi" item-start class="text-primary"></ion-icon> \n          IP\n        </ion-label>\n        <ion-input [(ngModel)]="IP" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n        \n      <ion-item>\n          <ion-label floating color="primary">\n            <ion-icon name="cube" item-start class="text-primary"></ion-icon> \n            Banco\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="BANCO" [ngModelOptions]="{standalone: true}"></ion-input>   \n      </ion-item>            \n    </form>\n\n    <div style="float:right; margin-top: 30px">\n      <button ion-button color="primary" tappable style="height: 4.6rem; margin:0 10px" (click)="SalvarDadosConfig()">        \n        Gravar\n      </button>\n\n      <button ion-button color="primary" tappable style="height: 4.6rem;" (click)="VerificarConexao()">        \n        Testar\n      </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_bd_api_bd__["a" /* ApiBdProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFiltrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalFiltrosPage = /** @class */ (function () {
    function ModalFiltrosPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalFiltrosPage.prototype.ionViewDidLoad = function () {
        this.filtro = localStorage.getItem('filtro');
        if (this.filtro == 'Personalizado') {
            this.dataInicio = localStorage.getItem('dataInicio');
            this.dataFim = localStorage.getItem('dataFim');
        }
        //
    };
    ModalFiltrosPage.prototype.dataHoje = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        return [dia, mes, ano].join('.');
    };
    ModalFiltrosPage.prototype.dataMes = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        return [dia, mes, ano].join('.');
    };
    ModalFiltrosPage.prototype.dataSemana = function () {
        var data = new Date();
        var dia = data.getDate() - 7;
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        return [dia, mes, ano].join('.');
    };
    ModalFiltrosPage.prototype.backHome = function () {
        if (this.filtro == 'Personalizado') {
            localStorage.setItem('filtro', this.dataInicio + ' a ' + this.dataFim);
            localStorage.setItem('dataInicio', this.dataInicio);
            localStorage.setItem('dataFim', this.dataFim);
        }
        else {
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ModalFiltrosPage.prototype.limparFiltros = function () {
        localStorage.setItem('filtro', 'Hoje');
        localStorage.setItem('filtro_data', this.dataHoje());
        this.filtro = 'Hoje';
    };
    ModalFiltrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-filtros',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\modal-filtros\modal-filtros.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> Filtros de Pesquisa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>      \n    <ion-list>\n        <ion-row radio-group  [(ngModel)]="filtro">\n          <ion-col>\n               <ion-item>\n                  <ion-label>Hoje</ion-label>\n                  <ion-radio mode="md" item-left value="Hoje"></ion-radio>\n             </ion-item>\n           </ion-col>\n        </ion-row>\n        <ion-row radio-group  [(ngModel)]="filtro">\n          <ion-col>\n            <ion-item>\n                <ion-label>Semana</ion-label>\n                <ion-radio mode="md" item-left value="Semana"></ion-radio>\n           </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row radio-group  [(ngModel)]="filtro">\n          <ion-col>\n            <ion-item>\n                <ion-label>Mês</ion-label>\n                <ion-radio mode="md" item-left value="Mês"></ion-radio>\n           </ion-item>\n          </ion-col>\n        </ion-row> \n        <ion-row radio-group  [(ngModel)]="filtro" >\n          <ion-col>\n            <ion-item>\n                <ion-label>Personalizado</ion-label>\n                <ion-radio mode="md" item-left value="Personalizado"></ion-radio>\n           </ion-item>\n\n           <ion-item *ngIf=" filtro == \'Personalizado\'">\n              <ion-label>Data Início</ion-label>\n              <ion-datetime displayFormat="DD/MM/YYYY" max="2040-10-31" [(ngModel)]="dataInicio" [ngModelOptions]="{standalone: true}"></ion-datetime>    \n          </ion-item>\n          <ion-item *ngIf=" filtro == \'Personalizado\'">\n              <ion-label>Data Fim</ion-label>\n              <ion-datetime displayFormat="DD/MM/YYYY" max="2040-10-31" [(ngModel)]="dataFim" [ngModelOptions]="{standalone: true}"></ion-datetime>    \n          </ion-item>\n          </ion-col>\n        </ion-row>        \n      </ion-list>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-grid class="grid-footer"> \n          <ion-row>\n            <ion-col col-6>\n                <button ion-button full color="white" class="button-clear" (click)="limparFiltros()">\n                    <ion-label color="primary">Limpar Filtro</ion-label>\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button full color="primary" class="button-filter" (click)="backHome()">Filtrar</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>      \n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\modal-filtros\modal-filtros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], ModalFiltrosPage);
    return ModalFiltrosPage;
}());

//# sourceMappingURL=modal-filtros.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LojasPage = /** @class */ (function () {
    function LojasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LojasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LojasPage');
    };
    LojasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lojas',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\lojas\lojas.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> Lojas Disponíveis</ion-title>    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>      \n  <ion-list>\n    <ion-row radio-group>\n      <ion-col>\n           <ion-item>\n              <ion-label>Hoje</ion-label>\n              <ion-radio mode="md" item-left value="Hoje"></ion-radio>\n         </ion-item>\n       </ion-col>\n    </ion-row>\n    <ion-row radio-group >\n      <ion-col>\n        <ion-item>\n            <ion-label>Semana</ion-label>\n            <ion-radio mode="md" item-left value="Semana"></ion-radio>\n       </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row radio-group >\n      <ion-col>\n        <ion-item>\n            <ion-label>Mês</ion-label>\n            <ion-radio mode="md" item-left value="Mês"></ion-radio>\n       </ion-item>\n      </ion-col>\n    </ion-row> \n    <ion-row radio-group  >\n      <ion-col>\n        <ion-item>\n            <ion-label>Personalizado</ion-label>\n            <ion-radio mode="md" item-left value="Personalizado"></ion-radio>\n       </ion-item>\n      </ion-col>\n    </ion-row>        \n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\lojas\lojas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], LojasPage);
    return LojasPage;
}());

//# sourceMappingURL=lojas.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/config/config.module": [
		282,
		3
	],
	"../pages/login/login.module": [
		283,
		2
	],
	"../pages/lojas/lojas.module": [
		284,
		1
	],
	"../pages/modal-filtros/modal-filtros.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_config_config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lojas_lojas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_bd_api_bd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_accordion_list_accordion_list__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal_filtros_modal_filtros__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lojas_lojas__["a" /* LojasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_filtros_modal_filtros__["a" /* ModalFiltrosPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_accordion_list_accordion_list__["a" /* AccordionListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lojas/lojas.module#LojasPageModule', name: 'LojasPage', segment: 'lojas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-filtros/modal-filtros.module#ModalFiltrosPageModule', name: 'ModalFiltrosPage', segment: 'modal-filtros', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lojas_lojas__["a" /* LojasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_config_config__["a" /* ConfigPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_filtros_modal_filtros__["a" /* ModalFiltrosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_api_bd_api_bd__["a" /* ApiBdProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lojas_lojas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_bd_api_bd__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, actionSheetCtrl, menuCtrl, app, events, api) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.menuCtrl = menuCtrl;
        this.app = app;
        this.events = events;
        this.api = api;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.loja = 'Loja - ' + localStorage.getItem('loja_DESCRICAO');
        events.subscribe('usuario', function (usuario, loja) {
            _this.usuario = usuario;
            _this.loja = loja;
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loja = 'Loja - ' + localStorage.getItem('loja_DESCRICAO');
        //this.usuario = localStorage.getItem('usuario');
        this.events.subscribe('usuario', function (usuario, loja) {
            _this.usuario = usuario;
            _this.loja = loja;
        });
    };
    MyApp.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Lojas Disponíveis'
        });
        var storageLojas = JSON.parse(localStorage.getItem('lojas'));
        var _loop_1 = function (index) {
            button = {
                text: storageLojas[index].DESCRICAO,
                handler: function () {
                    localStorage.setItem('loja_IP', storageLojas[index].SERVIDOR);
                    localStorage.setItem('loja_BANCO', storageLojas[index].BANCO);
                    localStorage.setItem('loja_DESCRICAO', storageLojas[index].DESCRICAO);
                    localStorage.setItem('loja_CDLOJA', storageLojas[index].CDLOJA);
                    _this.loja = storageLojas[index].DESCRICAO;
                    //location.reload();  
                }
            };
            actionSheet.addButton(button);
        };
        var button;
        for (var index = 0; index < storageLojas.length; index++) {
            _loop_1(index);
        }
        actionSheet.present();
    };
    MyApp.prototype.logout = function () {
        localStorage.setItem('usuario', '');
        localStorage.setItem('senha', '');
        this.menuCtrl.close();
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.lojas = function () {
        //  this.navCtrl.push(LojasPage);
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_lojas_lojas__["a" /* LojasPage */]);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\app\app.html"*/'<ion-menu side="left" id="menu" [content]="content">    \n    <div class="menu-header">\n        <div text-center>\n          <img class="logo" [src]="chosenPicture || placeholder" onerror="this.src=\'assets/imgs/logo2.png\'"/>\n        </div>  \n    \n        <p class="name">Teste</p>\n        <p class="loja">Loja Teste</p>      \n     </div>\n    \n      <ion-list>\n        <button menuClose="left" ion-item detail-none (click)="lojas()">\n          <ion-icon name="settings" item-left></ion-icon>\n          Alterar Loja\n        </button>\n    \n        <button menuClose="left" ion-item detail-none  (click)="logout()">\n          <ion-icon name="power" item-left></ion-icon>\n          Sair\n        </button>\n      </ion-list>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_bd_api_bd__["a" /* ApiBdProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AccordionListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AccordionListComponent = /** @class */ (function () {
    function AccordionListComponent(renderer) {
        this.renderer = renderer;
        this.headerColor = '#F53D3D';
        this.textColor = '#FFF';
        this.contentColor = '#F9F9F9';
        this.hasMargin = true;
    }
    AccordionListComponent.prototype.ngAfterViewInit = function () {
        this.viewHeight = this.elementView.nativeElement.offsetHeight;
        if (!this.expanded) {
            this.renderer.setElementStyle(this.elementView.nativeElement, 'height', 0 + 'px');
        }
    };
    AccordionListComponent.prototype.toggleAccordion = function () {
        this.expanded = !this.expanded;
        var newHeight = this.expanded ? '100%' : '0px';
        this.renderer.setElementStyle(this.elementView.nativeElement, 'height', newHeight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "headerColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "textColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "contentColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AccordionListComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AccordionListComponent.prototype, "hasMargin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AccordionListComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('accordionContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AccordionListComponent.prototype, "elementView", void 0);
    AccordionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'accordion-list',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\components\accordion-list\accordion-list.html"*/'<ion-list class="accordion-list">\n  <ion-list-header no-lines no-padding>\n    <button ion-item detail-none\n            [style.background]="headerColor"\n            (click)="toggleAccordion()"\n            class="accordion-header"\n            [class.active]="expanded">\n        <ion-icon\n          item-left\n          name="ios-arrow-forward">\n        </ion-icon>\n        {{ title }}\n    </button>\n    <section #accordionContent             \n             [class.active]="expanded"\n             class="accordion-content">\n      <ng-content></ng-content>\n    </section>\n  </ion-list-header>\n</ion-list>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\components\accordion-list\accordion-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionListComponent);
    return AccordionListComponent;
}());

//# sourceMappingURL=accordion-list.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiBdProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiBdProvider = /** @class */ (function () {
    function ApiBdProvider(http, alertCtrl, loadingCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.URL = 'URL';
    }
    ApiBdProvider.prototype.validaUsuario = function (_LOGIN, _SENHA) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Validando Usuário...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.URL + '/usuario/' + localStorage.getItem('IP') + '/' + _this.tools_replaceAll(localStorage.getItem('BANCO'), "\\\\", "=") + '/' + _LOGIN + '/' + _SENHA)
                .subscribe(function (result) {
                resolve(result);
                if (result.length == 0) {
                    loading.dismiss();
                    _this.alertCtrl.create({
                        title: 'Status Login',
                        subTitle: 'Usuário ou Senha incorreto!',
                        buttons: [
                            { text: 'Ok' }
                        ]
                    }).present();
                }
                else {
                    loading.dismiss();
                    localStorage.setItem('usuario', result[0].USUARIO.LOGIN);
                    localStorage.setItem('senha', result[0].USUARIO.SENHA);
                }
            }, function (err) {
                loading.dismiss();
                //reject(error)
                _this.alertCtrl.create({
                    title: 'Erro de Conexão',
                    subTitle: 'Não foi possível estabelecer uma conexão com o servidor. Tente novamente mais tarde! <br>',
                    buttons: [
                        { text: 'Ok' }
                    ]
                }).present();
                console.log('ERRO LOGIN: ', err);
            });
        });
    };
    ApiBdProvider.prototype.tools_replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    };
    ApiBdProvider.prototype.ValidaConexao = function (_IP, _BANCO, _SIlencioso) {
        var _this = this;
        if (_SIlencioso === void 0) { _SIlencioso = false; }
        var loading = this.loadingCtrl.create({
            content: 'Verificando Conexão...'
        });
        loading.present();
        var banco = this.tools_replaceAll(_BANCO, "\\\\", "=");
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.URL + '/ValidaConexao/' + _IP + '/' + banco)
                .subscribe(function (result) {
                resolve(result);
                loading.dismiss();
                if (result.length > 0) {
                    if (_SIlencioso == false) {
                        _this.alertCtrl.create({
                            title: 'Status Conexão',
                            subTitle: 'Conexão realizada com sucesso!',
                            buttons: [
                                { text: 'Ok' }
                            ]
                        }).present();
                    }
                }
            }, function (error) {
                loading.dismiss();
                //reject(error)
                _this.alertCtrl.create({
                    title: 'Erro de Conexão',
                    subTitle: 'Não foi possível estabelecer uma conexão. Tente novamente mais tarde! <br>',
                    buttons: [
                        { text: 'Ok' }
                    ]
                }).present();
                console.log('Retorno: ', error);
            });
        });
    };
    ApiBdProvider.prototype.GetLojas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.URL + '/GetLojas/' + localStorage.getItem('IP') + '/' + _this.tools_replaceAll(localStorage.getItem('BANCO'), "\\\\", "="))
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                _this.alertCtrl.create({
                    title: 'Erro de Conexão',
                    subTitle: 'Não foi possível carregar as lojas disponíveis. Tente novamente mais tarde! <br>',
                    buttons: [
                        { text: 'Ok' }
                    ]
                }).present();
                console.log('ERRO GetLojas: ', err);
            });
        });
    };
    ApiBdProvider.prototype.GetDadosVenda = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando Dados...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.URL + '/GetDadosVenda/' + localStorage.getItem('IP') + '/' +
                _this.tools_replaceAll(localStorage.getItem('BANCO'), "\\\\", "=") + '/' +
                localStorage.getItem('loja_CDLOJA') + '/' +
                localStorage.getItem('filtro_data'))
                .subscribe(function (result) {
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
            }, function (err) {
                loading.dismiss();
                console.log('Erro GetDadosVenda: ', err);
            });
        });
    };
    ApiBdProvider.prototype.GetDadosFuncionarios = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando Dados...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.URL + '/GetDadosFuncionarios/' + localStorage.getItem('IP') + '/' +
                _this.tools_replaceAll(localStorage.getItem('BANCO'), "\\\\", "=") + '/' +
                localStorage.getItem('loja_CDLOJA') + '/' + localStorage.getItem('filtro_data'))
                .subscribe(function (result) {
                resolve(result);
                // Preenche Dados
                localStorage.setItem('funcionarios', '[]');
                var funcionarios = [];
                for (var index = 0; index < result.length; index++) {
                    funcionarios.push(result[index].FUNCIONARIO);
                }
                loading.dismiss();
                localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
            }, function (err) {
                loading.dismiss();
                console.log('Erro GetDadosFuncionarios: ', err);
            });
        });
    };
    ApiBdProvider.prototype.GetDadosFinanceiros = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando Dados...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.URL + '/GetDadosFinanceiros/' + localStorage.getItem('IP') + '/' +
                _this.tools_replaceAll(localStorage.getItem('BANCO'), "\\\\", "=") + '/' +
                localStorage.getItem('loja_CDLOJA') + '/' + localStorage.getItem('filtro_data'))
                .subscribe(function (result) {
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
            }, function (err) {
                loading.dismiss();
                console.log('Erro GetDadosFinanceiros: ', err);
            });
        });
    };
    ApiBdProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
    ], ApiBdProvider);
    return ApiBdProvider;
}());

//# sourceMappingURL=api-bd.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_bd_api_bd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, actionSheetCtrl, api, menuCtrl, events, formbuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.api = api;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.formbuilder = formbuilder;
        this.loja = localStorage.getItem('loja_DESCRICAO');
        this.formLogin = this.formbuilder.group({
            login: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]]
        });
        this.menuCtrl.enable(false, 'menu');
    }
    LoginPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Lojas Disponíveis'
        });
        var storageLojas = JSON.parse(localStorage.getItem('lojas'));
        if (storageLojas != null) {
            var _loop_1 = function (index) {
                button = {
                    text: storageLojas[index].DESCRICAO,
                    handler: function () {
                        localStorage.setItem('loja_IP', storageLojas[index].SERVIDOR);
                        localStorage.setItem('loja_BANCO', storageLojas[index].BANCO);
                        localStorage.setItem('loja_DESCRICAO', storageLojas[index].DESCRICAO);
                        localStorage.setItem('loja_CDLOJA', storageLojas[index].CDLOJA);
                        _this.loja = storageLojas[index].DESCRICAO;
                    }
                };
                actionSheet.addButton(button);
            };
            var button;
            for (var index = 0; index < storageLojas.length; index++) {
                _loop_1(index);
            }
            actionSheet.present();
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.loja = localStorage.getItem('loja_DESCRICAO');
    };
    LoginPage.prototype.OpenSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* ConfigPage */], { loja: this.loja });
    };
    LoginPage.prototype.validaUsuario = function () {
        // this.api.validaUsuario(this.formLogin.value['login'], this.formLogin.value['password']).then((result: any) => {             
        //   if (result.length > 0) {
        //   this.events.publish('usuario',this.formLogin.value['login'], this.loja);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        // }
        // console.log(result);    
        // })
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\login\login.html"*/'<ion-content padding no-scroll>\n    \n  <ion-fab top right>\n    <button ion-fab mini (click)="OpenSettings()"><ion-icon name="settings"></ion-icon></button>\n  </ion-fab>  \n\n  <!-- Logo -->\n  <div padding-horizontal text-center class="animated fadeInDown">\n    <div class="logo"></div>  \n  </div>\n\n\n    <ion-item> \n      <ion-label floating color="primary" class="loja-label">\n          <ion-icon name="basket" item-start class="text-primary"></ion-icon>\n        Loja\n      </ion-label>\n      <ion-input class="loja-input" \n                  type="text" [(ngModel)]="loja" \n                  [ngModelOptions]="{standalone: true}" \n                  disabled="True">\n      </ion-input>\n      <button ion-button large clear class="loja-button" (click)="presentActionSheet()" item-end>\n          <ion-icon name="search"></ion-icon>\n      </button>                \n    </ion-item>\n    <!-- Login form -->\n    <form novalidate class="list-form" [formGroup]="formLogin" (ngSubmit)="validaUsuario()">    \n      <ion-item>\n        <ion-label floating color="primary">\n          <ion-icon name="contact" item-start class="text-primary"></ion-icon>\n          Usuário\n        </ion-label>\n        <ion-input type="text" formControlName="login" ></ion-input>\n      </ion-item>    \n        \n      <ion-item>\n          <ion-label floating color="primary">\n            <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n            Senha\n          </ion-label>\n          <ion-input type="password" formControlName="password" required clearInput ></ion-input>   \n      </ion-item>           \n\n      <div class="button-entrar">\n          <button type="submit" [disabled]="formLogin.invalid" ion-button icon-start block color="primary" tappable style="height: 4.6rem;">\n            <ion-icon name="log-in"></ion-icon>\n              Entrar\n          </button>\n      </div>\n      \n    </form>\n\n      <!-- <p text-right ion-text color="primary" tappable ><strong></strong></p>  -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_bd_api_bd__["a" /* ApiBdProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_bd_api_bd__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_filtros_modal_filtros__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, actionSheetCtrl, navParams, menuCtrl, api, http, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.api = api;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        // Dados Funcionarios
        this.funcionarios = [];
        this.filtroSelecionado = [{ name: 'Hoje', date: 'current_date' }];
    }
    HomePage.prototype.SelecaoLoja = function (value) {
        console.log(value);
    };
    HomePage.prototype.AtualizarDados = function () {
        var _this = this;
        this.array_lojas = JSON.parse(localStorage.getItem('lojas'));
        var storageLojas = JSON.parse(localStorage.getItem('lojas'));
        var _loop_1 = function (index) {
            button = {
                text: storageLojas[index].DESCRICAO,
                handler: function () {
                    localStorage.setItem('loja_IP', storageLojas[index].SERVIDOR);
                    localStorage.setItem('loja_BANCO', storageLojas[index].BANCO);
                    localStorage.setItem('loja_DESCRICAO', storageLojas[index].DESCRICAO);
                    localStorage.setItem('loja_CDLOJA', storageLojas[index].CDLOJA);
                    _this.loja = storageLojas[index].DESCRICAO;
                }
            };
        };
        var button;
        for (var index = 0; index < storageLojas.length; index++) {
            _loop_1(index);
        }
        this.loja = localStorage.getItem('loja_DESCRICAO');
        //CARREGAR DADOS VENDAS
        this.api.GetDadosVenda().then(function (resultDados) {
            _this.TOTAL_BRUTO = (parseInt(localStorage.getItem('TOTAL_BRUTO'))).toLocaleString('pt-BR');
            _this.TOTAL_LIQUIDO = (parseInt(localStorage.getItem('TOTAL_LIQUIDO'))).toLocaleString('pt-BR');
            _this.TOTALCUSTOLOJA = (parseInt(localStorage.getItem('TOTALCUSTOLOJA'))).toLocaleString('pt-BR');
            _this.CLIENTES = (parseInt(localStorage.getItem('CLIENTES'))).toLocaleString('pt-BR');
            _this.CLIENTES_BALCAO = (parseInt(localStorage.getItem('CLIENTES_BALCAO'))).toLocaleString('pt-BR');
            _this.CLIENTES_TELE = (parseInt(localStorage.getItem('CLIENTES_TELE')).toLocaleString('pt-BR'));
            _this.TOTALDESC = (parseInt(localStorage.getItem('TOTALDESC'))).toLocaleString('pt-BR');
            _this.DESC_VENDA = (parseInt(localStorage.getItem('DESC_VENDA'))).toLocaleString('pt-BR');
            _this.DESC_PROMO = (parseInt(localStorage.getItem('DESC_PROMO'))).toLocaleString('pt-BR');
            _this.DESC_PBM = (parseInt(localStorage.getItem('DESC_PBM'))).toLocaleString('pt-BR');
            _this.DESC_CONV = (parseInt(localStorage.getItem('DESC_CONV'))).toLocaleString('pt-BR');
            _this.MED_VENDA_CLI = (parseInt(localStorage.getItem('MED_VENDA_CLI'))).toLocaleString('pt-BR');
            _this.MED_VENDA_BALCAO = (parseInt(localStorage.getItem('MED_VENDA_BALCAO'))).toLocaleString('pt-BR');
            _this.MED_VENDA_TELE = (parseInt(localStorage.getItem('MED_VENDA_TELE'))).toLocaleString('pt-BR');
            _this.TOTAL_ACRESCIMO = (parseInt(localStorage.getItem('TOTAL_ACRESCIMO'))).toLocaleString('pt-BR');
            console.log('Dados venda: ' + resultDados);
        });
        // DADOS FUNCIONARIOS
        this.api.GetDadosFuncionarios().then(function (resultFuncionarios) {
            _this.funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
            console.log(_this.funcionarios);
        });
        // DADOS FINANCEIROS
        this.api.GetDadosFinanceiros().then(function (resultDados) {
            _this.TOTALVENDA = (parseInt(localStorage.getItem('TOTALVENDA'))).toLocaleString('pt-BR');
            _this.TOTALCUSTO = (parseInt(localStorage.getItem('TOTALCUSTO'))).toLocaleString('pt-BR');
            _this.TOTAL_DEVOLUCAO_FORN = (parseInt(localStorage.getItem('TOTAL_DEVOLUCAO_FORN'))).toLocaleString('pt-BR');
            _this.TOTAL_RECEBER_GERENCIAL = (parseInt(localStorage.getItem('TOTAL_ABATIDAS_RECEBER_GERENCIAL'))).toLocaleString('pt-BR');
            _this.TOTAL_RECEBER_PERDIDAS = (parseInt(localStorage.getItem('TOTAL_RECEBER_PERDIDAS'))).toLocaleString('pt-BR');
            _this.TOTAL_RECEBER_EXCLUIDAS = (parseInt(localStorage.getItem('TOTAL_RECEBER_EXCLUIDAS')).toLocaleString('pt-BR'));
            _this.TOTAL_COMPRA_FORN = (parseInt(localStorage.getItem('TOTAL_COMPRA_FORN'))).toLocaleString('pt-BR');
            _this.TOTAL_TRANS_ENVIADAS = (parseInt(localStorage.getItem('TOTAL_TRANS_ENVIADAS'))).toLocaleString('pt-BR');
            _this.TOTAL_TRANS_RECEBIDAS = (parseInt(localStorage.getItem('TOTAL_TRANS_RECEBIDAS'))).toLocaleString('pt-BR');
            _this.TOTAL_PRODUTO_VENC = (parseInt(localStorage.getItem('TOTAL_PRODUTO_VENC'))).toLocaleString('pt-BR');
            _this.TOTAL_ABATIDAS_PAGAR = (parseInt(localStorage.getItem('TOTAL_ABATIDAS_PAGAR'))).toLocaleString('pt-BR');
            _this.TOTAL_PAGAR = (parseInt(localStorage.getItem('TOTAL_PAGAR'))).toLocaleString('pt-BR');
            _this.TOTAL_ABATIDAS_RECEBER = (parseInt(localStorage.getItem('TOTAL_ABATIDAS_RECEBER'))).toLocaleString('pt-BR');
            _this.TOTAL_ABATIDAS_RECEBER_CAIXA = (parseInt(localStorage.getItem('TOTAL_ABATIDAS_RECEBER_CAIXA'))).toLocaleString('pt-BR');
            console.log('Dados Financeiros: ' + resultDados);
        });
        this.filtroSelecionado[0].name = localStorage.getItem('filtro');
    };
    HomePage.prototype.dataHoje = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        return [dia, mes, ano].join('.');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('filtro_data') == '') {
            localStorage.setItem('filtro', 'Hoje');
            localStorage.setItem('filtro_data', this.dataHoje());
        }
        //this.AtualizarDados()
        this.menuCtrl.enable(true, 'menu');
    };
    HomePage.prototype.openModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_modal_filtros_modal_filtros__["a" /* ModalFiltrosPage */]);
    };
    HomePage.prototype.addCurrencie = function (filtro) {
        if (this.filtroSelecionado.indexOf(filtro) === -1) {
            this.filtroSelecionado.push(filtro);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Dashboard</ion-title>\n\n    <button ion-button icon-only menuToggle="left">\n      <ion-icon name="menu"></ion-icon>    \n    </button>\n  </ion-navbar>    \n</ion-header>\n\n<ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n              <ion-chip  *ngFor="let filtro of filtroSelecionado">\n                <ion-label color="black" style="margin-right: 3px;">{{ filtro.name }}</ion-label>\n                <button ion-button clear (click)="openModal()">\n                  <ion-icon name="create"></ion-icon>\n                </button>\n              </ion-chip>        \n        </ion-col>\n        <ion-col style="padding-top: 0px;text-align: right;">            \n          <button ion-button (click)="openModal()">\n              <ion-icon name="options" style="padding-right: 5px;"></ion-icon>\n              Filtros\n          </button>            \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n          <ion-label>Lojas Disponíveis</ion-label>\n          <ion-select [(ngModel)]="loja_atual" interface="action-sheet" (ionChange)="SelecaoLoja($event);">      \n            <ion-option *ngFor="let loja of array_lojas" value="{{loja.CDLOJA}}">{{ loja.DESCRICAO }}</ion-option>\n          </ion-select>\n        </ion-item>                  \n      </ion-row>\n    </ion-grid>\n\n  <ion-card class="cards">  \n    <ion-card-content class="cards-content">\n     <p>Venda Bruta: R$ 2.000,00</p>\n     <p>Venda Líquida: R$ 2.000,00</p>\n     <p>Custo: R$ 2.000,00</p>\n     <p>Lucro:R$ 0.0</p> \n     \n     <!-- Accordion List -->\n     <p>Nr. Total Clientes: 10</p>\n     <dd>  > Balcão: 0.0</dd>\n     <dd>  > Tele: 0.0</dd>\n     <p>Desconto Total:  R$ 0.0</p>\n     <dd>  > Desconto Venda     : R$ 0.0</dd>\n     <dd>  > Desconto Promoções : R$ 0.0</dd>\n     <dd>  > Desconto PBM       : R$ 0.0</dd>\n     <dd>  > Desconto Convênios : R$ 0.0</dd>\n     <p>Média Venda Cliente:  R$ 0.0</p>\n     <dd>  > Balcão: R$ 0.0</dd>\n     <dd>  > Tele  : R$ 0.0</dd>     \n     <p>Acréscimos: R$ 0.0</p>\n    </ion-card-content>  \n  </ion-card>\n\n  <ion-card class="cards">  \n      \n    <ion-card-content class="cards-content">        \n      <p>Funcionários:</p>\n    <accordion-list *ngFor="let func of funcionarios; let index = index"\n        [title]="func.NOME"\n        textColor="#ffffff"\n        hasMargin="false"\n        headerColor="#488aff"\n        [expanded]="index === 0">\n\n    <p text-wrap>\n      <dd> > Nº Vendas: 2 </dd>\n      <dd> > Total Vendas: R$ 0.0 </dd>\n      <dd> > Total Desc. Vendas: R$ 0.0 </dd>\n    </p>\n    </accordion-list>\n    \n    </ion-card-content> \n  </ion-card>\n\n  <ion-card class="cards">  \n    <ion-card-content class="cards-content">\n        <p>Capital(Venda) Total : R$ 0.0</p>\n        <p>Capital(Custo) Total : R$ 0.0</p>\n        <p>Compras Fornecedor   : R$ 0.0</p>\n        <p>Devolução Fornecedor : R$ 0.0</p>\n        <p>Transferências Enviadas: R$ 0.0</p>\n        <p>Transferências Recebidas: R$ 0.0</p>\n    </ion-card-content> \n  </ion-card>\n\n  <ion-card class="cards">  \n    <ion-card-content class="cards-content">\n        <p>Produtos Vencidos baixados: Un.: R$ 0.0</p>\n        <p>Produtos a Vencer 180 Dias: Un.: R$ 1.500,00</p>\n       </ion-card-content> \n  </ion-card>\n\n  <ion-card class="cards">  \n    <ion-card-content class="cards-content">\n        <p>Ctas a Pagar Abatidas: R$ 0.0</p>\n        <p>Ctas a Pagar Total   : R$ 0.0</p>\n       </ion-card-content> \n  </ion-card>\n\n  <ion-card class="cards">  \n    <ion-card-content class="cards-content">\n        <p>Ctas Receber Abatidas Total: R$ 0.0</p>\n        <dd> > Caixa    : R$ 0.0</dd>\n        <dd> > Gerencial: R$ 0.0</dd>\n        <p>Ctas Receber Perdidas : R$ 0.0</p>\n        <p>Ctas Receber Excluidas: R$ 0.0</p>\n        <p>Ctas Receber Total    : R$ 500,00</p>\n    </ion-card-content> \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Usuario\Desktop\Git Hub\IONIC\SISMEC\SISMEC\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_bd_api_bd__["a" /* ApiBdProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map