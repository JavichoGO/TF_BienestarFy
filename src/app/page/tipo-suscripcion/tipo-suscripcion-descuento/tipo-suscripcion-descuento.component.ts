import { MatTableDataSource } from '@angular/material/table';
import { TipoSuscripcion } from './../../../model/tipo-suscripcion';
import { TipoSuscripcionService } from 'src/app/service/tipo-suscripcion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-suscripcion-descuento',
  templateUrl: './tipo-suscripcion-descuento.component.html',
  styleUrls: ['./tipo-suscripcion-descuento.component.css']
})
export class TipoSuscripcionDescuentoComponent implements OnInit {
  dataSource: MatTableDataSource<TipoSuscripcion> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre','descripcion','descuento'];
  constructor(private tsd:TipoSuscripcionService) { }

  ngOnInit(): void {
    this.tsd.buscarDescuento().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
}

