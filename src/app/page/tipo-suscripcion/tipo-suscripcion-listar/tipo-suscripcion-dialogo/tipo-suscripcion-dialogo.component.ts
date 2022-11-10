import { Component, OnInit } from '@angular/core';
import { TipoSuscripcionService } from 'src/app/service/tipo-suscripcion.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'tipo-suscripcion-dialogo',
  templateUrl: './tipo-suscripcion-dialogo.component.html',
  styleUrls: ['./tipo-suscripcion-dialogo.component.css']
})
export class TipoSuscripcionDialogoComponent implements OnInit {

  constructor(private tiposuscripcionService: TipoSuscripcionService,
    private dialogRef: MatDialogRef<TipoSuscripcionDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.tiposuscripcionService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
