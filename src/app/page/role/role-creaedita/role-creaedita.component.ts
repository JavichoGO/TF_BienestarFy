import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/model/role';
import { RoleService } from 'src/app/service/role.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-role-creaedita',
  templateUrl: './role-creaedita.component.html',
  styleUrls: ['./role-creaedita.component.css']
})
export class RoleCreaeditaComponent implements OnInit {

  role: Role = new Role();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private roleService: RoleService, private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.role.nombreRole.length > 0 && this.role.descripcionRole.length > 0) {
      if (this.edicion) {
        this.roleService.modificar(this.role).subscribe(data => {
          this.roleService.listar().subscribe(data => {
            this.roleService.setLista(data);
          })
        })
      } else {

        this.roleService.insertar(this.role).subscribe(data => {
          this.roleService.listar().subscribe(data => {
            this.roleService.setLista(data);
          })
        })
      }
      this.router.navigate(['role']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.roleService.listarId(this.id).subscribe(data => {
        this.role = data;
      })
    }

  }


}
