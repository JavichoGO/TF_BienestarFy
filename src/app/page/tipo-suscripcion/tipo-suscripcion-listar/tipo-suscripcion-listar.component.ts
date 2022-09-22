import { TipoSuscripcion } from './../../../model/tipo-suscripcion';
import { MatTableDataSource } from '@angular/material/table';
import { TipoSuscripcionService } from './../../../service/tipo-suscripcion.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipoSuscripcionDialogoComponent } from './tipo-suscripcion-dialogo/tipo-suscripcion-dialogo.component';

@Component({
  selector: 'app-tipo-suscripcion-listar',
  templateUrl: './tipo-suscripcion-listar.component.html',
  styleUrls: ['./tipo-suscripcion-listar.component.css']
})
export class TipoSuscripcionListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoSuscripcion> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre','descripcion','descuento','acciones','accion2'];
  private idMayor: number=0;
  constructor(private tss: TipoSuscripcionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tss.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.tss.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.tss.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });


  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TipoSuscripcionDialogoComponent);
  }


  eliminar(id: number) {
    this.tss.eliminar(id).subscribe(() => {
      this.tss.listar().subscribe(data => {
        this.tss.setLista(data);
      });
    });

  }
}
