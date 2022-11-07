import { Actividad } from './actividad';
import { Reserva } from './reserva';

export class DetalleReserva{
    idDetalleReserva:number=0;
    descripcionDetalleReserva:string="";
    reserva: Reserva = new Reserva();
    actividad: Actividad = new Actividad();
}