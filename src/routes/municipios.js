const Router = require('express');
const router = Router();
const modeloMunicipio = require('../models/municipios');

router.get('/', async (req,res) => {
    const municipios = await modeloMunicipio.find();
    res.json(municipios);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const municipioss = await modeloMunicipio.findById(req.params.id);
    res.json({
        municipioss:municipioss
    });
});

router.post('/', async (req,res) => {
    const {Id_Municipio, Nombre_Municipio, Id_Estado} = req.body;
    const nuevoMunicipio = new modeloMunicipio({Id_Municipio, Nombre_Municipio, Id_Estado});
    console.log(nuevoMunicipio);
    await nuevoMunicipio.save();
    res.json(nuevoMunicipio);
});

router.put('/:id', async (req, res) => {
    const {Id_Municipio, Nombre_Municipio, Id_Estado} = req.body;
    const modificarMunicipio = {
        Id_Municipio: Id_Municipio, 
        Nombre_Municipio: Nombre_Municipio, 
        Id_Estado: Id_Estado
    }
    await modeloMunicipio.findByIdAndUpdate(req.params.id, modificarMunicipio, {useFindAndModify: false});
    res.json(modificarMunicipio);
});

router.delete('/:id', async (req, res) => {
    await modeloMunicipio.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});

module.exports = router;