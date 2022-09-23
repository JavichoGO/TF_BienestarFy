import { RoleService } from 'src/app/service/role.service';
import { Role } from 'src/app/model/role';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-buscar',
  templateUrl: './role-buscar.component.html',
  styleUrls: ['./role-buscar.component.css']
})
export class RoleBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private roleService:RoleService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Role[] = [];
    this.roleService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreRole.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.roleService.setLista(array);
    })
  }
}
