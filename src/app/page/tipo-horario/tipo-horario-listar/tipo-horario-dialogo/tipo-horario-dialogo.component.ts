import { TipoHorarioService } from './../../../../service/tipo-horario.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-horario-dialogo',
  templateUrl: './tipo-horario-dialogo.component.html',
  styleUrls: ['./tipo-horario-dialogo.component.css']
})
export class TipoHorarioDialogoComponent implements OnInit {

 

  constructor(private tipohorarioService:TipoHorarioService, private dialogRef: MatDialogRef<TipoHorarioDialogoComponent>) {
   

  }

 ngOnInit(): void {
 }


 confirmar(estado:boolean){
   this.tipohorarioService.setConfirmaEliminacion(estado);
   this.dialogRef.close();
   

 }
}
