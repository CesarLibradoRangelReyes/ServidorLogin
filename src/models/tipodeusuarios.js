const mongoose = require('mongoose');

const TipodeUsuarioScheme = new mongoose.Schema(
    {
        Id_Tipos: {
            type: Number,
            require: true
        },
        Nombre_Tipos: {
            type: String,
            require: true
        }
    }
)

module.exports = mongoose.model('tipo de usuario', TipodeUsuarioScheme);