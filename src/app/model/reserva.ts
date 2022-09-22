import { Usuario } from "./usuario";
import { Horario } from "./horario";

export class Reserva{
    id:number=0;
    FechaReserva:string="";
    usuario: Usuario = new Usuario();
    horario: Horario = new Horario();
}