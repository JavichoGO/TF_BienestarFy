import { HorarioService } from 'src/app/service/horario.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-horario-dialogo',
  templateUrl: './horario-dialogo.component.html',
  styleUrls: ['./horario-dialogo.component.css']
})
export class HorarioDialogoComponent implements OnInit {

  constructor(private hS: HorarioService, private dialogRef: MatDialogRef<HorarioDialogoComponent>) { }

  ngOnInit(): void {
  
  }
  confirmar(estado: boolean) {
    this.hS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
