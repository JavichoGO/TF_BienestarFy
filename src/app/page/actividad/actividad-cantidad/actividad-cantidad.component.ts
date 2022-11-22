import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaUsuario } from 'src/app/model/respuestausuario';
import { ActividadService } from 'src/app/service/actividad.service';

@Component({
  selector: 'app-actividad-cantidad',
  templateUrl: './actividad-cantidad.component.html',
  styleUrls: ['./actividad-cantidad.component.css']
})
export class ActividadCantidadComponent implements OnInit {
  dataSource: MatTableDataSource<RespuestaUsuario> = new MatTableDataSource();
  displayedColumns: string[] = [ 'usuario', 'cantidad'];
  constructor(private aS:ActividadService) { }

  ngOnInit(): void {
    this.aS.buscarcantidadactividades().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
