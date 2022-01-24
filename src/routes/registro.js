const Router = require('express');
const router = Router();
const modeloRegistro = require('../models/registro');
const jwt = require('jsonwebtoken');

router.get('/', async (req,res) => {
    const registros = await modeloRegistro.find();
    res.json(registros);
    res.send('Consulta realizada');
});

router.get('/:id', async (req, res) => {
    const registross = await modeloRegistro.findById(req.params.id);
    res.json({
        registross:registross
    });
});

router.post('/', async (req,res) => {
    const {Id_Registro, Id_Datos_Personales, Id_Tipos, Usuario, Password} = req.body;
    const nuevoRegistro = new modeloRegistro({Id_Registro, Id_Datos_Personales, Id_Tipos, Usuario, Password});
    console.log(nuevoRegistro);
    await nuevoRegistro.save();
    //res.json(nuevoRegistro);
    const token = jwt.sign({_id: modeloRegistro._id}, 'secretkey');
    res.status(200).json({token});
});

router.put('/:id', async (req, res) => {
    const {Id_Registro, Id_Datos_Personales, Id_Tipos, Usuario, Password} = req.body;
    const modificarRegistro = {
        Id_Registro: Id_Registro, 
        Id_Datos_Personales: Id_Datos_Personales, 
        Id_Tipos: Id_Tipos, 
        Usuario: Usuario, 
        Password: Password
    }
    await modeloRegistro.findByIdAndUpdate(req.params.id, modificarRegistro, {useFindAndModify: false});
    res.json(modificarRegistro);
});

router.delete('/:id', async (req, res) => {
    await modeloRegistro.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: 'Registro Eliminado'
    });
});

router.post('/signin', async (req, res) => {
const {Usuario, Password} = req.body;
console.log(req.body);
const user = await modeloRegistro.findOne({Usuario});
if(!user) return res.status(401).send("El usuario no existe");
if (user.Password !== Password) return res.status(401).send("contraseña invalida");
console.log(user);
const token = jwt.sign({_id: modeloRegistro._id}, 'secretkey');
return res.status(200).json({token});
});


module.exports = router;