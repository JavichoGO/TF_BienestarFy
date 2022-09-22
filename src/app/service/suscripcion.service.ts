import { Suscripcion } from './../model/suscripcion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  url:string="http://localhost:5100/suscripcion"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Suscripcion[]>(this.url);
  }
}
