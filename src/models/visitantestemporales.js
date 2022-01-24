const mongoose = require('mongoose');

const VisitantesTemporalesScheme = new mongoose.Schema(
    {
        Id_Visitantes: {
            type: String,
            require: true
        },
        Id_Tipos: {
            type: Number,
            require: true
        },
        Id_Datos_Personales: {
            type: String,
            require: true
        },
        Empresa: {
            type: String,
            require: true
        },
        Estatus: {
            type: String,
            require: true
        }
    }
)

module.exports = mongoose.model('visitantes temporales', VisitantesTemporalesScheme);