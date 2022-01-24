const Router = require('express');
const router = Router();
const modeloVisitantes = require('../models/visitantestemporales');

router.get('/', async (req,res) => {
    const visitantes = await modeloVisitantes.find();
    res.json(visitantes);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const visitantess = await modeloVisitantes.findById(req.params.id);
    res.json({
        visitantess:visitantess
    });
});

router.post('/', async (req,res) => {
    const {Id_Visitantes, Id_Tipos, Id_Datos_Personales, Empresa, Estatus} = req.body;
    const nuevoVisitantes = new modeloVisitantes({Id_Visitantes, Id_Tipos, Id_Datos_Personales, Empresa, Estatus});
    console.log(nuevoVisitantes);
    await nuevoVisitantes.save();
    res.json(nuevoVisitantes);
});

router.put('/:id', async (req, res) => {
    const {Id_Visitantes, Id_Tipos, Id_Datos_Personales, Empresa, Estatus} = req.body;
    const modificarVisitantes = {
        Id_Visitantes: Id_Visitantes, 
        Id_Tipos: Id_Tipos, 
        Id_Datos_Personales: Id_Datos_Personales, 
        Empresa: Empresa, 
        Estatus: Estatus
    }
    await modeloVisitantes.findByIdAndUpdate(req.params.id, modificarVisitantes, {useFindAndModify: false});
    res.json(modificarVisitantes);
});

router.delete('/:id', async (req, res) => {
    await modeloVisitantes.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});

module.exports = router;