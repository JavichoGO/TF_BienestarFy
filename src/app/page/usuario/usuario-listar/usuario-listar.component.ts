import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';
import { UsuarioService } from './../../../service/usuario.service';
import { Usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'nombre', 'apellido','correo','contrasena','edad','telefono','role', 'acciones'];
  //Agregar 'categoria','suscripcion' en la lindea de arriba y tmb en el html
  private idMayor: number = 0;
  constructor(private us:UsuarioService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.us.listar().subscribe(data => {
      
      this.dataSource = new MatTableDataSource(data);
    });

    this.us.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.us.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(UsuarioDialogoComponent);
  }
  eliminar(id: number) {
    this.us.eliminar(id).subscribe(() => {
      this.us.listar().subscribe(data => {
        this.us.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
}