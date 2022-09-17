import Validator from "validator";
import isEmpty from "is-empty";

export default function validarLogin(data) {
    let errores = {};

    // Convierta campos vacíos en una cadena vacía
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.email)) {
        errores.email = "El email es requerido";
    } else if (!Validator.isEmail(data.email)) {
        errores.email = "El email es invalido";
    }
    
    if (Validator.isEmpty(data.password)) {
        errores.password = "La contraseña es requerida";
    }
    return {
        errores,
        esValido: isEmpty(errores)
    };
};