import { Component, OnInit } from '@angular/core';
import { TipoHorario } from 'src/app/model/tipo-horario';
import { TipoHorarioService } from 'src/app/service/tipo-horario.service';

@Component({
  selector: 'app-tipo-horario-buscar',
  templateUrl: './tipo-horario-buscar.component.html',
  styleUrls: ['./tipo-horario-buscar.component.css']
})

export class TipoHorarioBuscarComponent implements OnInit {
  textoBuscar: string = "";

  constructor(private tipohorarioService : TipoHorarioService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: TipoHorario[] = [];
    this.tipohorarioService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreTipoHorario.toUpperCase().includes(e.target.value.toUpperCase())||element.descripcionTipoHorario.toUpperCase().includes(e.target.value.toUpperCase())) {
          array.push(data[index]);
        }
      });
      this.tipohorarioService.setLista(array);
    })
  }
}
