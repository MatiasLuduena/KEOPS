import express from 'express';
const rutas = express.Router();

// importaciones
import { postRegister, postLogin, getAuth } from '../controladores/UsuariosControladores.js';
import { protector } from "../middlewares/protector.js";

// rutas
rutas.post('/register', postRegister);
rutas.post('/login', postLogin);
rutas.get('/auth', protector, getAuth);

export default rutas;