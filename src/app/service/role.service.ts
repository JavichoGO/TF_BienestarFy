import { Role } from './../model/role';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url: string = "http://localhost:8086/role"
  private listaCambio = new Subject<Role[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Role[]>(this.url);
  }
  insertar(role: Role) {
    return this.http.post(this.url, role);

  }
  modificar(role: Role) {
    return this.http.put(this.url, role);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Role[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

  listarId(id: number) {
    return this.http.get<Role>(`${this.url}/${id}`);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Role[]) {
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }



}
