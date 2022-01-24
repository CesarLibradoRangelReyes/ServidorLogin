const mongoose = require('mongoose');

const DatosGeneralesScheme = new mongoose.Schema(
    {
        Id_Datos_Generales: {
            type: String,
            require: true
        },
        Nombre: {
            type: String,
            require: true
        },
        Apellido_Paterno: {
            type: String,
            require: true
        },
        Apellido_Materno: {
            type: String,
            require: true
        },
        Numero_Telefonico: {
            type: Number,
            require: true
        },
        Sexo: {
            type: String
            ,require: true
        },
        Dia: {
            type: Number
            ,require: true
        },
        Mes: {
            type: String,
            require: true
        },
        Año: {
            type: Number,
            require: true
        },
        Email: {
            type: String,
            require: true
        },
        Contraseña: {
            type: String,
            require: true
        },
        Id_Direccion: {
            type: Number,
            require: true
        }
    }
)

module.exports = mongoose.model('datos generales', DatosGeneralesScheme);