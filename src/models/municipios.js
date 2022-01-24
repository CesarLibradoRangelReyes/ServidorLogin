const mongoose = require('mongoose');

const MunicipioScheme = new mongoose.Schema(
    {
        Id_Municipio: {
            type: Number,
            require: true
        },
        Nombre_Municipio: {
            type: String,
            require: true
        },
        Id_Estado: {
            type: Number,
            require: true
        }
    }
)

module.exports = mongoose.model('municipio', MunicipioScheme);