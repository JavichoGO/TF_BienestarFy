import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriaUsuario } from 'src/app/model/categoriausuario';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-usuario',
  templateUrl: './categoria-usuario.component.html',
  styleUrls: ['./categoria-usuario.component.css']
})
export class CategoriaUsuarioComponent implements OnInit {
  dataSource: MatTableDataSource<CategoriaUsuario> = new MatTableDataSource();
  displayedColumns:string[]=['nombreCategoria','cantidad'];
  constructor(private cu:CategoriaService) { }

  ngOnInit(): void {
    this.cu.contadorUsuario().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
