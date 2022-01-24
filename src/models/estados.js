const mongoose = require('mongoose');

const EstadosScheme = new mongoose.Schema(
    {
        Id_Estado: {
            type: Number,
            require: true
        },
        Nombre_Estado: {
            type: String,
            require: true
        }
    }
)

module.exports = mongoose.model('estados', EstadosScheme);