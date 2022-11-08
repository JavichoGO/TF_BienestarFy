import { TipoActividadService } from 'src/app/service/tipo-actividad.service';
import { UsuarioService } from './../../../service/usuario.service';
import { ActividadService } from './../../../service/actividad.service';
import { TipoActividad } from 'src/app/model/tipo-actividad';
import { Usuario } from './../../../model/usuario';
import { Actividad } from './../../../model/actividad';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-creaedita',
  templateUrl: './actividad-creaedita.component.html',
  styleUrls: ['./actividad-creaedita.component.css']
})
export class ActividadCreaeditaComponent implements OnInit {

  actividad: Actividad = new Actividad();
  id:number=0;
  edicion: boolean = false;
  mensaje: string = "";
  mensaje1: string = "";
  listaUsuarios: Usuario[] = [];
  idUsuarioSeleccionado: number = 0;
  listaTipoActividad: TipoActividad[] = [];
  idTipoActividadSeleccionado: number = 0;

  constructor(private aS: ActividadService,
    private route: ActivatedRoute,
    private router: Router,
    private uS: UsuarioService,
    private taS:TipoActividadService) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
      this.uS.listar().subscribe(data => { this.listaUsuarios = data });
      this.taS.listar().subscribe(data => { this.listaTipoActividad = data });
    }

    aceptar() {
      if (this.actividad.nombreActividad.length > 0 &&
        this.idUsuarioSeleccionado > 0 && this.idTipoActividadSeleccionado > 0) {
        let p = new Usuario();
        p.idUsuario = this.idUsuarioSeleccionado;
        this.actividad.usuario = p;

        let a = new TipoActividad();
        a.idTipoActividad = this.idTipoActividadSeleccionado;
        this.actividad.tipoactividad = a;

        if (this.edicion) {
          this.aS.modificar(this.actividad).subscribe(() => {
            this.aS.listar().subscribe(data => {
              this.aS.setLista(data);
            });
          });

        } else {
          this.aS.insertar(this.actividad).subscribe(() => {
            this.aS.listar().subscribe(data => {
              this.aS.setLista(data);
            });
          }, err => {
            //this.mensaje=err
            console.log(err);
          });
        }
        this.router.navigate(['actividad']);

      }
      else {
        this.mensaje1 = "Complete los valores requeridos";
      }
    }



    init() {
      if (this.edicion) {
        this.aS.listarId(this.id).subscribe(data => {
          this.actividad = data
          console.log(data);
          this.idTipoActividadSeleccionado = data.tipoactividad.idTipoActividad;
          this.idUsuarioSeleccionado = data.usuario.idUsuario;
        });

      }
      }

}
