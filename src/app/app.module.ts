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
import { UsuarioDialogoComponent } from './page/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {UsuarioCreaeditaComponent } from './page/usuario/usuario-creaedita/usuario-creaedita.component';
import { HorarioCreaeditaComponent } from './page/horario/horario-creaedita/horario-creaedita.component';
import { HorarioBuscarComponent } from './page/horario/horario-buscar/horario-buscar.component';
import { HorarioDialogoComponent } from './page/horario/horario-listar/horario-dialogo/horario-dialogo.component';
import { DetalleReservaBuscarComponent } from './page/detalle-reserva/detalle-reserva-buscar/detalle-reserva-buscar.component';
import { DetalleReservaCreaeditaComponent } from './page/detalle-reserva/detalle-reserva-creaedita/detalle-reserva-creaedita.component';
import { DetalleReservaDialogoComponent } from './page/detalle-reserva/detalle-reserva-listar/detalle-reserva-dialogo/detalle-reserva-dialogo.component';
import { ActividadBuscarComponent } from './page/actividad/actividad-buscar/actividad-buscar.component';
import { ActividadCreaeditaComponent } from './page/actividad/actividad-creaedita/actividad-creaedita.component';
import { ActividadDialogoComponent } from './page/actividad/actividad-listar/actividad-dialogo/actividad-dialogo.component';
import { UsuarioBuscarComponent } from './page/usuario/usuario-buscar/usuario-buscar.component';
import { SuscripcionBuscarComponent } from './page/suscripcion/suscripcion-buscar/suscripcion-buscar.component';
import { SuscripcionCreaeditaComponent } from './page/suscripcion/suscripcion-creaedita/suscripcion-creaedita.component';
import { SuscripcionDialogoComponent } from './page/suscripcion/suscripcion-listar/suscripcion-dialogo/suscripcion-dialogo.component';
import { ReservaBuscarComponent } from './page/reserva/reserva-buscar/reserva-buscar.component';
import { ReservaCreaeditaComponent } from './page/reserva/reserva-creaedita/reserva-creaedita.component';
import {MatMenuModule} from '@angular/material/menu'
import { DateAdapter, ErrorStateMatcher, MatNativeDateModule, MAT_DATE_LOCALE, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DatePipe } from '@angular/common';



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
    DetalleReservaListarComponent,
    UsuarioDialogoComponent,
    UsuarioBuscarComponent,
    UsuarioCreaeditaComponent,
    HorarioCreaeditaComponent,
    HorarioBuscarComponent,
    HorarioDialogoComponent,
    DetalleReservaBuscarComponent,
    DetalleReservaCreaeditaComponent,
    DetalleReservaDialogoComponent,
    ActividadBuscarComponent,
    ActividadCreaeditaComponent,
    ActividadDialogoComponent,
    SuscripcionBuscarComponent,
    SuscripcionCreaeditaComponent,
    SuscripcionDialogoComponent,
    ReservaBuscarComponent,
    ReservaCreaeditaComponent,
  
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
    MatDatepickerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule
  
  ],
  providers: [DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DateAdapter, useClass: CustomDateAdapter,}  
    
  ],
  bootstrap: [AppComponent],
  exports: [
    MatFormFieldModule
    ] 
})
export class AppModule { }
