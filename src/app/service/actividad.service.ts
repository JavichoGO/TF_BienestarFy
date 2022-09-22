import { Actividad } from './../model/actividad';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  url:string="http://localhost:5100/actividad"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Actividad[]>(this.url);
  }
}
