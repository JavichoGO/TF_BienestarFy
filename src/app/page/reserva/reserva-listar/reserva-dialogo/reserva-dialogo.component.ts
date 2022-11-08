import { MatDialogRef } from '@angular/material/dialog';
import { ReservaService } from './../../../../service/reserva.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-dialogo',
  templateUrl: './reserva-dialogo.component.html',
  styleUrls: ['./reserva-dialogo.component.css']
})
export class ReservaDialogoComponent implements OnInit {


  constructor(private rS: ReservaService, private dialogRef: MatDialogRef<ReservaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.rS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
