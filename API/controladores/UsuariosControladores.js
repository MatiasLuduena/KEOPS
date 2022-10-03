import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { keys } from "../config/key.js";
import arg from "arg.js";

// importacion modelo
import UsuariosModelo from '../modelos/UsuariosModelo.js';

// importacion validaciones
import ValidarRegister from "../validacion/Register.js";
import ValidarLogin from "../validacion/Login.js";

// métodos
export const postRegister = async (req, res) => {
    // Validar formulario
    const { errores, esValido } = ValidarRegister(req.body);

    if (!esValido) {
      return res.status(400).json(errores);
    }

    UsuariosModelo.findOne({ nombre: req.body.nombre }).then(user => {
        if (user) {
            return res.status(400).json({ nombre: "El nombre ya está en uso" });
        } else {
            const nuevoUsuario = new UsuariosModelo({
            nombre: req.body.nombre,
            password: req.body.password,
            url: `/registrarme?uid1=MYID&uid2=${uIds.id1}&uid3=${uIds.id2}`
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

    // usuarios id
    const uIds = req.body.uIds;
    const grafico = req.body.grafico;

    UsuariosModelo.findOne({ _id: uIds.id1 }).then(user => {
        if (user) {
            UsuariosModelo.updateOne(user, {
                $set: {
                    numeroDeVentas: user.numeroDeVentas + 1,
                    numeroDeVentasPropias: user.numeroDeVentas + 1,
                    numeroDeVentasGrafico: user.numeroDeVentasGrafico + grafico
                }
            }, (error, info) => {
                if (error) {
                    console.log(error);
                }
                if (info) {
                    console.log(info);
                }
            });
        }
    }).catch(error => console.log('no existe id1'));

    UsuariosModelo.findOne({ _id: uIds.id2 }).then(user => {
        if (user) {
            UsuariosModelo.updateOne(user, {
                $set: {
                    numeroDeVentas: user.numeroDeVentas + 1
                }
            }, (error, info) => {
                if (error) {
                    console.log(error);
                }
                if (info) {
                    console.log(info);
                }
            });
        }
    }).catch(error => console.log('no existe id2'));

    UsuariosModelo.findOne({ _id: uIds.id3 }).then(user => {
        if (user) {
            UsuariosModelo.updateOne(user, {
                $set: {
                    numeroDeVentas: user.numeroDeVentas + 1
                }
            }, (error, info) => {
                if (error) {
                    console.log(error);
                }
                if (info) {
                    console.log(info);
                }
            });
        }
    }).catch(error => console.log('no existe id3'));
}

export const postLogin = (req, res) => {
    const { errores, esValido } = ValidarLogin(req.body);
  
    if (!esValido) {
      return res.status(400).json(errores);
    }

    const nombre = req.body.nombre;
    const password = req.body.password;

    UsuariosModelo.findOne({ nombre }).then(user => {
        if (!user) {
            return res.status(404).json({ nombre: "Nombre incorrecto" });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
            // Crear JWT Payload
            const payload = {
                id: user.id,
                name: user.name,
                url: user.url
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
                .json({ password: "Contraseña incorrecta" });
            }
        });
    });
}

export const getAuth = async (req, res) => {
    try {
        const { 
            nombre, email, url, _id, numeroDeVentas, numeroDeVentasPropias, urlAcortado, clics,
            clicsGrafico, numeroDeVentasGrafico, cbu, cuit, pago
        } = await UsuariosModelo.findById(req.usuario.id);

        res.status(200).json(
            { 
                nombre, email, url, _id, numeroDeVentas, numeroDeVentasPropias, urlAcortado, clics,
                clicsGrafico, numeroDeVentasGrafico, cbu, cuit, pago
            }
        );
    } catch (error) {
        console.log(error);
    }
}

export const postUrl = async (req, res) => {
    try {
        const { id, url } = req.body;

        UsuariosModelo.findOne({_id: id}).then(user => {
            const noSeModificoUrl = user.url.includes('MYID');
            if (noSeModificoUrl) {
                const newUrl = url.replace('MYID', id);

                UsuariosModelo.updateOne({_id: id}, {
                    $set: {
                        url: newUrl
                    }
                }, (error) => {
                    console.log(error);
                });
            }
            if (!user.urlAcortado) {
                UsuariosModelo.updateOne({_id: id}, {
                    $set: {
                        urlAcortado: `http://localhost:3000/short/${id}`
                    }
                }, (error) => {
                    console.log(error);
                });
            }
            res.json(user);
        });
    } catch (error) {
        console.log(error);
    }
}

export const postRedirect = async (req, res) => {
    const { id, clicGrafico } = req.body;

    UsuariosModelo.findOne({ _id: id }).then(user => {
        UsuariosModelo.updateOne({ _id: id }, {
            $set: {
                clics: user.clics + 1,
                clicsGrafico: user.clicsGrafico + clicGrafico
            }
        }, (error) => {
            console.log(error);
        });
        res.json({
            url: user.url
        });
    });
}

export const postCbuAlias = (req, res) => {
    const { id, cbu, cuit } = req.body;

    const cbuValido = arg.cbu.isValid(cbu);
    const cuitValido = arg.cuit.isValid(cuit);

    if (!cbuValido || !cuitValido) {
        return res.json({
            error: {
                cbu: cbuValido ? "" : "El CBU es invalido",
                cuit: cuitValido ? "" : "El CUIL es invalido"
            }
        });
    }
    res.json({
        ok: 'ok'
    });

    UsuariosModelo.updateOne({ _id: id }, {
        $set: {
            cbu: cbu,
            cuit: cuit
        }
    }, (info) => {
        console.log(info);
    });

    res.json({cbu, cuit});
}