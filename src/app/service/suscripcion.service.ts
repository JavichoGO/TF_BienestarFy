import { Suscripcion } from './../model/suscripcion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  url: string = 'http://localhost:8086/suscripcion'

  private listaCambio = new Subject<Suscripcion[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Suscripcion[]>(this.url);
  }
  insertar(suscripcion: Suscripcion) {
    return this.http.post(this.url, suscripcion);

  }
  modificar(suscripcion: Suscripcion) {
    return this.http.put(this.url, suscripcion);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Suscripcion[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

  listarId(id: number) {
    return this.http.get<Suscripcion>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Suscripcion[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}

