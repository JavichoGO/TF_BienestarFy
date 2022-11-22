import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.css']
})
export class UsuarioBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private uS:UsuarioService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Usuario[] = [];
    this.uS.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.nombreUsuario.toUpperCase().includes(e.target.value.toUpperCase())||element.apellidoUsuario.toUpperCase().includes(e.target.value.toUpperCase())) {
          array.push(data[index]);
        }
      });
      this.uS.setLista(array);
    })
  }
}
