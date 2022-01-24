const mongoose = require('mongoose');

const EmpleadosScheme = new mongoose.Schema(
    {
       Id_Empleados: {
           type: String,
           require: true
       },
       Id_Area: {
           type: String,
           require: true
       },
       Puesto: {
           type: String,
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
       Estatus: {
           type: String,
           require: true
       }
    }
)

module.exports = mongoose.model('empleados', EmpleadosScheme);