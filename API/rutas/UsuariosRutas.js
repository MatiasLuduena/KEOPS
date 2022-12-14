import express from 'express';
const rutas = express.Router();

// importaciones
import { postRegister, postLogin, getAuth, postUrl, postRedirect, postCbuAlias } from '../controladores/UsuariosControladores.js';
import { protector } from "../middlewares/protector.js";

// rutas
rutas.post('/register', postRegister);
rutas.post('/login', postLogin);
rutas.get('/auth', protector, getAuth);
rutas.post('/url', postUrl);
rutas.post('/redirect', postRedirect);
rutas.post('/cbualias', postCbuAlias);


export default rutas;