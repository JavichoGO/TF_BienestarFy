import { Reserva } from './../model/reserva';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private url: string = `${environment.host}/reserva`

  private listaCambio = new Subject<Reserva[]>()
  private confirmaEliminacion = new Subject<Boolean>()
constructor(private http:HttpClient) { }
listar(){
  return this.http.get<Reserva[]>(this.url);
}
insertar(reserva: Reserva) {
  return this.http.post(this.url, reserva);

}
modificar(reserva: Reserva) {
  return this.http.put(this.url, reserva);
}
eliminar(id: number) {
  return this.http.delete(this.url + "/" + id);
}
buscar(texto: string) {
  if (texto.length != 0) {
    return this.http.post<Reserva[]>(`${this.url}/buscar`, texto.toLowerCase(), {
    });
  }
  return EMPTY;
}

listarId(id: number) {
  return this.http.get<Reserva>(`${this.url}/${id}`);
}

getLista() {
  return this.listaCambio.asObservable();
}

setLista(listaNueva: Reserva[]) {
  this.listaCambio.next(listaNueva);
}

getConfirmaEliminacion() {
  return this.confirmaEliminacion.asObservable();
}
setConfirmaEliminacion(estado: Boolean) {
  this.confirmaEliminacion.next(estado);
}

}
