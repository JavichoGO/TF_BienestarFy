import { TipoHorarioDialogoComponent } from './tipo-horario-dialogo/tipo-horario-dialogo.component';
import { TipoHorarioService } from './../../../service/tipo-horario.service';
import { TipoHorario } from './../../../model/tipo-horario';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-horario-listar',
  templateUrl: './tipo-horario-listar.component.html',
  styleUrls: ['./tipo-horario-listar.component.css']
})
export class TipoHorarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoHorario> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones'];
  private idMayor: number = 0;
  
  constructor(private ths:TipoHorarioService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ths.listar().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    })  
    this.ths.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ths.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(idTipoHorario: number) {
    this.idMayor = idTipoHorario;
    this.dialog.open(TipoHorarioDialogoComponent);
  }


  eliminar(idTipoHorario: number) {
    this.ths.eliminar(idTipoHorario).subscribe(() => {
      this.ths.listar().subscribe(data => {
        this.ths.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }


}
