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



const routes: Routes = [
  {
    path: 'tipohorario', component: TipoHorarioComponent, children:[
      { path: 'nuevo', component: TipoHorarioCreaeditaComponent },
      { path: 'edicion/:id', component: TipoHorarioCreaeditaComponent }

    ]
  },{
    path:'horario',component:HorarioComponent,children:[
  
    ]
  },
  {
    path:'usuario',component:UsuarioComponent,children:[
  
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
      { path: 'edicion/:id', component: TipoSuscripcionCreaeditaComponent }
    ]
  },
  {
    path:'suscripcion',component:SuscripcionComponent,children:[
  
    ]
  },
  {
    path:'actividad',component:ActividadComponent,children:[
  
    ]
  },
  {
    path:'tipoactividad',component:TipoActividadComponent,children:[
      { path: 'nuevo', component: TipoActividadCreaEditaComponent },
      { path: 'edicion/:id', component: TipoActividadCreaEditaComponent }
    
    ]
  },
  {
    path:'reserva',component:ReservaComponent,children:[
  
    ]
  },
  {
    path:'categoria',component:CategoriaComponent,children:[
      { path: 'nuevo', component: CategoriaCreaEditaComponent },
      { path: 'edicion/:id', component: CategoriaCreaEditaComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
