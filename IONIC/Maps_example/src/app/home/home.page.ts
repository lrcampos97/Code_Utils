import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Geolocation } from '@ionic-native/geolocation/ngx';  
import mapboxgl from 'mapbox-gl';
import MapboxDirections from 'mapbox-gl-directions';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import { environment } from 'src/environments/environment';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

// Interface
import { Viagem } from '../models/viagem.interface';


declare var google;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // variável utilizada no mapa
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  @ViewChild('map') mapElement: ElementRef;

  @ViewChild('coordinates') coordinates: ElementRef; 
  map: any;

  startPosition: any;
  originPosition: string;
  destinationPosition: string;

  localizacao: any;
  funcao: any;
  buttonDisabled:boolean;

  constructor(private geolocation: Geolocation, 
              public actionSheetController: ActionSheetController, 
              private loadingCtrl: LoadingController,
              private storage: Storage) {
      this.buttonDisabled = false;
      this.salvarLocalizacao();
  }


  initializeMapbox() {    
    // chave da api
    mapboxgl.accessToken = environment.mapbox.accessToken;
  
    const map = new mapboxgl.Map({
      container: this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 13,
      center: [-48.8769, -23.9793]
    });


    // PARA INCLUIR O EDIT DE PESQUISA
    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    }));

    this.geolocation.getCurrentPosition()
      .then((response) => {
        this.startPosition = response.coords;
        map.setCenter([this.startPosition.longitude, this.startPosition.latitude]);
               
        var marker = new mapboxgl.Marker()
          .setLngLat([this.startPosition.longitude, this.startPosition.latitude])
          .addTo(map);
      });
    
      this.map = map;
  }

  salvarLocalizacao(){

      this.loadingCtrl.create({
        message: 'Atualizando Mapa...'
      }).then((res) => {
        res.present();

        mapboxgl.accessToken = environment.mapbox.accessToken;
  
        const map = new mapboxgl.Map({
          container: this.mapElement.nativeElement,
          style: 'mapbox://styles/mapbox/streets-v9',
          zoom: 16      
        });

    
        this.geolocation.getCurrentPosition()
          .then((response) => {
            this.localizacao = response.coords;  
            map.setCenter([this.localizacao.longitude, this.localizacao.latitude]);

              // set a key/value
              this.storage.set('viagem', {
                latitude: this.localizacao.latitude,
                longitude: this.localizacao.longitude
              });
                               
            var marker = new mapboxgl.Marker();

            marker.setLngLat([this.localizacao.longitude, this.localizacao.latitude]);
            marker.addTo(map);                          
         });   

         res.dismiss();

        res.onDidDismiss().then((dis) => {
          console.log('Loading dismissed! after 2 Seconds');
        });
      });        
  }
  
  // https://wanderdrone.appspot.com/
  realTimeMap() {
    this.buttonDisabled = true;
    this.funcao = setInterval(()=> { this.salvarLocalizacao() }, 10000);
  }

  cancelarRastreador(){
    this.buttonDisabled = false; 
    clearInterval(this.funcao);
    // Or to get a key/value pair
    this.storage.get('viagem').then((val) => {
      console.log('Your name is', val);
    });
  }

  calculateRoute() {
    if (this.destinationPosition && this.startPosition) {
      const request = {
        origin: this.startPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };
      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }  
}
