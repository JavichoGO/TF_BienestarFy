import { Reserva } from './../model/reserva';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
url:string="http://localhost:5100/reserva"

constructor(private http:HttpClient) { }
listar(){
  return this.http.get<Reserva[]>(this.url);
}
}
