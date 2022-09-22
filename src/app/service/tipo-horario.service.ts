import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoHorario } from '../model/tipo-horario';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoHorarioService {
url:string="http://localhost:5100/tipohorario"
private listaCambio = new Subject<TipoHorario[]>()
  constructor( private http:HttpClient) { }
  listar(){
    return this.http.get<TipoHorario[]>(this.url);
  }
  insertar(tipohorario: TipoHorario) {
    return this.http.post(this.url, tipohorario);
  }
  setLista(listaNueva: TipoHorario[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(tipohorario:TipoHorario){
    return this.http.put(this.url + "/" + tipohorario.id, tipohorario);
  }
  listarId(id: number) {
    return this.http.get<TipoHorario>(`${this.url}/${id}`);
  }

  
}
