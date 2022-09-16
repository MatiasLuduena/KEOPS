// importaciones
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';

// métodos
const app = express();
dotenv.config();

// middlewares
app.use(morgan('dev'));

// MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB funcionando correctamente'))
    .catch((error) => console.log(error))
;

// rutas
import UsuariosRutas from './rutas/UsuariosRutas.js';
app.use('/api/usuarios', UsuariosRutas);

// iniciar servidor
const puerto = process.env.PORT;
app.listen(puerto, () => console.log(`Servidor funcionando en el puerto ${puerto}`));