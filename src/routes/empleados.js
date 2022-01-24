const Router = require('express');
const router = Router();
const modeloEmpleado = require('../models/empleados');

router.get('/', async (req,res) => {
    const empleado = await modeloEmpleado.find();
    res.json(empleado);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const empleadoss = await modeloEmpleado.findById(req.params.id);
    res.json({
        empleadoss:empleadoss
    });
});

router.post('/', async (req,res) => {
    const {Id_Empleados, Id_Area, Puesto, Id_Datos_Personales, Id_Tipos, Estatus} = req.body;
    const nuevoEmpleado = new modeloEmpleado({Id_Empleados, Id_Area, Puesto, Id_Datos_Personales, Id_Tipos, Estatus});
    console.log(nuevoEmpleado);
    await nuevoEmpleado.save();
    res.json(nuevoEmpleado);
});

router.put('/:id', async (req, res) => {
    const {Id_Empleados, Id_Area, Puesto, Id_Datos_Personales, Id_Tipos, Estatus} = req.body;
    const modificarEmpleado = {
        Id_Empleados: Id_Empleados, 
        Id_Area: Id_Area, 
        Puesto: Puesto, 
        Id_Datos_Personales: Id_Datos_Personales, 
        Id_Tipos: Id_Tipos, 
        Estatus: Estatus
    }
    await modeloEmpleado.findByIdAndUpdate(req.params.id, modificarEmpleado, {useFindAndModify: false});
    res.json(modificarEmpleado);
});

router.delete('/:id', async (req, res) => {
    await modeloEmpleado.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});

module.exports = router;