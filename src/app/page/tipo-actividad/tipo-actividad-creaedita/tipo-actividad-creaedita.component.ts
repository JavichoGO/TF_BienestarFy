import { TipoActividad } from './../../../model/tipo-actividad';
import { Component, OnInit } from '@angular/core';
import { TipoActividadService } from 'src/app/service/tipo-actividad.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-tipo-actividad-creaedita',
  templateUrl: './tipo-actividad-creaedita.component.html',
  styleUrls: ['./tipo-actividad-creaedita.component.css']
})
export class TipoActividadCreaEditaComponent implements OnInit {

  tipoactividad: TipoActividad= new TipoActividad();
  mensaje: string= "";
  edicion: boolean= false;
  id:number = 0;

  constructor(private tipoactividadService: TipoActividadService, private router: Router
    ,private route: ActivatedRoute) { 


  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
  }
  aceptar(): void {
    if (this.tipoactividad.nombreTipoActividad.length > 0 && this.tipoactividad.descripcionTipoActividad.length > 0) {
      if (this.edicion) {
        this.tipoactividadService.modificar(this.tipoactividad).subscribe(data => {
          this.tipoactividadService.listar().subscribe(data => {
            this.tipoactividadService.setLista(data);
          })
        })
      } else {

        this.tipoactividadService.insertar(this.tipoactividad).subscribe(data => {
          this.tipoactividadService.listar().subscribe(data => {
            this.tipoactividadService.setLista(data);
          })
        })
      }
      this.router.navigate(['tipoactividad']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.tipoactividadService.listarId(this.id).subscribe(data => {
        this.tipoactividad = data;
      })
    }

  }

}
