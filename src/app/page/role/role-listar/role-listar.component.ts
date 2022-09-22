import { RoleService } from './../../../service/role.service';
import { Role } from './../../../model/role';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-role-listar',
  templateUrl: './role-listar.component.html',
  styleUrls: ['./role-listar.component.css']
})
export class RoleListarComponent implements OnInit {
  dataSource: MatTableDataSource<Role> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','acciones']

  constructor(private rs: RoleService) { }

  ngOnInit(): void {
    this.rs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);

      this.rs.getLista().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });
    })
  }
}