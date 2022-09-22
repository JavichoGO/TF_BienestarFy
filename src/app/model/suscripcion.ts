import { TipoSuscripcion } from "./tipo-suscripcion";
export class Suscripcion {
    id: number=0;
    nombreSuscripcion:string="";
    precioSuscripcion:number=0;
    fechaInicio:string="";
    fechaFin:string="";
    tipoSuscripcion:TipoSuscripcion=new TipoSuscripcion();
   
}