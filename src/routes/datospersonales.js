const Router = require('express');
const router = Router();
const modeloDatos = require('../models/datospersonales');

router.get('/', async (req,res) => {
    const datos = await modeloDatos.find();
    res.json(datos);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const datoss = await modeloDatos.findById(req.params.id);
    res.json({
        datoss:datoss
    });
});

router.post('/', async (req,res) => {
    const {Id_Datos_Generales, Nombre, Apellido_Paterno, Apellido_Materno, Numero_Telefonico, Sexo, Dia, Mes, Año, Email, Contraseña, Id_Direccion} = req.body;
    const nuevoDatos = new modeloDatos({Id_Datos_Generales, Nombre, Apellido_Paterno, Apellido_Materno, Numero_Telefonico, Sexo, Dia, Mes, Año, Email, Contraseña, Id_Direccion});
    console.log(nuevoDatos);
    await nuevoDatos.save();
    res.json(nuevoDatos);
});

router.put('/:id', async (req, res) => {
    const {Id_Datos_Generales, Nombre, Apellido_Paterno, Apellido_Materno, Numero_Telefonico, Sexo, Dia, Mes, Año, Email, Contraseña, Id_Direccion} = req.body;
    const modificarDatos = {
        Id_Datos_Generales: Id_Datos_Generales, 
        Nombre: Nombre, 
        Apellido_Paterno: Apellido_Paterno, 
        Apellido_Materno: Apellido_Materno, 
        Numero_Telefonico: Numero_Telefonico, 
        Sexo: Sexo, 
        Dia: Dia, 
        Mes: Mes, 
        Año: Año, 
        Email: Email, 
        Contraseña: Contraseña, 
        Id_Direccion: Id_Direccion
    }
    await modeloDatos.findByIdAndUpdate(req.params.id, modificarDatos, {useFindAndModify: false});
    res.json(modificarDatos);
});

router.delete('/:id', async (req, res) => {
    await modeloDatos.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});

module.exports = router;