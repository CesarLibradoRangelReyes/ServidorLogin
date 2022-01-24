const mongoose = require('mongoose');

const DireccionScheme = new mongoose.Schema(
    {
         Id_Direccion: {
             type: Number,
             require: true
         },
         Id_Estado: {
            type: Number,
            require: true
         },
         Id_Municipio: {
            type: Number,
            require: true
         },
         Id_Postal: {
            type: Number,
            require: true
         },
         Id_Colonia: {
            type: Number,
            require: true
         }   
    }
)

module.exports = mongoose.model('direccion', DireccionScheme);