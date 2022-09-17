import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { keys } from "../config/key.js";

// importacion modelo
import UsuariosModelo from '../modelos/UsuariosModelo.js';

// importacion validaciones
import ValidarRegister from "../validacion/Register.js";
import ValidarLogin from "../validacion/Login.js";

// métodos
export const postRegister = (req, res) => {
    // Validar formulario
    const { errores, esValido } = ValidarRegister(req.body);

    if (!esValido) {
      return res.status(400).json(errores);
    }

    UsuariosModelo.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "El email ya está en uso" });
        } else {
            const nuevoUsuario = new UsuariosModelo({
            nombre: req.body.nombre,
            email: req.body.email,
            password: req.body.password
        });

        // Encriptado de contraseña
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(nuevoUsuario.password, salt, (err, hash) => {
                if (err) throw err;
                nuevoUsuario.password = hash;

                nuevoUsuario
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
                ;
            });
        });
      }
    });
}

export const postLogin = (req, res) => {
    const { errores, esValido } = ValidarLogin(req.body);
  
    if (!esValido) {
      return res.status(400).json(errores);
    }

    const email = req.body.email;
    const password = req.body.password;

    UsuariosModelo.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailIncorrecto: "Email incorrecto" });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
            // Crear JWT Payload
            const payload = {
                id: user.id,
                name: user.name
            };
            // Token
            jwt.sign(
                payload, keys.secretKey, { expiresIn: 31556926 },
                (err, token) => {
                    res.json({
                        exito: true,
                        token: "Bearer " + token
                    });
                }
            );
            } else {
            return res
                .status(400)
                .json({ contrasenaIncorrecta: "Contraseña incorrecta" });
            }
        });
    });
}