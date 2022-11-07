import { MatTableDataSource } from '@angular/material/table';
import { TipoActividadService } from './../../../service/tipo-actividad.service';
import { TipoActividad } from './../../../model/tipo-actividad';
import { Component, OnInit } from '@angular/core';
import { TipoActividadDialogoComponent } from './tipo-actividad-dialogo/tipo-actividad-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-actividad-listar',
  templateUrl: './tipo-actividad-listar.component.html',
  styleUrls: ['./tipo-actividad-listar.component.css']
})
export class TipoActividadListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoActividad> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones']; 
  private idMayor: number = 0;
  constructor(private tas:TipoActividadService, private dialog: MatDialog) { }

ngOnInit(): void {
    this.tas.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.tas.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.tas.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

confirmar(idTipoActividad: number) {
    this.idMayor = idTipoActividad;
    this.dialog.open(TipoActividadDialogoComponent);
  }


  eliminar(idTipoActividad: number) {
    this.tas.eliminar(idTipoActividad).subscribe(() => {
      this.tas.listar().subscribe(data => {
        this.tas.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }

}
