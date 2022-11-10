import { HorarioService } from 'src/app/service/horario.service';
import { Horario } from 'src/app/model/horario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario-buscar',
  templateUrl: './horario-buscar.component.html',
  styleUrls: ['./horario-buscar.component.css']
})
export class HorarioBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private hS:HorarioService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Horario[] = [];
    this.hS.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreHorario.toUpperCase().includes(e.target.value.toUpperCase())||element.usuario.nombreUsuario.toUpperCase().includes(e.target.value.toUpperCase())) {
          array.push(data[index]);
        }
      });
      this.hS.setLista(array);
    })
  }
}