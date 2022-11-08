import {TipoHorario } from './tipo-horario';
import {Usuario} from './usuario';

export class Horario {
    idHorario: number = 0;
    nombreHorario: string = "";
    descripcionHorario: string = "";
    fechaHorario: string="";
    horaHorario: string="";
    usuario:Usuario = new Usuario();
    tipoHorario:TipoHorario=new TipoHorario();
    
}