import { HttpClient } from '@angular/common/http';
import { TipoSuscripcion } from './../model/tipo-suscripcion';
import { Injectable } from '@angular/core';
import { Subject , EMPTY} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TipoSuscripcionService {
  url: string = "http://localhost:5100/tiposuscripcion"
  private listaCambio = new Subject<TipoSuscripcion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<TipoSuscripcion[]>(this.url);
  }
  insertar(tiposuscripcion: TipoSuscripcion) {
    return this.http.post(this.url, tiposuscripcion);
  }
  setLista(listaNueva: TipoSuscripcion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(tiposuscripcion: TipoSuscripcion) {
    return this.http.put(this.url + "/" + tiposuscripcion.id, tiposuscripcion);
  }
  listarId(id: number) {
    return this.http.get<TipoSuscripcion>(`${this.url}/${id}`);
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
      return this.http.post<TipoSuscripcion[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}