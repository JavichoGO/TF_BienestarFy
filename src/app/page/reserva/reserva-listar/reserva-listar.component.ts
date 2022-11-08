import { MatTableDataSource } from '@angular/material/table';
import { ReservaService } from './../../../service/reserva.service';
import { Reserva } from './../../../model/reserva';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservaDialogoComponent } from './reserva-dialogo/reserva-dialogo.component';

@Component({
  selector: 'app-reserva-listar',
  templateUrl: './reserva-listar.component.html',
  styleUrls: ['./reserva-listar.component.css']
})
export class ReservaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Reserva> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','fecha','usuario','horario','acciones']
  
  private idMayor: number = 0;

  constructor(private rs: ReservaService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.rs.listar().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);
    });

    this.rs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.rs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ReservaDialogoComponent);
  }
  eliminar(id: number) {
    this.rs.eliminar(id).subscribe(() => {
      this.rs.listar().subscribe(data => {
        this.rs.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}

