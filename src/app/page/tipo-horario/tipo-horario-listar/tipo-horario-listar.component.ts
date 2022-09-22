import { TipoHorarioService } from './../../../service/tipo-horario.service';
import { TipoHorario } from './../../../model/tipo-horario';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tipo-horario-listar',
  templateUrl: './tipo-horario-listar.component.html',
  styleUrls: ['./tipo-horario-listar.component.css']
})
export class TipoHorarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoHorario> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones'];
  constructor(private ths:TipoHorarioService) { }

  ngOnInit(): void {
    this.ths.listar().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    })  
    this.ths.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
