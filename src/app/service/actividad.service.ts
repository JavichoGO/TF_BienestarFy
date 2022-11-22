import { TipoActividad } from './../model/tipo-actividad';
import { Actividad } from './../model/actividad';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
   url: string = 'http://localhost:8086/actividad'

  private listaCambio = new Subject<Actividad[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Actividad[]>(this.url);
  }
  insertar(actividad: Actividad) {
    return this.http.post(this.url, actividad);

  }
  modificar(actividad: Actividad) {
    return this.http.put(this.url, actividad);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Actividad[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

  listarId(id: number) {
    return this.http.get<Actividad>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Actividad[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
