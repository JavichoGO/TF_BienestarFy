import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/model/horario';
import { HorarioService } from 'src/app/service/horario.service';

@Component({
  selector: 'app-horario-listar',
  templateUrl: './horario-listar.component.html',
  styleUrls: ['./horario-listar.component.css']
})
export class HorarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<Horario> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','fecha','hora','tipo','usuario']
  constructor(private hs: HorarioService) { }

  ngOnInit(): void {
    this.hs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
