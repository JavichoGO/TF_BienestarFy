import { MatDialog } from '@angular/material/dialog';
import { RoleDialogoComponent } from './role-dialogo/role-dialogo.component';
import { RoleService } from './../../../service/role.service';
import { Role } from './../../../model/role';
import { Component, OnInit,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-role-listar',
  templateUrl: './role-listar.component.html',
  styleUrls: ['./role-listar.component.css']
})
export class RoleListarComponent implements OnInit {
  dataSource: MatTableDataSource<Role> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'acciones']
  private idMayor: number = 0;

  constructor(private rs: RoleService, private dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.rs.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.rs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.rs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(idRole: number) {
    this.idMayor = idRole;
    this.dialog.open(RoleDialogoComponent);
  }


  eliminar(idRole: number) {
    this.rs.eliminar(idRole).subscribe(() => {
      this.rs.listar().subscribe(data => {
        this.rs.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }

}
