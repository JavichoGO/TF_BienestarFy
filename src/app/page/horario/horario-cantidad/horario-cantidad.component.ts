import { Component, OnInit } from '@angular/core';
import { RespuestaUsuarioHorario } from 'src/app/model/respuestausuariohorario';
import { MatTableDataSource } from '@angular/material/table';
import { HorarioService } from 'src/app/service/horario.service';

@Component({
  selector: 'app-horario-cantidad',
  templateUrl: './horario-cantidad.component.html',
  styleUrls: ['./horario-cantidad.component.css']
})
export class HorarioCantidadComponent implements OnInit {
  dataSource: MatTableDataSource<RespuestaUsuarioHorario> = new MatTableDataSource();
  displayedColumns: string[] = [ 'id', 'horario','usuario','categoria'];
  constructor(private hS:HorarioService) { }

  ngOnInit(): void {
    this.hS.horariousuario().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
