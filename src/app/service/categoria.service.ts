import { Subject, EMPTY} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './../model/categoria';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url: string = "http://localhost:5100/categoria"

  private listaCambio = new Subject<Categoria[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Categoria[]>(this.url);
  }
  insertar(categoria: Categoria) {
    return this.http.post(this.url, categoria);

  }
  setLista(listaNueva: Categoria[]) {
    this.listaCambio.next(listaNueva);
  }

  getLista() {
    return this.listaCambio.asObservable();
  }

  modificar(categoria: Categoria) {
    return this.http.put(this.url + "/" + categoria.idCategoria, categoria);
  }
  listarId(idCategoria: number) {
    return this.http.get<Categoria>(`${this.url}/${idCategoria}`);
  }
  eliminar(idCategoria: number) {
    return this.http.delete(this.url + "/" + idCategoria);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Categoria[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }


}
