import { ReservaService } from './../../../service/reserva.service';
import { Reserva } from './../../../model/reserva';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-buscar',
  templateUrl: './reserva-buscar.component.html',
  styleUrls: ['./reserva-buscar.component.css']
})
export class ReservaBuscarComponent implements OnInit {

  textoBuscar: string = "";
  constructor(private reservaService:ReservaService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Reserva[] = [];
    this.reservaService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreReserva.toUpperCase().includes(e.target.value.toUpperCase())||element.fechaReserva.toUpperCase().includes(e.target.value.toUpperCase())) {
          array.push(data[index]);
        }
      });
      this.reservaService.setLista(array);
    })
  }

}