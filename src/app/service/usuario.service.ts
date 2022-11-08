import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';
Usuario

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
url:string="http://localhost:8086/usuario"

private listaCambio = new Subject<Usuario[]>()
private confirmaEliminacion = new Subject<Boolean>()
constructor(private http: HttpClient) { }
listar() {
  return this.http.get<Usuario[]>(this.url);
}
insertar(usuario: Usuario) {
  return this.http.post(this.url, usuario);

}
modificar(usuario: Usuario) {
  return this.http.put(this.url, usuario);
}
eliminar(id: number) {
  return this.http.delete(this.url + "/" + id);
}
buscar(texto: string) {
  if (texto.length != 0) {
    return this.http.post<Usuario[]>(`${this.url}/buscar`, texto.toLowerCase(), {
    });
  }
  return EMPTY;
}

listarId(id: number) {
  return this.http.get<Usuario>(`${this.url}/${id}`);
}

getLista() {
  return this.listaCambio.asObservable();
}

setLista(listaNueva: Usuario[]) {
  this.listaCambio.next(listaNueva);
}

getConfirmaEliminacion() {
  return this.confirmaEliminacion.asObservable();
}
setConfirmaEliminacion(estado: Boolean) {
  this.confirmaEliminacion.next(estado);
}

}
