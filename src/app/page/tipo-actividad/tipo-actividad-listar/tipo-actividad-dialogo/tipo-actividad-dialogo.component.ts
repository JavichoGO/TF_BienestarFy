
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TipoActividadService } from 'src/app/service/tipo-actividad.service';

@Component({
  selector: 'app-tipo-actividad-dialogo',
  templateUrl: './tipo-actividad-dialogo.component.html',
  styleUrls: ['./tipo-actividad-dialogo.component.css']
})
export class TipoActividadDialogoComponent implements OnInit {


  constructor(private tipoactividadService:TipoActividadService, private dialogRef: MatDialogRef<TipoActividadDialogoComponent>) {
   

   }

  ngOnInit(): void {
  }


  confirmar(estado:boolean){
    this.tipoactividadService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
    

  }

}
