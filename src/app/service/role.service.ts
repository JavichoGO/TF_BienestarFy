import { Role } from './../model/role';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private url: string = `${environment.host}/role`

  private listaCambio = new Subject<Role[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Role[]>(this.url);
  }
  insertar(role: Role){
    return this.http.post(this.url, role);

  }
  setLista(listaNueva: Role[]) {
    this.listaCambio.next(listaNueva);
  }
  
  getLista() {
    return this.listaCambio.asObservable();
  }

  modificar(role: Role) {
    return this.http.put(this.url, role);
  }
  listarId(idRole: number) {
    return this.http.get<Role>(`${this.url}/${idRole}`);
  }
  eliminar(idRole: number) {
    return this.http.delete(this.url + "/" + idRole);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Role[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }


}
