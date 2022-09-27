import { MatTableDataSource } from '@angular/material/table';
import { ReservaService } from './../../../service/reserva.service';
import { Reserva } from './../../../model/reserva';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-listar',
  templateUrl: './reserva-listar.component.html',
  styleUrls: ['./reserva-listar.component.css']
})
export class ReservaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Reserva> = new MatTableDataSource();
  displayedColumns:string[]=['id','fecha','usuario','horario']
  constructor(private rs: ReservaService) { }

  ngOnInit(): void {
    this.rs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }
}
