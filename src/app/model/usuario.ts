import { Role } from './role';
import { Suscripcion } from './suscripcion';
import { Categoria } from './categoria';


export class Usuario {
    idUsuario: number = 0;
    nombreUsuario: string = "";
    apellidoUsuario: string = "";
    correoUsuario: string = "";
    contrasenaUsuario: string = "";
    edadUsuario: number = 0;
    telefonoUsuario: number = 0;
    idCategoria: Categoria = new Categoria();
    idSuscripcion: Suscripcion = new Suscripcion();
    idRole: Role = new Role();
}