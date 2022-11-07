import { CategoriaCreaEditaComponent } from './page/categoria/categoria-creaedita/categoria-creaedita.component';
import { TipoActividadListarComponent } from './page/tipo-actividad/tipo-actividad-listar/tipo-actividad-listar.component';
import { TipoSuscripcionComponent } from './page/tipo-suscripcion/tipo-suscripcion.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoHorarioComponent } from './page/tipo-horario/tipo-horario.component';
import { HorarioComponent } from './page/horario/horario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { TipoHorarioListarComponent } from './page/tipo-horario/tipo-horario-listar/tipo-horario-listar.component';
import { HorarioListarComponent } from './page/horario/horario-listar/horario-listar.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { RoleComponent } from './page/role/role.component';
import { RoleListarComponent } from './page/role/role-listar/role-listar.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionListarComponent } from './page/suscripcion/suscripcion-listar/suscripcion-listar.component';
import { TipoSuscripcionListarComponent } from './page/tipo-suscripcion/tipo-suscripcion-listar/tipo-suscripcion-listar.component';
import { ActividadComponent } from './page/actividad/actividad.component';
import { TipoActividadComponent } from './page/tipo-actividad/tipo-actividad.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { CategoriaListarComponent } from './page/categoria/categoria-listar/categoria-listar.component';
import { ReservaListarComponent } from './page/reserva/reserva-listar/reserva-listar.component';
import { ActividadListarComponent } from './page/actividad/actividad-listar/actividad-listar.component';
import { TipoHorarioCreaeditaComponent } from './page/tipo-horario/tipo-horario-creaedita/tipo-horario-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TipoActividadCreaEditaComponent } from './page/tipo-actividad/tipo-actividad-creaedita/tipo-actividad-creaedita.component';
import { RoleCreaeditaComponent } from './page/role/role-creaedita/role-creaedita.component';
import { TipoSuscripcionCreaeditaComponent } from './page/tipo-suscripcion/tipo-suscripcion-creaedita/tipo-suscripcion-creaedita.component';
import { CategoriaBuscarComponent } from './page/categoria/categoria-buscar/categoria-buscar.component';
import { CategoriaDialogoComponent } from './page/categoria/categoria-listar/categoria-dialogo/categoria-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TipoActividadBuscarComponent } from './page/tipo-actividad/tipo-actividad-buscar/tipo-actividad-buscar.component';
import { TipoActividadDialogoComponent } from './page/tipo-actividad/tipo-actividad-listar/tipo-actividad-dialogo/tipo-actividad-dialogo.component';
import { TipoSuscripcionDialogoComponent } from './page/tipo-suscripcion/tipo-suscripcion-listar/tipo-suscripcion-dialogo/tipo-suscripcion-dialogo.component';
import { TipoSuscripcionBuscarComponent } from './page/tipo-suscripcion/tipo-suscripcion-buscar/tipo-suscripcion-buscar.component';
import { TipoHorarioBuscarComponent } from './page/tipo-horario/tipo-horario-buscar/tipo-horario-buscar.component';
import { TipoHorarioDialogoComponent } from './page/tipo-horario/tipo-horario-listar/tipo-horario-dialogo/tipo-horario-dialogo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RoleBuscarComponent } from './page/role/role-buscar/role-buscar.component';
import { RoleDialogoComponent } from './page/role/role-listar/role-dialogo/role-dialogo.component';
import { DetalleReservaComponent } from './page/detalle-reserva/detalle-reserva.component';
import { DetalleReservaListarComponent } from './page/detalle-reserva/detalle-reserva-listar/detalle-reserva-listar.component';



@NgModule({
  declarations: [
    AppComponent,
    TipoHorarioComponent,
    HorarioComponent,
    TipoHorarioListarComponent,
    HorarioListarComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    RoleComponent,
    RoleListarComponent,
    SuscripcionComponent,
    TipoSuscripcionComponent,
    SuscripcionListarComponent,
    TipoSuscripcionListarComponent,
    ActividadComponent,
    TipoActividadComponent,
    ReservaComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    ReservaListarComponent,
    ActividadListarComponent,
    TipoActividadListarComponent,
    TipoHorarioCreaeditaComponent,
    TipoActividadCreaEditaComponent,
    RoleCreaeditaComponent,
    TipoSuscripcionCreaeditaComponent,
    CategoriaCreaEditaComponent,
    CategoriaBuscarComponent,
    CategoriaDialogoComponent,
    TipoActividadBuscarComponent,
    TipoActividadDialogoComponent,
    TipoSuscripcionDialogoComponent,
    TipoSuscripcionBuscarComponent,
    TipoHorarioBuscarComponent,
    TipoHorarioDialogoComponent,
    RoleBuscarComponent,
    RoleDialogoComponent,
    DetalleReservaComponent,
    DetalleReservaListarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
