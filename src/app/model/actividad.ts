import { Usuario } from './usuario';
import { TipoActividad } from "./tipo-actividad";

export class Actividad{
  idActividad:number = 0;
  nombreActividad:string="";
  descripcionActividad:string="";
  duracionActividad:number=0;
  usuario: Usuario = new Usuario();
  tipoactividad: TipoActividad = new TipoActividad() ;
}
