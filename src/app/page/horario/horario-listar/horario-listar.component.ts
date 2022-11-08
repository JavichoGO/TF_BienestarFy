import { HorarioDialogoComponent } from './horario-dialogo/horario-dialogo.component';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/model/horario';
import { HorarioService } from 'src/app/service/horario.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-horario-listar',
  templateUrl: './horario-listar.component.html',
  styleUrls: ['./horario-listar.component.css']
})
export class HorarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<Horario> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','fecha','hora','usuario','tipo','acciones'];
  private idMayor: number = 0;
  constructor(private hs: HorarioService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.hs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    });
    this.hs.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.hs.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(idHorario: number) {
    this.idMayor = idHorario;
    this.dialog.open(HorarioDialogoComponent);
  }
  eliminar(idHorario: number) {
    this.hs.eliminar(idHorario).subscribe(() => {
      this.hs.listar().subscribe(data => {
        this.hs.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
}
 

