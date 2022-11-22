import { CategoriaUsuarioComponent } from './page/categoria/categoria-usuario/categoria-usuario.component';
import { TipoActividadContadorComponent } from './page/tipo-actividad/tipo-actividad-contador/tipo-actividad-contador.component';
import { TaDetalleReserva } from './model/taDetalleReserva';
import { ReservaCreaeditaComponent } from './page/reserva/reserva-creaedita/reserva-creaedita.component';
import { DetalleReservaCreaeditaComponent } from './page/detalle-reserva/detalle-reserva-creaedita/detalle-reserva-creaedita.component';
import { DetalleReservaComponent } from './page/detalle-reserva/detalle-reserva.component';
import { CategoriaCreaEditaComponent } from './page/categoria/categoria-creaedita/categoria-creaedita.component';
import { TipoSuscripcionCreaeditaComponent } from './page/tipo-suscripcion/tipo-suscripcion-creaedita/tipo-suscripcion-creaedita.component';
import { RoleCreaeditaComponent } from './page/role/role-creaedita/role-creaedita.component';
import { TipoActividadCreaEditaComponent } from './page/tipo-actividad/tipo-actividad-creaedita/tipo-actividad-creaedita.component';
import { TipoHorarioCreaeditaComponent } from './page/tipo-horario/tipo-horario-creaedita/tipo-horario-creaedita.component';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { TipoActividadComponent } from './page/tipo-actividad/tipo-actividad.component';
import { ActividadComponent } from './page/actividad/actividad.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { TipoSuscripcionComponent } from './page/tipo-suscripcion/tipo-suscripcion.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { RoleComponent } from './page/role/role.component';
import { TipoHorarioComponent } from './page/tipo-horario/tipo-horario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorarioComponent } from './page/horario/horario.component';
import { UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';
import { ActividadCreaeditaComponent } from './page/actividad/actividad-creaedita/actividad-creaedita.component';
import { HorarioCreaeditaComponent } from './page/horario/horario-creaedita/horario-creaedita.component';
import { SuscripcionCreaeditaComponent } from './page/suscripcion/suscripcion-creaedita/suscripcion-creaedita.component';
import { UsuarioCantidadComponent } from './page/usuario/usuario-cantidad/usuario-cantidad.component';
import { ActividadCantidadComponent } from './page/actividad/actividad-cantidad/actividad-cantidad.component';
import { ReservaUsuarioComponent } from './page/reserva/reserva-usuario/reserva-usuario.component';
import { TipoSuscripcionDescuentoComponent } from './page/tipo-suscripcion/tipo-suscripcion-descuento/tipo-suscripcion-descuento.component';
import { HorarioCantidadComponent } from './page/horario/horario-cantidad/horario-cantidad.component';
import { ActividadDuracionComponent } from './page/actividad/actividad-duracion/actividad-duracion.component';



const routes: Routes = [
  {
    path: 'tipohorario', component: TipoHorarioComponent, children:[
      { path: 'nuevo', component: TipoHorarioCreaeditaComponent },
      { path: 'edicion/:id', component: TipoHorarioCreaeditaComponent }

    ]
  },{
    path:'horario',component:HorarioComponent,children:[
      { path: 'nuevo', component: HorarioCreaeditaComponent },
      { path: 'edicion/:id', component: HorarioCreaeditaComponent },
      { path: 'usuario', component: HorarioCantidadComponent }
  
    ]
  },
  {
    path:'usuario',component:UsuarioComponent,children:[
      { path: 'nuevo', component: UsuarioCreaeditaComponent },
      { path: 'edicion/:id', component: UsuarioCreaeditaComponent },
      { path: 'cantidadusuario', component: UsuarioCantidadComponent }
    ]
  },
  {
    path:'role',component:RoleComponent,children:[
      { path: 'nuevo', component: RoleCreaeditaComponent },
      { path: 'edicion/:id', component: RoleCreaeditaComponent }
    ]
  },
  {
    path:'tiposuscripcion',component:TipoSuscripcionComponent,children:[
      { path: 'nuevo', component: TipoSuscripcionCreaeditaComponent },
      { path: 'edicion/:id', component: TipoSuscripcionCreaeditaComponent },
      { path: 'descuento', component: TipoSuscripcionDescuentoComponent }
    ]
  },
  {
    path:'suscripcion',component:SuscripcionComponent,children:[
      {path: 'nuevo', component:SuscripcionCreaeditaComponent},
      {path: 'edicion/:id', component:SuscripcionCreaeditaComponent},
    ]
  },
  {
    path:'actividad',component:ActividadComponent,children:[
      {path: 'nuevo', component:ActividadCreaeditaComponent},
      {path: 'edicion/:id',component:ActividadCreaeditaComponent},
      {path: 'cantidadactividad',component:ActividadCantidadComponent},
      {path: 'duracion',component:ActividadDuracionComponent}
      ]
  },
  {
    path:'tipoactividad',component:TipoActividadComponent,children:[
      { path: 'nuevo', component: TipoActividadCreaEditaComponent },
      { path: 'edicion/:id', component: TipoActividadCreaEditaComponent },
      { path: 'cantidadtipoactividad', component: TipoActividadContadorComponent }

    ]
  },
  {
    path:'reserva',component:ReservaComponent,children:[
      { path: 'nuevo', component: ReservaCreaeditaComponent },
      { path: 'edicion/:id', component: ReservaCreaeditaComponent },
      {path: 'usuario',component: ReservaUsuarioComponent}
    ]
  },
  {
    path:'categoria',component:CategoriaComponent,children:[
      { path: 'nuevo', component: CategoriaCreaEditaComponent },
      { path: 'edicion/:id', component: CategoriaCreaEditaComponent },
      { path: 'contadorUsuario', component: CategoriaUsuarioComponent }
    ]
  },
  {
    path:'detallereserva',component:DetalleReservaComponent,children:[
      { path: 'nuevo', component: DetalleReservaCreaeditaComponent },
      { path: 'edicion/:id', component: DetalleReservaCreaeditaComponent },
      {path: 'usuario', component: ReservaUsuarioComponent }
    ]
  },
  {
    path:'',component:UsuarioComponent,children:[

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
