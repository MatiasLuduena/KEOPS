import Validator from "validator";
import isEmpty from "is-empty";

export default function validarLogin(data) {
    let errores = {};

    // Convierta campos vacíos en una cadena vacía
    data.nombre = !isEmpty(data.nombre) ? data.nombre : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.nombre)) {
        errores.nombre = "El nombre es requerido";
    }
    
    if (Validator.isEmpty(data.password)) {
        errores.password = "La contraseña es requerida";
    }
    return {
        errores,
        esValido: isEmpty(errores)
    };
};