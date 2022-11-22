import { SuscripcionService } from './../../../service/suscripcion.service';
import { Suscripcion } from './../../../model/suscripcion';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { SuscripcionDialogoComponent } from './suscripcion-dialogo/suscripcion-dialogo.component'; 
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-suscripcion-listar',
  templateUrl: './suscripcion-listar.component.html',
  styleUrls: ['./suscripcion-listar.component.css']
})
export class SuscripcionListarComponent implements OnInit {
  dataSource: MatTableDataSource<Suscripcion> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','precio','fechainicio','fechafin','tipo','acciones']
  private idMayor: number = 0;
  constructor(private ss: SuscripcionService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.ss.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  
  this.ss.getLista().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    console.log(data);

  });

  this.ss.getConfirmaEliminacion().subscribe(data => {
    data == true ? this.eliminar(this.idMayor) : false;
  });
}
confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(SuscripcionDialogoComponent);
}
eliminar(id: number) {
  this.ss.eliminar(id).subscribe(() => {
    this.ss.listar().subscribe(data => {
      this.ss.setLista(data);/* se ejecuta la línea 27 */
    });
  });
}
}

