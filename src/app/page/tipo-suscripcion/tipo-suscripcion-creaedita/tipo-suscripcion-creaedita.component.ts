import { TipoSuscripcionService } from './../../../service/tipo-suscripcion.service';
import { TipoSuscripcion } from 'src/app/model/tipo-suscripcion';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-tipo-suscripcion-creaedita',
  templateUrl: './tipo-suscripcion-creaedita.component.html',
  styleUrls: ['./tipo-suscripcion-creaedita.component.css']
})
export class TipoSuscripcionCreaeditaComponent implements OnInit {
  tipoSuscripcion: TipoSuscripcion = new TipoSuscripcion();
  mensaje: string = "";
  edicion: boolean = false;
  idTipoSuscripcion: number = 0;
  constructor(private tipoSuscripcionService: TipoSuscripcionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idTipoSuscripcion = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.tipoSuscripcion.nombreTipoSuscripcion.length > 0 && this.tipoSuscripcion.descripcionTipoSuscripcion.length >0) {
      if (this.edicion) {
        this.tipoSuscripcionService.modificar(this.tipoSuscripcion).subscribe(data => {
          this.tipoSuscripcionService.listar().subscribe(data => {
            this.tipoSuscripcionService.setLista(data);
          })
        })
      } else {
        this.tipoSuscripcionService.insertar(this.tipoSuscripcion).subscribe(data => {
          this.tipoSuscripcionService.listar().subscribe(data => {
            this.tipoSuscripcionService.setLista(data);
          })
        })
      }
      this.router.navigate(['tiposuscripcion']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.tipoSuscripcionService.listarId(this.idTipoSuscripcion).subscribe(data => {
        this.tipoSuscripcion = data;
      })
    }
  }


}
