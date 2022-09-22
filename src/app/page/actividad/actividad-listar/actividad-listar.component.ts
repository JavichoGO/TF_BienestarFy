import { MatTableDataSource } from '@angular/material/table';
import { ActividadService } from './../../../service/actividad.service';
import { Actividad } from './../../../model/actividad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-listar',
  templateUrl: './actividad-listar.component.html',
  styleUrls: ['./actividad-listar.component.css']
})
export class ActividadListarComponent implements OnInit {
  dataSource: MatTableDataSource<Actividad> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','usuario','tipo']
  constructor(private as: ActividadService) { }
  ngOnInit(): void {
    this.as.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }
}
