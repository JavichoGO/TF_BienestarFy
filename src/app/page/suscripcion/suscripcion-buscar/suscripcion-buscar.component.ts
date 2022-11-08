import { Suscripcion } from './../../../model/suscripcion';
import { SuscripcionService } from './../../../service/suscripcion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscripcion-buscar',
  templateUrl: './suscripcion-buscar.component.html',
  styleUrls: ['./suscripcion-buscar.component.css']
})
export class SuscripcionBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private suscripcionservice:SuscripcionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Suscripcion[] = [];
    this.suscripcionservice.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreSuscripcion.toUpperCase().includes(e.target.value.toUpperCase())) {
          array.push(data[index]);
        }
      });
      this.suscripcionservice.setLista(array);
    })
  }

}
