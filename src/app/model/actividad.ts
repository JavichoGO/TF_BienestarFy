import { Usuario } from './usuario';
import { TipoActividad } from "./tipo-actividad";

export class Actividad{
  id:number=0;
  nombreActvidad:string="";
  descripcionActividad:string="";
  usuario:Usuario=new Usuario();
  tipoActividad:TipoActividad = new TipoActividad() ;
}
