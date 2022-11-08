import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../model/horario';
import { Subject, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private url: string = `${environment.host}/horario`

private listaCambio = new Subject<Horario[]>()
private confirmaEliminacion = new Subject<Boolean>()

  constructor( private http:HttpClient) { }
 
  listar() {
    return this.http.get<Horario[]>(this.url);
  }
  insertar(horario: Horario) {
    return this.http.post(this.url, horario);

  }
  modificar(horario: Horario) {
    return this.http.put(this.url, horario);
  }
  eliminar(idHorario: number) {
    return this.http.delete(this.url + "/" + idHorario);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Horario[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

  listarId(idHorario: number) {
    return this.http.get<Horario>(`${this.url}/${idHorario}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Horario[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


}
