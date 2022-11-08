import { TipoActividad } from './../model/tipo-actividad';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TipoActividadService {
  private url: string = `${environment.host}/tipoactividad`

private listaCambio = new Subject<TipoActividad[]>()
private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  listar() {
    return this.http.get<TipoActividad[]>(this.url);
  }
  insertar(tipoactividad: TipoActividad) {
    return this.http.post(this.url, tipoactividad);

  }
  modificar(tipoactividad: TipoActividad) {
    return this.http.put(this.url, tipoactividad);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<TipoActividad[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

  listarId(id: number) {
    return this.http.get<TipoActividad>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: TipoActividad[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
