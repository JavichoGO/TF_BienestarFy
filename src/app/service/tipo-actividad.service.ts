import { TipoActividad } from './../model/tipo-actividad';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TipoActividadService {
url:string="http://localhost:5100/tipoactividad"

private listaCambio = new Subject<TipoActividad[]>()
private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<TipoActividad[]>(this.url);
  }
  insertar(tipoactividad: TipoActividad){
    return this.http.post(this.url, tipoactividad);

  }
  setLista(listaNueva: TipoActividad[]) {
    this.listaCambio.next(listaNueva);
  }
  
  getLista() {
    return this.listaCambio.asObservable();
  }

  modificar(tipoactividad: TipoActividad) {
    return this.http.put(this.url + "/" + tipoactividad.id, tipoactividad);
  }
  listarId(id: number) {
    return this.http.get<TipoActividad>(`${this.url}/${id}`);
  }

eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }  
buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<TipoActividad[]>(`${this.url}/buscar`, texto.toLocaleUpperCase(), {
      });
    }
    return EMPTY;
  }

}
