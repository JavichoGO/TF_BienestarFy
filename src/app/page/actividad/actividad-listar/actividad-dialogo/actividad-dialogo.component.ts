import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActividadService } from 'src/app/service/actividad.service';

@Component({
  selector: 'app-actividad-dialogo',
  templateUrl: './actividad-dialogo.component.html',
  styleUrls: ['./actividad-dialogo.component.css']
})
export class ActividadDialogoComponent implements OnInit {

  constructor(private aS: ActividadService, private dialogRef: MatDialogRef<ActividadDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.aS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
