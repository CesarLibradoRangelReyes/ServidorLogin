const Router = require('express');
const router = Router();
const modeloDireccion = require('../models/direccion');

router.get('/', async (req,res) => {
    const direcciones = await modeloDireccion.find();
    res.json(direcciones);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const direccionn = await modeloDireccion.findById(req.params.id);
    res.json({
        direccionn:direccionn
    });
});

router.post('/', async (req,res) => {
    const {Id_Direccion, Id_Estado, Id_Municipio, Id_Postal, Id_Colonia} = req.body;
    const nuevoDireccion = new modeloDireccion({Id_Direccion, Id_Estado, Id_Municipio, Id_Postal, Id_Colonia});
    console.log(nuevoDireccion);
    await nuevoDireccion.save();
    res.json(nuevoDireccion);
});

router.put('/:id', async (req, res) => {
    const {Id_Direccion, Id_Estado, Id_Municipio, Id_Postal, Id_Colonia} = req.body;
    const modificarDireccion = {
        Id_Direccion: Id_Direccion, 
        Id_Estado: Id_Estado, 
        Id_Municipio: Id_Municipio, 
        Id_Postal: Id_Postal, 
        Id_Colonia: Id_Colonia
    }
    await modeloDireccion.findByIdAndUpdate(req.params.id, modificarDireccion, {useFindAndModify: false});
    res.json(modificarDireccion);
});

router.delete('/:id', async (req, res) => {
    await modeloDireccion.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});

module.exports = router;