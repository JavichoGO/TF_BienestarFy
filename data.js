const { updateImportEqualsDeclaration } = require("typescript")

module.exports = function () {
    var data = {
        tipoHorario: [
            {
                id: 1,
                nombreTipoHorario: "TipoHorario 1",
                descripcionTipoHorario: "Descripcion TipoHorario 1"

            },
            {
                id: 2,
                nombreTipoHorario: "TipoHorario 2",
                descripcionTipoHorario: "Descripcion TipoHorario 2"
            },
            {
                id: 3,
                nombreTipoHorario: "TipoHorario 3",
                descripcionTipoHorario: "Descripcion TipoHorario 3"
            },
            {
                id: 4,
                nombreTipoHorario: "TipoHorario 4",
                descripcionTipoHorario: "Descripcion TipoHorario 4"

            }
        ],
        horario: [
            {
                id: 1,
                nombreHorario: "Terapia Psicologica 1",
                descripcionHorario: "Horario Descripcion 1",
                fechaHorario: "11 de octubre",
                horaHorario: "11:11",
                tipoHorario: { id: 4 },
                usuario: { id: 2 }
            },
            {
                id: 2,
                nombreHorario: "Terapia Familiar",
                descripcionHorario: "Horario Descripcion 2",
                fechaHorario: "22 de octubre",
                horaHorario: "22:22",
                tipoHorario: { id: 5 },
                usuario: { id: 4 }
            },
            {
                id: 3,
                nombreHorario: "Terapia Deportiva",
                descripcionHorario: "Horario Descripcion 3",
                fechaHorario: "33 de octubre",
                horaHorario: "33:33",
                tipoHorario: { id: 1 },
                usuario: { id: 3 }
            },
            {
                id: 4,
                nombreHorario: "Terapia Psicomotriz",
                descripcionHorario: "Horario Descripcion 4",
                fechaHorario: "44 de octubre",
                horaHorario: "44:44",
                tipoHorario: { id: 2 },
                usuario: { id: 4 }
            }
        ],
        usuario: [
            {
                id: 1,
                nombreUsuario: "Juan",
                apellidoUsuario: "Mendoza",
                correoUsuario: "juan@gmail.com",
                contrasenaUsuario: "juan123",
                edadUsuario: 11,
                telefonoUsuario: 1111,
                categoria:{id:1},
                suscripcion:{id:2},
                role:{id:3}
            },
            {
                id: 2,
                nombreUsuario: "Pedro",
                apellidoUsuario: "Rios",
                correoUsuario: "pedro@hotmail.com",
                contrasenaUsuario: "pedro22",
                edadUsuario: 22,
                telefonoUsuario: 22222,
                categoria:{id:3},
                suscripcion:{id:4},
                role:{id:2}

            },
            {
                id: 3,
                nombreUsuario: "Trigo",
                apellidoUsuario: " Cebada",
                correoUsuario: "trigo@hotmail.com",
                contrasenaUsuario: "trigo33",
                edadUsuario: 33,
                telefonoUsuario: 333333,
                categoria:{id:1},
                suscripcion:{id:2},
                role:{id:1}

            },
            {
                id: 4,
                nombreUsuario: "Carmen",
                apellidoUsuario: " Garcia",
                correoUsuario: "carmen@hotmail.com",
                contrasenaUsuario: "carmen44",
                edadUsuario: 44,
                telefonoUsuario: 444444,
                categoria:{id:4},
                suscripcion:{id:1},
                role:{id:4}

            }
        ],
        role: [
            {
                id: 1,
                nombreRole: "Psicologo",
                descripcionRole:"Descripcion Psicologo"
            },
            {
                id: 2,
                nombreRole: "Admin",
                descripcionRole:"Descripcion Admin"
            },
            {
                id: 3,
                nombreRole: "Cliente",
                descripcionRole:"Descripcion Cliente"
            }

        ],
        tipoSuscripcion: [
            {
                id: 1,
                nombreTipoSuscripcion: "1 mes",
                descripcionTipoSucripcion: "Sin descuento",
                descuentoTipoSuscripcion: 0,
            },
            {
                id: 2,
                nombreTipoSuscripcion: "3 mes",
                descripcionTipoSucripcion: "10%",
                descuentoTipoSuscripcion: 10,
            },
            {
                id: 3,
                nombreTipoSuscripcion: "6 mes",
                descripcionTipoSucripcion: "20%",
                descuentoTipoSuscripcion: 20,
            },
        ],
        suscripcion: [
            {
                id: 1,
                nombreSuscripcion: "Suscripcion de Juan",
                precioSuscripcion: "12 soles",
                fechaInicio: "15/10/2022",
                fechaFin: "15/11/2022",
                tipoSuscripcion: { id: 3 },
            },
            {
                id: 2,
                nombreSuscripcion: "Suscripcion de Manuel",
                precioSuscripcion: "434 soles",
                fechaInicio: "25/10/2022",
                fechaFin: "25/10/2023",
                tipoSuscripcion: { id: 4 },
            },
            {
                id: 3,
                nombreSuscripcion: "Suscripcion de Anuel",
                precioSuscripcion: "124 soles",
                fechaInicio: "25/10/2022",
                fechaFin: "34/10/2023",
                tipoSuscripcion: { id: 1 },
            },
            {
                id: 4,
                nombreSuscripcion: "Suscripcion de Boboni",
                precioSuscripcion: "53 soles",
                fechaInicio: "25/10/2022",
                fechaFin: "25/11/2023",
                tipoSuscripcion: { id: 2 },
            },
        ],
        tipoActividad: [
            {
                id: 1,
                nombreTipoActividad: "Mejora de la calidad del sueño",
                descripcionTipoActividad: "Descripcion TipoActividad 1"

            },
            {
                id: 2,
                nombreTipoActividad: "Reduccion del estres o la ansiedad",
                descripcionTipoActividad: "Descripcion TipoActividad 2"
            },
            {
                id: 3,
                nombreTipoActividad: "TMejora de la concentracion ",
                descripcionTipoActividad: "Descripcion TipoActividad 3"
            },
            {
                id: 4,
                nombreTipoActividad: "Ejercios",
                descripcionTipoActividad: "Descripcion TipoActividad 4"

            }
        ],
        actividad: [
            {
                id: 1,
                nombreActvidad: "Escuchar musica",
                descripcionActividad: "Actividad Descripcion 1",
                usuario: { id: 1 },
                tipoActividad: { id: 2 }

            },
            {
                id: 2,
                nombreActvidad: "Ejercicios ",
                descripcionActividad: "Actividad Descripcion 2",
                usuario: { id: 1 },
                tipoActividad: { id: 4 }

            },
            {
                id: 3,
                nombreActvidad: "Cantar",
                descripcionActividad: "Actividad Descripcion 3",
                usuario: { id: 3 },
                tipoActividad: { id: 1 }

            },
            {
                id: 4,
                nombreActvidad: "Bailar",
                descripcionActividad: "Actividad Descripcion 4",
                usuario: { id: 1 },
                tipoActividad: { id: 3 }

            }

        ],
        categoria: [
            {
                id: 1,
                nombreCategoria: "Psicologo Familiar",
                descripcionCategoria: "Categoria 1"
            },
            {
                id: 2,
                nombreCategoria: "Psicologo Educativo",
                descripcionCategoria: "Categoria 2"
            },
            {
                id: 3,
                nombreCategoria: "Psicologo Deportivo",
                descripcionCategoria: "Categoria 3"
            },
            {
                id: 4,
                nombreCategoria: "Psicologo Social",
                descripcionCategoria: "Categoria 4"
            }
        ],
        reserva: [
            {
                id: 1,
                FechaReserva: "11/11/34",
                usuario: { id: 2 },
                horario: { id: 3 },
            },
            {
                id: 2,
                FechaReserva: "22/22/34",
                usuario: { id: 1 },
                horario: { id: 3 },
            },
            {
                id: 3,
                FechaReserva: "33/33/34",
                usuario: { id: 3 },
                horario: { id: 2 },
            },
            {
                id: 4,
                FechaReserva: "44/44/34",
                usuario: { id: 4 },
                horario: { id: 2 },
            },


        ]




    }

    return data
}
