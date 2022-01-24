const mongoose = require('mongoose');

const ColoniaScheme = new mongoose.Schema(
    {
        Id_Colonia: {
            type: Number,
            require: true
        },
        Nombre_Colonia: {
            type: String,
            require: true
        },
        Id_Postal: {
            type: Number,
            require: true
        }
    }
)

module.exports = mongoose.model('colonia', ColoniaScheme);