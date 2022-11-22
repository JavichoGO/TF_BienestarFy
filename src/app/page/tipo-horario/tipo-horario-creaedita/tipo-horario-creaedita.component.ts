import { TipoHorario } from './../../../model/tipo-horario';
import { TipoHorarioService } from './../../../service/tipo-horario.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-tipo-horario-creaedita',
  templateUrl: './tipo-horario-creaedita.component.html',
  styleUrls: ['./tipo-horario-creaedita.component.css']
})
export class TipoHorarioCreaeditaComponent implements OnInit {
  tipohorario: TipoHorario = new TipoHorario();
  mensaje: string = "";
  edicion: boolean = false;
  idTipoHorario: number = 0;
  constructor(private tipohorarioService: TipoHorarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idTipoHorario = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.tipohorario.nombreTipoHorario.length > 0 && this.tipohorario.descripcionTipoHorario.length > 0) {
      if (this.edicion) {
        this.tipohorarioService.modificar(this.tipohorario).subscribe(data => {
          this.tipohorarioService.listar().subscribe(data => {
            this.tipohorarioService.setLista(data);
          })
        })
      } else {
        this.tipohorarioService.insertar(this.tipohorario).subscribe(data => {
          this.tipohorarioService.listar().subscribe(data => {
            this.tipohorarioService.setLista(data);
          })
        })
      }
      this.router.navigate(['tipohorario']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.tipohorarioService.listarId(this.idTipoHorario).subscribe(data => {
        this.tipohorario = data;
      })
    }
  }


}
