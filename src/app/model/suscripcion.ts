import { TipoSuscripcion } from "./tipo-suscripcion";
export class Suscripcion {
    idSuscripcion: number=0;
    nombreSuscripcion:string="";
    precioSuscripcion:number=0;
    fechaInicio:string="";
    fechaFin:string="";
    idTipoSuscripcion:TipoSuscripcion=new TipoSuscripcion();
   
}