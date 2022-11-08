import { DetalleReservaService } from './../../../../service/detalle-reserva.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-detalle-reserva-dialogo',
  templateUrl: './detalle-reserva-dialogo.component.html',
  styleUrls: ['./detalle-reserva-dialogo.component.css']
})
export class DetalleReservaDialogoComponent implements OnInit {

  constructor(private drS:DetalleReservaService, private dialogRef: MatDialogRef<DetalleReservaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.drS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}