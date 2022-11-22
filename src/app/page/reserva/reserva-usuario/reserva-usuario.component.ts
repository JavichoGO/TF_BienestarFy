import { ReservaService } from 'src/app/service/reserva.service';
import { ReservaUsuario } from './../../../model/ReservaUsuario';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-usuario',
  templateUrl: './reserva-usuario.component.html',
  styleUrls: ['./reserva-usuario.component.css']
})
export class ReservaUsuarioComponent implements OnInit {
  dataSource: MatTableDataSource<ReservaUsuario> = new MatTableDataSource();
  displayedColumns:string[]=['nombre_reserva','fecha_reserva','nombre_usuario','apellido_usuario','correo_usuario','telefono_usuario'];
  constructor(private RU:ReservaService) { }

  ngOnInit(): void {
    this.RU.buscarRESUS().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
