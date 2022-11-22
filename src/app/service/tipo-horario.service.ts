import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoHorario } from '../model/tipo-horario';
import { Subject,EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TipoHorarioService {
   url: string = 'http://localhost:8086/tipohorario'
private listaCambio = new Subject<TipoHorario[]>()
private confirmaEliminacion = new Subject<Boolean>()
  constructor( private http:HttpClient) { }
  listar() {
    return this.http.get<TipoHorario[]>(this.url);
  }
  insertar(tipohorario: TipoHorario) {

    return this.http.post(this.url, tipohorario);
  }

  modificar(tipohorario: TipoHorario) {

    return this.http.put(this.url, tipohorario);
  }
  eliminar(idTipoHorario: number) {

    return this.http.delete(`${this.url}/${idTipoHorario}`);
  }
  buscar(texto:string) {
        console.log("algo")
    if (texto.length != 0) {
      return this.http.post<TipoHorario[]>(`${this.url}/buscar`, texto.toLowerCase());
    }
    return EMPTY;
  }
  listarId(idTipoHorario: number) {
    return this.http.get<TipoHorario>(`${this.url}/${idTipoHorario}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: TipoHorario[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
