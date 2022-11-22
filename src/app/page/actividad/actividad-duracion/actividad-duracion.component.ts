import { ActividadService } from 'src/app/service/actividad.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Actividad } from 'src/app/model/actividad';


@Component({
  selector: 'app-actividad-duracion',
  templateUrl: './actividad-duracion.component.html',
  styleUrls: ['./actividad-duracion.component.css']
})
export class ActividadDuracionComponent implements OnInit {
  dataSource: MatTableDataSource<Actividad> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre','descripcion','duracion'];
  constructor(private acd:ActividadService) { }

  ngOnInit(): void {
    this.acd.buscarDuracion().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
}
