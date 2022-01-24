const Router = require('express');
const router = Router();
const modeloArea = require('../models/area');

//Muestra todo el contenido de la tabla
router.get('/', async (req,res) => {
    const areas = await modeloArea.find();
    res.json({
        areas:areas
    });
});

//Muestra un dato especifico de la tabla
router.get('/:id', async (req, res) => {
    const areaa = await modeloArea.findById(req.params.id);
    res.json({
        areaa:areaa
    });
});

//Ingresamos datos a la tabla
router.post('/', async (req,res) => {
    const {Id_Area, Area} = req.body;
    const nuevoArea = new modeloArea({Id_Area, Area});
    console.log(nuevoArea);
    await nuevoArea.save();
    res.json(nuevoArea);
});

//Modificamos un dato de la tabla
router.put('/:id', async (req, res) => {
    const {Id_Area, Area} = req.body;
    const modificarArea = {
        Id_Area: Id_Area,
        Area: Area
    }
    await modeloArea.findByIdAndUpdate(req.params.id, modificarArea, {useFindAndModify: false});
    res.json(modificarArea);
});

//Elimina un dato de la tabla
router.delete('/:id', async (req, res) => {
    await modeloArea.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Area Eliminado'
    });
});

module.exports = router;