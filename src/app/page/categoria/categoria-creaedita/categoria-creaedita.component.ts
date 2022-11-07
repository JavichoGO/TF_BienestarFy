import { CategoriaService } from './../../../service/categoria.service';
import { Categoria } from './../../../model/categoria';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//comentario
@Component({
  selector: 'app-categoria-creaedita',
  templateUrl: './categoria-creaedita.component.html',
  styleUrls: ['./categoria-creaedita.component.css']
})
export class CategoriaCreaEditaComponent implements OnInit {

  categoria: Categoria= new Categoria();
  mensaje: string= "";
  edicion: boolean= false;
  id:number = 0;

  constructor(private categoriaService: CategoriaService, private router: Router
    ,private route: ActivatedRoute) { 


  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idCategoria = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
  }
  aceptar(): void {
    if (this.categoria.nombreCategoria.length > 0 && this.categoria.descripcionCategoria.length > 0) {
      if (this.edicion) {
        this.categoriaService.modificar(this.categoria).subscribe(data => {
          this.categoriaService.listar().subscribe(data => {
            this.categoriaService.setLista(data);
          })
        })
      } else {

        this.categoriaService.insertar(this.categoria).subscribe(data => {
          this.categoriaService.listar().subscribe(data => {
            this.categoriaService.setLista(data);
          })
        })
      }
      this.router.navigate(['categoria']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.categoriaService.listarId(this.idCategoria).subscribe(data => {
        this.categoria = data;
      })
    }

  }

}
