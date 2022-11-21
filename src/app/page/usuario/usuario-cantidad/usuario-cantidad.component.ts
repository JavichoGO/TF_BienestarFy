import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaSuscripcion } from 'src/app/model/respuestasuscripcion';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-cantidad',
  templateUrl: './usuario-cantidad.component.html',
  styleUrls: ['./usuario-cantidad.component.css']
})
export class UsuarioCantidadComponent implements OnInit {
  dataSource: MatTableDataSource<RespuestaSuscripcion> = new MatTableDataSource();
  displayedColumns: string[] = [ 'suscripcion', 'cantidad'];
  constructor(private uS:UsuarioService) { }

  ngOnInit(): void {
    this.uS.buscarcantidadusuarios().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
