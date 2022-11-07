import { Usuario } from "./usuario";
import { Horario } from "./horario";

export class Reserva{
    idReserva:number=0;
    fechaReserva:number=0;
    usuario: Usuario = new Usuario();
    horario: Horario = new Horario();
}