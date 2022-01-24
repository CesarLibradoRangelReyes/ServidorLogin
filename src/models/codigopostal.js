const mongoose = require('mongoose');

const CodigoPostalScheme = new mongoose.Schema(
    {
        Id_Postal: {
            type: Number,
            require: true
        },
        Nombre_Postal: {
            type: Number,
            require: true
        },
        Id_Municipio: {
            type: Number,
            require: true
        }
    }
);

module.exports = mongoose.model('Codigo Postal', CodigoPostalScheme);