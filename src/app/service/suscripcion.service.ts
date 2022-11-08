import { Suscripcion } from './../model/suscripcion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  private url: string = `${environment.host}/suscripcion`

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Suscripcion[]>(this.url);
  }
}
