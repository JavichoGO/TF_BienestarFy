import { CategoriaService } from './../../../../service/categoria.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria-dialogo',
  templateUrl: './categoria-dialogo.component.html',
  styleUrls: ['./categoria-dialogo.component.css']
})
export class CategoriaDialogoComponent implements OnInit {

  constructor(private categoriaService:CategoriaService, private dialogRef: MatDialogRef<CategoriaDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.categoriaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
