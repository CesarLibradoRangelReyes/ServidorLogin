const mongoose = require('mongoose');

const RegistroScheme = new mongoose.Schema(
    {
        Id_Registro: {
            type: Number,
            require: true
        },
        Id_Datos_Personales: {
            type: String,
            require: true
        },
        Id_Tipos: {
            type: Number,
            require: true
        },
        Usuario: {
            type: String,
            require: true
        },
        Password: {
            type: String,
            require: true
        }
    }
)

module.exports = mongoose.model('registro', RegistroScheme);