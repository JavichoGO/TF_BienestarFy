import { UsuarioService } from './../../../service/usuario.service';
import { Usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'apellido','correo','contrasena','edad','telefono','categoria','suscripcion','role'];
  constructor(private us:UsuarioService) { }

  ngOnInit(): void {
    this.us.listar().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    })  
  }
}