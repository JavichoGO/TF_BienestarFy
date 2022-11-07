import { CategoriaDialogoComponent } from './categoria-dialogo/categoria-dialogo.component';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriaService } from './../../../service/categoria.service';
import { Categoria } from './../../../model/categoria';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'acciones'];
  private idMayor: number = 0;
  constructor(private cs: CategoriaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
      this.cs.getLista().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });
      this.cs.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });

    }
    confirmar(idCategoria: number) {
      this.idMayor = idCategoria;
      this.dialog.open(CategoriaDialogoComponent);
    }
  
  
    eliminar(idCategoria: number) {
      this.cs.eliminar(idCategoria).subscribe(() => {
        this.cs.listar().subscribe(data => {
          this.cs.setLista(data);/* se ejecuta la línea 27*/
        });
      });
  
    }
}
