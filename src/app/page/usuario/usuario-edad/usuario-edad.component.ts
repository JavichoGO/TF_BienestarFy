import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-edad',
  templateUrl: './usuario-edad.component.html',
  styleUrls: ['./usuario-edad.component.css']
})
export class UsuarioEdadComponent implements OnInit {

  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns: string[]=['edad','nombre'];
  constructor(private acd:UsuarioService) { }

  ngOnInit(): void {
    this.acd.obtenerEdadMenor().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
