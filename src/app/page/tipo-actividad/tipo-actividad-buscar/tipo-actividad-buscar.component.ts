import { Component, OnInit } from '@angular/core';
import { TipoActividad } from 'src/app/model/tipo-actividad';
import { TipoActividadService } from 'src/app/service/tipo-actividad.service';

@Component({
  selector: 'app-tipo-actividad-buscar',
  templateUrl: './tipo-actividad-buscar.component.html',
  styleUrls: ['./tipo-actividad-buscar.component.css']
})

export class TipoActividadBuscarComponent implements OnInit {
  textoBuscar: string = "";

  constructor(private tipoactividadService: TipoActividadService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: TipoActividad[] = [];
    this.tipoactividadService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreTipoActividad.toUpperCase().includes(e.target.value.toUpperCase()) || element.descripcionTipoActividad.toUpperCase().includes(e.target.value.toUpperCase())) {
          array.push(data[index]);
        }
      });
      this.tipoactividadService.setLista(array);
    })
  }
}
