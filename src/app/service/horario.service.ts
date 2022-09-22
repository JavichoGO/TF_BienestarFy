import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../model/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
url:string="http://localhost:5100/horario"

  constructor( private http:HttpClient) { }
  listar(){
    return this.http.get<Horario[]>(this.url);
  }
}
