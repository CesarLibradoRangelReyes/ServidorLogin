const express = require('express');
const app = express();
const morgan = require('morgan');
//const path = require('path');
const cors = require('cors');

require ('./config/db');

//Configuraciones
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//Archivos estaticos

//Configurar ruta
app.use('/api/area', require('./routes/area'));
app.use('/api/codigo-postal', require('./routes/codigopostal'));
app.use('/api/colonia', require('./routes/colonia'));
app.use('/api/datos-personales', require('./routes/datospersonales'));
app.use('/api/direccion', require('./routes/direccion'));
app.use('/api/empleados', require('./routes/empleados'));
app.use('/api/estados', require('./routes/estados'));
app.use('/api/municipio', require('./routes/municipios'));
app.use('/api/registro', require('./routes/registro'));
app.use('/api/tipos-de-usuarios', require('./routes/tipodeusuarios'));
app.use('/api/visitantes-temporales', require('./routes/visitantestemporales'));

app.listen(app.get('port'), () => {
    //codigo ascci de backstick es alt + 96
    console.log(`servidor en puerto ${app.get('port')}`);
});