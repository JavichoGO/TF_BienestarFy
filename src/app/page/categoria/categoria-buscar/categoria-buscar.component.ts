import { CategoriaService } from './../../../service/categoria.service';
import { Categoria } from './../../../model/categoria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-buscar',
  templateUrl: './categoria-buscar.component.html',
  styleUrls: ['./categoria-buscar.component.css']
})
export class CategoriaBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Categoria[] = [];
    this.categoriaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreCategoria.toUpperCase().includes(e.target.value.toUpperCase())||element.descripcionCategoria.toUpperCase().includes(e.target.value.toUpperCase())) {
          array.push(data[index]);
        }
      });
      this.categoriaService.setLista(array);
    })
  }

}
