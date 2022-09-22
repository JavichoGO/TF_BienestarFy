import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
Usuario

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
url:string="http://localhost:5100/usuario"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Usuario[]>(this.url);
  }
}
