import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ConfigPage } from '../pages/config/config';
import { LojasPage } from '../pages/lojas/lojas'
import { ApiBdProvider } from '../providers/api-bd/api-bd';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { AccordionListComponent } from '../components/accordion-list/accordion-list';
import { ModalFiltrosPage } from '../pages/modal-filtros/modal-filtros';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ConfigPage,
    LojasPage,
    ModalFiltrosPage,
    AccordionListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LojasPage,
    ConfigPage,
    ModalFiltrosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiBdProvider
  ]
})
export class AppModule {}
