import { SuscripcionService } from './../../../service/suscripcion.service';
import { Suscripcion } from './../../../model/suscripcion';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscripcion-listar',
  templateUrl: './suscripcion-listar.component.html',
  styleUrls: ['./suscripcion-listar.component.css']
})
export class SuscripcionListarComponent implements OnInit {
  dataSource: MatTableDataSource<Suscripcion> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','precio','fechainicio','fechafin','tipo']
  constructor(private ss: SuscripcionService) { }

  ngOnInit(): void {
    this.ss.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
