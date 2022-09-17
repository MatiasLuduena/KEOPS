// importaciones
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors";
import passport from 'passport';

// métodos
const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

import passportjs from "./config/passport.js";
passportjs(passport);

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