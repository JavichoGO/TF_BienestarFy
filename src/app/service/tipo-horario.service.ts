import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoHorario } from '../model/tipo-horario';
import { Subject,EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoHorarioService {
url:string="http://localhost:5100/tipohorario"
private listaCambio = new Subject<TipoHorario[]>()
private confirmaEliminacion = new Subject<Boolean>()
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
    return this.http.put(this.url + "/" + tipohorario.idTipoHorario, tipohorario);
  }
  listarId(idTipoHorario: number) {
    return this.http.get<TipoHorario>(`${this.url}/${idTipoHorario}`);
  }
  eliminar(idTipoHorario: number) {
    return this.http.delete(this.url + "/" + idTipoHorario);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<TipoHorario[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

  
}
