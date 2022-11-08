
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
  id: number = 0;
  edicion: boolean = false;
  mensaje: string = "";
  mensaje1: string = "";
  listaRoles: Role[] = [];
  idRoleSeleccionado: number = 0;




  constructor(private uS: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private rS: RoleService) { }


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.rS.listar().subscribe(data => { this.listaRoles = data });
  }

  aceptar() {
    if (this.usuario.nombreUsuario.length > 0 &&
      this.idRoleSeleccionado > 0) {
      let p = new Role();
      p.idRole = this.idRoleSeleccionado;
      this.usuario.role = p;
  
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
      this.uS.listarId(this.id).subscribe(data => {
        this.usuario = data
        console.log(data);
        this.idRoleSeleccionado = data.role.idRole;
      });

    }
    }
}
