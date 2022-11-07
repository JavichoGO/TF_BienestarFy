import { Usuario } from './usuario';
import { TipoActividad } from "./tipo-actividad";

export class Actividad{
  idActividad:number=0;
  nombreActividad:string="";
  duracionActividad:number=0;
  descripcionActividad:string="";
  usuario:Usuario=new Usuario();
  tipoActividad:TipoActividad = new TipoActividad() ;
}
