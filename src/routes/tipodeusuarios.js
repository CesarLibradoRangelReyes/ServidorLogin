const Router = require('express');
const router = Router();
const modeloTipos = require('../models/tipodeusuarios');

router.get('/', async (req,res) => {
    const tipos = await modeloTipos.find();
    res.json(tipos);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const tiposs = await modeloTipos.findById(req.params.id);
    res.json({
        tiposs:tiposs
    });
});

router.post('/', async (req,res) => {
    const {Id_Tipos, Nombre_Tipos} = req.body;
    const nuevoTipos = new modeloTipos({Id_Tipos, Nombre_Tipos});
    console.log(nuevoTipos);
    await nuevoTipos.save();
    res.json(nuevoTipos);
});

router.put('/:id', async (req, res) => {
    const {Id_Tipos, Nombre_Tipos} = req.body;
    const modificarTipos = {
        Id_Tipos: Id_Tipos, 
        Nombre_Tipos: Nombre_Tipos
    }
    await modeloTipos.findByIdAndUpdate(req.params.id, modificarTipos, {useFindAndModify: false});
    res.json(modificarTipos);
});

router.delete('/:id', async (req, res) => {
    await modeloTipos.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});

module.exports = router;