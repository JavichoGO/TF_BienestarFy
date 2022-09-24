import { TipoSuscripcion } from './../../../model/tipo-suscripcion';
import { Component, OnInit } from '@angular/core';
import { TipoSuscripcionService } from 'src/app/service/tipo-suscripcion.service';

@Component({
  selector: 'app-tipo-suscripcion-buscar',
  templateUrl: './tipo-suscripcion-buscar.component.html',
  styleUrls: ['./tipo-suscripcion-buscar.component.css']
})
export class TipoSuscripcionBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private tiposuscripcionService: TipoSuscripcionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: TipoSuscripcion[] = [];
    this.tiposuscripcionService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreTipoSuscripcion.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      
      this.tiposuscripcionService.setLista(array);
    })
  }

}
