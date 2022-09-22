import { Role } from './../model/role';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  url:string="http://localhost:5100/role"

  private listaCambio = new Subject<Role[]>()

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
    return this.http.put(this.url + "/" + role.id, role);
  }
  listarId(id: number) {
    return this.http.get<Role>(`${this.url}/${id}`);
  }
}
