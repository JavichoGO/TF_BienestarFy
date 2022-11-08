import { DetalleReserva } from './../model/detalle-reserva';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Subject, EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleReservaService {
  private url: string = `${environment.host}/detallereserva`


  private listaCambio = new Subject<DetalleReserva[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<DetalleReserva[]>(this.url);
  }
  insertar(detallereserva: DetalleReserva) {
    return this.http.post(this.url, detallereserva);

  }
  setLista(listaNueva: DetalleReserva[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  modificar(detallereserva: DetalleReserva) {
    return this.http.put(this.url, detallereserva);
  }
  listarId(idDetalleReserva: number) {
    return this.http.get<DetalleReserva>(`${this.url}/${idDetalleReserva}`);
  }
  eliminar(idDetalleReserva: number) {
    return this.http.delete(this.url + "/" + idDetalleReserva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<DetalleReserva[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }


}
