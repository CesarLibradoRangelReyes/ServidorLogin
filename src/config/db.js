const mongoose = require('mongoose');
const cadena = 'mongodb+srv://cesar:Lc35500513@clustertese.busrj.mongodb.net/EmpresaTESE';
mongoose.connect(cadena, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(dato => {
        console.log('Base de datos conectada');

    })
    .catch(error => {
        console.log('No esta conectado', error);
    })
