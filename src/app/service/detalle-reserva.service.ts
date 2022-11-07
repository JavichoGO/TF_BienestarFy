import { DetalleReserva } from './../model/detalle-reserva';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleReservaService {
  url: string = "http://localhost:5100/detallereserva"

  constructor(private http: HttpClient) {
    listar(){
      return this.http.get<DetalleReserva[]>(this.url);

    }
  }
}
