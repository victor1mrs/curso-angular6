import { Component, OnInit, Output } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
//import { DestinosApiClient} from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  destinos: DestinoViaje[];
  constructor() {
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje){
    
    this.destinos.push(d);
    //this.destinoApiClient.add(d);
    //this.onItemAdded.emit(d);
    
  }

  elegido(d:DestinoViaje){

    this.destinos.forEach(x=>x.setSelected(false));
    
    d.setSelected(true);
    
    }
  /*
  elegido(e: DestinoViaje){
    this.destinosApiClient.getAll().forEach(x => x.setSelected(false));
    e.setSelected(true);
    
  }
  */
}