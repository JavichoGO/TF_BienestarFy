import { Role } from './role';
import { Suscripcion } from './suscripcion';
import {Categoria} from './categoria';


export class Usuario {
    id: number = 0;
    nombreUsuario: string = "";
    apellidoUsuario: string = "";
    correoUsuario: string = "";
    contrasenaUsuario: string = "";
    edadUsuario: number = 0;
    telefonoUsuario: number=0;
    categoria:Categoria = new Categoria();
   suscripcion:Suscripcion = new Suscripcion();
   role: Role = new Role();
}