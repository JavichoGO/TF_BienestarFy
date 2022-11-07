import { HorarioService } from 'src/app/service/horario.service';
import { Horario } from 'src/app/model/horario';
import { TipoHorarioService } from 'src/app/service/tipo-horario.service';
import { TipoHorario } from 'src/app/model/tipo-horario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-horario-creaedita',
  templateUrl: './horario-creaedita.component.html',
  styleUrls: ['./horario-creaedita.component.css']
})
export class HorarioCreaeditaComponent implements OnInit {

  horario: Horario = new Horario();
  idHorario: number = 0;
  edicion: boolean = false;
  mensaje: string = "";
  mensaje1: string = "";
  listaUsuarios: Usuario[] = [];
  listaTipoHorarios: TipoHorario[] = [];
 

  idUsuarioSeleccionado: number = 0;
  idTipoHorarioSeleccionado: number = 0;




  constructor(private hS: HorarioService,
    private route: ActivatedRoute,
    private router: Router,
    private uS: UsuarioService,
    private thS: TipoHorarioService) { }



  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idHorario = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.uS.listar().subscribe(data => { this.listaUsuarios = data });
    this.thS.listar().subscribe(data => { this.listaTipoHorarios = data })

  }

  aceptar() {
    if (this.horario.nombreHorario.length > 0 && this.idUsuarioSeleccionado > 0 && this.idTipoHorarioSeleccionado > 0 ) {
      let p = new Usuario();
      p.idUsuario = this.idUsuarioSeleccionado;
      this.horario.usuario = p;

      let q = new TipoHorario();
      q.idTipoHorario = this.idTipoHorarioSeleccionado;
      this.horario.tipoHorario = q;


      if (this.edicion) {
        this.hS.modificar(this.horario).subscribe(() => {
          this.hS.listar().subscribe(data => {
            this.hS.setLista(data);
          });
        });

      } else {
        this.hS.insertar(this.horario).subscribe(() => {
          this.hS.listar().subscribe(data => {
            this.hS.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['horario']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }



  init() {
    if (this.edicion) {
      this.hS.listarId(this.idHorario).subscribe(data => {
        this.horario = data
        console.log(data);
        this.idUsuarioSeleccionado = data.usuario.idUsuario
        this.idTipoHorarioSeleccionado = data.tipoHorario.idTipoHorario
      });

    }
  }
}
