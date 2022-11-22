import { TipoActividadService } from 'src/app/service/tipo-actividad.service';
import { TaDetalleReserva } from './../../../model/taDetalleReserva';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tipo-actividad-contador',
  templateUrl: './tipo-actividad-contador.component.html',
  styleUrls: ['./tipo-actividad-contador.component.css']
})
export class TipoActividadContadorComponent implements OnInit {
  dataSource: MatTableDataSource<TaDetalleReserva> = new MatTableDataSource();
  displayedColumns:string[]=['tipoActividad','cantidad'];
  constructor(private TAdr:TipoActividadService) { }

  ngOnInit(): void {
    this.TAdr.contadorTipoActividad().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
}
