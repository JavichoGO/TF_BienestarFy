import { DetalleReservaService } from './../../../service/detalle-reserva.service';
import { DetalleReserva } from './../../../model/detalle-reserva';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-reserva-buscar',
  templateUrl: './detalle-reserva-buscar.component.html',
  styleUrls: ['./detalle-reserva-buscar.component.css']
})
export class DetalleReservaBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private drS:DetalleReservaService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: DetalleReserva[] = [];
    this.drS.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.descripcionDetalleReserva.toUpperCase().includes(e.target.value.toUpperCase())) {
          array.push(data[index]);
        }
      });
      this.drS.setLista(array);
    })
  }
}