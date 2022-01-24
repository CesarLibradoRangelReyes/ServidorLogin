const Router = require('express');
const router = Router();
const modeloColonia = require('../models/colonia');

router.get('/', async (req,res) => {
    const colonias = await modeloColonia.find();
    res.json(colonias);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const coloniaa = await modeloColonia.findById(req.params.id);
    res.json({
        coloniaa:coloniaa
    });
});

router.post('/', async (req,res) => {
    const {Id_Colonia, Nombre_Colonia, Id_Postal} = req.body;
    const nuevoColonia = new modeloColonia({Id_Colonia, Nombre_Colonia, Id_Postal});
    console.log(nuevoColonia);
    await nuevoColonia.save();
    res.json(nuevoColonia);
});

router.put('/:id', async (req, res) => {
    const {Id_Colonia, Nombre_Colonia, Id_Postal} = req.body;
    const modificarColonia = {
        Id_Colonia: Id_Colonia, 
        Nombre_Colonia: Nombre_Colonia, 
        Id_Postal: Id_Postal
    }
    await modeloColonia.findByIdAndUpdate(req.params.id, modificarColonia, {useFindAndModify: false});
    res.json(modificarColonia);
});

router.delete('/:id', async (req, res) => {
    await modeloColonia.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Cliente Eliminado'
    });
});

module.exports = router;