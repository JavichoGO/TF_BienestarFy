import { HttpClient } from '@angular/common/http';
import { TipoSuscripcion } from './../model/tipo-suscripcion';
import { Injectable } from '@angular/core';
import { Subject , EMPTY} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TipoSuscripcionService {
  private url: string = `${environment.host}/tiposuscripcion`
  private listaCambio = new Subject<TipoSuscripcion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<TipoSuscripcion[]>(this.url);
  }
  insertar(tipoSuscripcion: TipoSuscripcion) {
    return this.http.post(this.url, tipoSuscripcion);
  }
  setLista(listaNueva: TipoSuscripcion[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(tipoSuscripcion: TipoSuscripcion) {
    return this.http.put(this.url, tipoSuscripcion);
  }
  listarId(idTipoSuscripcion: number) {
    return this.http.get<TipoSuscripcion>(`${this.url}/${idTipoSuscripcion}`);
  }
  eliminar(idTipoSuscripcion: number) {
    return this.http.delete(this.url + "/" + idTipoSuscripcion);
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