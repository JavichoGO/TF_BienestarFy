import { Reserva } from './../model/reserva';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private url: string = `${environment.host}/reserva`

constructor(private http:HttpClient) { }
listar(){
  return this.http.get<Reserva[]>(this.url);
}
}
