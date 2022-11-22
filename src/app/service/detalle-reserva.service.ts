import { DetalleReserva } from './../model/detalle-reserva';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Subject, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleReservaService {
   url: string = 'http://localhost:8086/detallereserva'

  private listaCambio = new Subject<DetalleReserva[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<DetalleReserva[]>(this.url);
  }
  insertar(detalleReserva: DetalleReserva) {
    return this.http.post(this.url, detalleReserva);

  }
  modificar(detalleReserva: DetalleReserva) {
    return this.http.put(this.url, detalleReserva);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<DetalleReserva[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

  listarId(id: number) {
    return this.http.get<DetalleReserva>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: DetalleReserva[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
