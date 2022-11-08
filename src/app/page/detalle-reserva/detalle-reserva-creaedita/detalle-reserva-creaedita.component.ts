import { ActividadService } from './../../../service/actividad.service';
import { ReservaService } from './../../../service/reserva.service';
import { Actividad } from './../../../model/actividad';
import { Reserva } from './../../../model/reserva';
import { DetalleReserva } from './../../../model/detalle-reserva';
import { DetalleReservaService } from './../../../service/detalle-reserva.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-reserva-creaedita',
  templateUrl: './detalle-reserva-creaedita.component.html',
  styleUrls: ['./detalle-reserva-creaedita.component.css']
})
export class DetalleReservaCreaeditaComponent implements OnInit {

  detalleReserva: DetalleReserva= new DetalleReserva();
  idDetalleReserva: number = 0;
  edicion: boolean = false;
  mensaje: string = "";
  mensaje1: string = "";
  listaReservas: Reserva[] = [];
  listaActividades: Actividad[] = [];
  idReservaSeleccionado: number = 0;
  idActividadSeleccionado: number = 0;

  constructor(private drS: DetalleReservaService, 
    private router: Router,
    private route: ActivatedRoute, 
    private rS: ReservaService, 
    private aS:ActividadService) { }


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idDetalleReserva = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.rS.listar().subscribe(data => { this.listaReservas = data });
    this.aS.listar().subscribe(data => { this.listaActividades = data });
  }
  aceptar(): void {
    if (this.detalleReserva.descripcionDetalleReserva.length > 0 ) {
      let p = new Reserva();
      p.idReserva = this.idReservaSeleccionado;
      this.detalleReserva.reserva = p;

      let q = new Actividad();
      q.idActividad = this.idActividadSeleccionado;
      this.detalleReserva.actividad = q;

      if (this.edicion) {
        this.drS.modificar(this.detalleReserva).subscribe(data => {
          this.drS.listar().subscribe(data => {
            this.drS.setLista(data);
          })
        })
      } else {

        this.drS.insertar(this.detalleReserva).subscribe(data => {
          this.drS.listar().subscribe(data => {
            this.drS.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['detallereserva']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.drS.listarId(this.idDetalleReserva).subscribe(data => {
        this.detalleReserva = data
        console.log(data);
        this.idReservaSeleccionado = data.reserva.idReserva;
        this.idActividadSeleccionado = data.actividad.idActividad;
      })
    }

  }

}
