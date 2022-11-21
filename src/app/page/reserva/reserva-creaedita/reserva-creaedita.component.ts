
import { HorarioService } from 'src/app/service/horario.service';
import { Reserva } from './../../../model/reserva';
import { UsuarioService } from './../../../service/usuario.service';
import { Usuario } from './../../../model/usuario';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/model/horario';
import { ReservaService } from 'src/app/service/reserva.service';
import * as moment from 'moment';


@Component({
  selector: 'app-reserva-creaedita',
  templateUrl: './reserva-creaedita.component.html',
  styleUrls: ['./reserva-creaedita.component.css']
})
export class ReservaCreaeditaComponent implements OnInit {

reserva: Reserva= new Reserva();
idReserva:number=0;
edicion: boolean = false;
mensaje: string = "";
mensaje1: string = "";
listaUsuarios: Usuario[] = [];
listaHorarios: Horario[] = [];
idHorarioSeleccionado: number = 0;
idUsuarioSeleccionado: number = 0;
currentDate = new Date();
fecha: Date = moment().add(0, 'days').toDate();
maxFecha: Date = moment().add(0, 'days').toDate();
minFecha: Date = moment().add(0, 'days').toDate();

constructor(private rS: ReservaService,
  private route: ActivatedRoute,
  private router: Router,
  private uS: UsuarioService,
  private hS:HorarioService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idReserva = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.uS.listar().subscribe(data => { this.listaUsuarios = data });
    this.hS.listar().subscribe(data => { this.listaHorarios = data });
 
    
  }

  aceptar() {
    if (this.reserva.nombreReserva.length > 0 &&
      this.idUsuarioSeleccionado > 0 && this.idHorarioSeleccionado > 0) {
      let p = new Usuario();
      p.idUsuario = this.idUsuarioSeleccionado;
      this.reserva.usuario = p;

      let a = new Horario();
      a.idHorario = this.idHorarioSeleccionado;
      this.reserva.horario = a;

      this.reserva.fechaReserva = moment(this.fecha).format('DD-MM-YYYY : HH:mm');
      
      

      if (this.edicion) {
        this.rS.modificar(this.reserva).subscribe(() => {
          this.rS.listar().subscribe(data => {
            this.rS.setLista(data);
          });
        });

      } else {
        this.rS.insertar(this.reserva).subscribe(() => {
          this.rS.listar().subscribe(data => {
            this.rS.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['reserva']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }



  init() {
    if (this.edicion) {
      this.rS.listarId(this.idReserva).subscribe(data => {
        this.reserva = data
        console.log(data);
        this.idHorarioSeleccionado = data.horario.idHorario;
        this.idUsuarioSeleccionado = data.usuario.idUsuario;
      });

    }
    }

}
