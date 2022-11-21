import { Component, OnInit } from '@angular/core';
import { SuscripcionService } from 'src/app/service/suscripcion.service';
import { TipoSuscripcionService } from 'src/app/service/tipo-suscripcion.service';
import { TipoSuscripcion } from 'src/app/model/tipo-suscripcion';
import { Usuario } from 'src/app/model/usuario';
import { Suscripcion } from 'src/app/model/suscripcion';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as moment from 'moment';

@Component({
  selector: 'app-suscripcion-creaedita',
  templateUrl: './suscripcion-creaedita.component.html',
  styleUrls: ['./suscripcion-creaedita.component.css']
})
export class SuscripcionCreaeditaComponent implements OnInit {

  suscripcion: Suscripcion = new Suscripcion();
  tipoSuscripcion: TipoSuscripcion = new TipoSuscripcion();
  id:number=0;
  edicion: boolean = false;
  mensaje: string = "";
  mensaje1: string = "";
  fechainicio: Date = new Date;
  fechafin: Date = new Date;


  minFecha: Date = moment().add(0, 'days').toDate();
  maxFecha: Date = moment().add(2, 'years').toDate();
  listaTipoSuscripcion: TipoSuscripcion[] = [];
  idTipoSuscripcionSeleccionado: number = 0;

  constructor(private sS: SuscripcionService,
    private route: ActivatedRoute,
    private router: Router,
    private tsS:TipoSuscripcionService) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
      
      this.tsS.listar().subscribe(data => { this.listaTipoSuscripcion = data });
    }
    aceptar() {
      if (this.suscripcion.nombreSuscripcion.length > 0 ) {
        let p = new TipoSuscripcion();
        p.idTipoSuscripcion = this.idTipoSuscripcionSeleccionado;
       
        this.suscripcion.tipoSuscripcion = p;

        this.suscripcion.fechaInicio = moment (this.fechainicio).format('DD-MM-YYYY');
        this.suscripcion.fechaFin = moment (this.fechafin).format('DD-MM-YYYY');
        

        if (this.edicion) {
          this.sS.modificar(this.suscripcion).subscribe(() => {
            this.sS.listar().subscribe(data => {
              this.sS.setLista(data);
            });
          });

        } else {
          this.sS.insertar(this.suscripcion).subscribe(() => {
            this.sS.listar().subscribe(data => {
              this.sS.setLista(data);
            });
          }, err => {
            //this.mensaje=err
            console.log(err);
          });
        }
        this.router.navigate(['suscripcion']);

      }
      else {
        this.mensaje1 = "Complete los valores requeridos";
      }
    }



    init() {
      if (this.edicion) {
        this.sS.listarId(this.id).subscribe(data => {
          this.suscripcion = data
          console.log(data);
          this.idTipoSuscripcionSeleccionado = data.tipoSuscripcion.idTipoSuscripcion;
          
        });

      }
      }

}
