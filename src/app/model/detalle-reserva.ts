import { Actividad } from './actividad';
import { Reserva } from './reserva';

export class DetalleReserva{
    idDetalleReserva:number=0;
    descripcionDetalleReserva:string="";
    idReserva: Reserva = new Reserva();
    idActividad: Actividad = new Actividad();
}