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
  tiposuscripcion: TipoSuscripcion = new TipoSuscripcion();
  mensaje: string = "";
  edicion: boolean = false;
  idTipoSuscripcion: number = 0;
  constructor(private tiposuscripcionService: TipoSuscripcionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.idTipoSuscripcion = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.tiposuscripcion.nombreTipoSuscripcion.length > 0 && this.tiposuscripcion.descripcionTipoSuscripcion.length >0) {
      if (this.edicion) {
        this.tiposuscripcionService.modificar(this.tiposuscripcion).subscribe(data => {
          this.tiposuscripcionService.listar().subscribe(data => {
            this.tiposuscripcionService.setLista(data);
          })
        })
      } else {
        this.tiposuscripcionService.insertar(this.tiposuscripcion).subscribe(data => {
          this.tiposuscripcionService.listar().subscribe(data => {
            this.tiposuscripcionService.setLista(data);
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
      this.tiposuscripcionService.listarId(this.idTipoSuscripcion).subscribe(data => {
        this.tiposuscripcion = data;
      })
    }
  }


}
