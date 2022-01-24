const Router = require('express');
const router = Router();
const modeloCodigo = require('../models/codigopostal');

router.get('/', async (req,res) => {
    const codigos = await modeloCodigo.find();
    res.json(codigos);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const codigoo = await modeloCodigo.findById(req.params.id);
    res.json({
        codigoo:codigoo
    });
});

router.post('/', async (req,res) => {
    const {Id_Postal, Nombre_Postal, Id_Municipio} = req.body;
    const nuevoCodigo = new modeloCodigo({Id_Postal, Nombre_Postal, Id_Municipio});
    console.log(nuevoCodigo);
    await nuevoCodigo.save();
    res.json(nuevoCodigo);
});

router.put('/:id', async (req, res) => {
    const {Id_Postal, Nombre_Postal, Id_Municipio} = req.body;
    const modificarCodigo = {
        Id_Postal: Id_Postal, 
        Nombre_Postal: Nombre_Postal, 
        Id_Municipio: Id_Municipio
    }
    await modeloCodigo.findByIdAndUpdate(req.params.id, modificarCodigo, {useFindAndModify: false});
    res.json(modificarCodigo);
});

router.delete('/:id', async (req, res) => {
    await modeloCodigo.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});
module.exports = router;