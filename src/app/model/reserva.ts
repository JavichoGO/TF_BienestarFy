import { Usuario } from "./usuario";
import { Horario } from "./horario";

export class Reserva{
    idReserva:number=0;
    nombreReserva:String="";
    fechaReserva:String="";
    usuario: Usuario = new Usuario();
    horario: Horario = new Horario();
}