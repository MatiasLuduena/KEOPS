import express from 'express';
const rutas = express.Router();

// importaciones
import { postRegister, postLogin } from '../controladores/UsuariosControladores.js';

// rutas
rutas.post('/register', postRegister);
rutas.post('/login', postLogin);

export default rutas;