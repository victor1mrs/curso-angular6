import { Component, OnInit } from '@angular/core';
import {DestinoViaje} from './../models/destino-viaje.model';

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
  guardar(nombre: string, url:string):boolean{
    this.destinos.push(new DestinoViaje(nombre,url));
    console.log(this.destinos);
    return false; //no quiero que se haga el submit porque recargaria la pagina y estamos haciendo una SPA
  }
  elegido(d: DestinoViaje){
    this.destinos.forEach(function (x){x.setSelected(false);});
    d.setSelected(true);
  }
}
