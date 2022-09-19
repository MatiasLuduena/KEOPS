import jwt from "jsonwebtoken";
import UsuariosModelo from '../modelos/UsuariosModelo.js';
import { keys } from "../config/key.js";

export const protector = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const tokenPayload = jwt.verify(token, keys.secretKey);

            req.usuario = await UsuariosModelo.findById(tokenPayload.id).select('-password');

            next();
        } catch (error) {
            res.status(401).json({error: 'No autorizado'});
        }
    }

    if (!token) {
        res.status(401).json({error: 'No autorizado, no existe token'});
    }
}