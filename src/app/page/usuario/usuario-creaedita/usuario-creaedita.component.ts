import { SuscripcionService } from './../../../service/suscripcion.service';
import { CategoriaService } from './../../../service/categoria.service';
import { Categoria } from './../../../model/categoria';
import { Suscripcion } from './../../../model/suscripcion';
import { Usuario } from './../../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { RoleService } from 'src/app/service/role.service';
import { Role } from 'src/app/model/role';

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit {

  usuario: Usuario = new Usuario();
  idUsuario: number = 0;
  edicion: boolean = false;
  mensaje: string = "";
  mensaje1: string = "";
  listaRoles: Role[] = [];
  listaCategorias: Categoria[] = [];
  listaSuscripciones: Suscripcion[] = [];

  idRoleSeleccionado: number = 0;
  idCategoriaSeleccionado: number = 0;
  idSuscripcionSeleccionado: number = 0;



  constructor(private uS: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private rS: RoleService,
    private cS: CategoriaService,
    private sS: SuscripcionService) { }



  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idUsuario = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.rS.listar().subscribe(data => { this.listaRoles = data });
    this.cS.listar().subscribe(data => { this.listaCategorias = data });
    this.sS.listar().subscribe(data => { this.listaSuscripciones = data })
  }

  aceptar() {
    if (this.usuario.nombreUsuario.length > 0 && this.idRoleSeleccionado > 0 && this.idCategoriaSeleccionado > 0 && this.idSuscripcionSeleccionado > 0) {
      let p = new Role();
      p.idRole = this.idRoleSeleccionado;
      this.usuario.role = p;

      let q = new Categoria();
      q.idCategoria = this.idCategoriaSeleccionado;
      this.usuario.categoria = q;

      let r = new Suscripcion();
      r.idSuscripcion = this.idSuscripcionSeleccionado;
      this.usuario.suscripcion = r;

      if (this.edicion) {
        this.uS.modificar(this.usuario).subscribe(() => {
          this.uS.listar().subscribe(data => {
            this.uS.setLista(data);
          });
        });

      } else {
        this.uS.insertar(this.usuario).subscribe(() => {
          this.uS.listar().subscribe(data => {
            this.uS.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['usuario']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }



  init() {
    if (this.edicion) {
      this.uS.listarId(this.idUsuario).subscribe(data => {
        this.usuario = data
        console.log(data);
        this.idRoleSeleccionado = data.role.idRole
        this.idCategoriaSeleccionado = data.categoria.idCategoria
        this.idSuscripcionSeleccionado = data.suscripcion.idSuscripcion
      });

    }
  }
}
