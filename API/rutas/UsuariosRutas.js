import express from 'express';
const rutas = express.Router();

// importaciones
import { getUsuarios } from '../controladores/UsuariosControladores.js';

// rutas
rutas.get('/', getUsuarios);

export default rutas;