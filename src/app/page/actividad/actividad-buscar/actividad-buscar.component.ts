import { ActividadService } from './../../../service/actividad.service';
import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/model/actividad';


@Component({
  selector: 'app-actividad-buscar',
  templateUrl: './actividad-buscar.component.html',
  styleUrls: ['./actividad-buscar.component.css']
})
export class ActividadBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private actividadService:ActividadService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Actividad[] = [];
    this.actividadService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreActividad.toUpperCase().includes(e.target.value.toUpperCase())||element.descripcionActividad.toUpperCase().includes(e.target.value.toUpperCase())) {
          array.push(data[index]);
        }
      });
      this.actividadService.setLista(array);
    })
  }

}
