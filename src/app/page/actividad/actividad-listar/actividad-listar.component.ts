import { ActividadComponent } from './../actividad.component';
import { ActividadDialogoComponent } from './actividad-dialogo/actividad-dialogo.component';
import { MatTableDataSource } from '@angular/material/table';
import { ActividadService } from './../../../service/actividad.service';
import { Actividad } from './../../../model/actividad';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-actividad-listar',
  templateUrl: './actividad-listar.component.html',
  styleUrls: ['./actividad-listar.component.css']
})
export class ActividadListarComponent implements OnInit {
  dataSource: MatTableDataSource<Actividad> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','duracion','usuario','tipo','acciones']
  private idMayor: number = 0;
  constructor(private as: ActividadService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.as.listar().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);
    });

    this.as.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.as.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ActividadDialogoComponent);
  }
  eliminar(id: number) {
    this.as.eliminar(id).subscribe(() => {
      this.as.listar().subscribe(data => {
        this.as.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}

