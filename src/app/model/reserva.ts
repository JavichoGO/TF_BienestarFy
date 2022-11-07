import { Usuario } from "./usuario";
import { Horario } from "./horario";

export class Reserva{
    idReserva:number=0;
    fechaReserva:number=0;
    idUsuario: Usuario = new Usuario();
    idHorario: Horario = new Horario();
}