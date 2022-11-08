import { TipoSuscripcion } from "./tipo-suscripcion";
export class Suscripcion {
    idSuscripcion: number=0;
    nombreSuscripcion:string="";
    precioSuscripcion:number=0;
    fechaInicioSuscripcion:string="";
    fechaFinSuscripcion:string="";
    tipoSuscripcion:TipoSuscripcion=new TipoSuscripcion();
   
}