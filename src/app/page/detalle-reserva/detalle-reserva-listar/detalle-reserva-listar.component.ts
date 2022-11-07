import { DetalleReservaService } from './../../../service/detalle-reserva.service';
import { DetalleReserva } from './../../../model/detalle-reserva';
import { Reserva } from './../../../model/reserva';
import { Actividad } from './../../../model/actividad';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detalle-reserva-listar',
  templateUrl: './detalle-reserva-listar.component.html',
  styleUrls: ['./detalle-reserva-listar.component.css']
})
export class DetalleReservaListarComponent implements OnInit {
  dataSource: MatTableDataSource<DetalleReserva> = new MatTableDataSource();
  displayedColumns:string[]=['id','descripcion','reserva','actividad']
  
  constructor(private drs: DetalleReservaService) { }
  ngOnInit(): void {
    this.drs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }
}