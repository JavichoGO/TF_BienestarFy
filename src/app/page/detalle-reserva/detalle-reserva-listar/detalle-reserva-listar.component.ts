import { DetalleReservaDialogoComponent } from './detalle-reserva-dialogo/detalle-reserva-dialogo.component';
import { DetalleReservaService } from './../../../service/detalle-reserva.service';
import { DetalleReserva } from './../../../model/detalle-reserva';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-reserva-listar',
  templateUrl: './detalle-reserva-listar.component.html',
  styleUrls: ['./detalle-reserva-listar.component.css']
})
export class DetalleReservaListarComponent implements OnInit {
  dataSource: MatTableDataSource<DetalleReserva> = new MatTableDataSource();
  displayedColumns: string[] = ['id','nombre', 'descripcion','reserva','actividad','acciones'];
  private idMayor: number = 0;
  
  constructor(private drS: DetalleReservaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.drS.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
      this.drS.getLista().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });
      this.drS.getConfirmaEliminacion().subscribe(data => {
        data == true ? this.eliminar(this.idMayor) : false;
      });

    }
    confirmar(idDetalleReserva: number) {
      this.idMayor = idDetalleReserva;
      this.dialog.open(DetalleReservaDialogoComponent);
    }
  
  
    eliminar(idDetalleReserva: number) {
      this.drS.eliminar(idDetalleReserva).subscribe(() => {
        this.drS.listar().subscribe(data => {
          this.drS.setLista(data);/* se ejecuta la línea 27*/
        });
      });
  
    }
}