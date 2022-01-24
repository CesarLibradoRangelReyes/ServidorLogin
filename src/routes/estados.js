const Router = require('express');
const router = Router();
const modeloEstado = require('../models/estados');

router.get('/', async (req,res) => {
    const estado = await modeloEstado.find();
    res.json(estado);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const estadoss = await modeloEstado.findById(req.params.id);
    res.json({
        estadoss:estadoss
    });
});

router.post('/', async (req,res) => {
    const {Id_Estado, Nombre_Estado} = req.body;
    const nuevoEstado = new modeloEstado({Id_Estado, Nombre_Estado});
    console.log(nuevoEstado);
    await nuevoEstado.save();
    res.json(nuevoEstado);
});

router.put('/:id', async (req, res) => {
    const {Id_Estado, Nombre_Estado} = req.body;
    const modificarEmpleado = {
        Id_Estado: Id_Estado, 
        Nombre_Estado: Nombre_Estado
    }
    await modeloEstado.findByIdAndUpdate(req.params.id, modificarEmpleado, {useFindAndModify: false});
    res.json(modificarEmpleado);
});

router.delete('/:id', async (req, res) => {
    await modeloEstado.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});

module.exports = router;