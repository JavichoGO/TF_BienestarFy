import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Suscripcion } from 'src/app/model/suscripcion';
import { SuscripcionService } from 'src/app/service/suscripcion.service';

@Component({
  selector: 'app-suscripcion-promedio',
  templateUrl: './suscripcion-promedio.component.html',
  styleUrls: ['./suscripcion-promedio.component.css']
})
export class SuscripcionPromedioComponent implements OnInit {

  dataSource: MatTableDataSource<Suscripcion> = new MatTableDataSource();
  displayedColumns: string[]=['promedio'];
  constructor(private acd:SuscripcionService) { }

  ngOnInit(): void {
    this.acd.obtenerPromedio().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
