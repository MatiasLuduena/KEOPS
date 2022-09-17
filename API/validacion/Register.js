import Validator from "validator";
import isEmpty from "is-empty";

export default function validarRegistro(data) {
    let errores = {};
    
    // Convierta campos vacíos en una cadena vacía
    data.nombre = !isEmpty(data.nombre) ? data.nombre : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    // Comprobar si está vacio
    if (Validator.isEmpty(data.nombre)) {
        errores.nombre = "El nombre es requerido";
    }

    
    if (Validator.isEmpty(data.email)) {
        errores.email = "El email es requerido";
    } else if (!Validator.isEmail(data.email)) {
        errores.email = "El email es invalido";
    }


    if (Validator.isEmpty(data.password)) {
        errores.password = "La contraseña es requerida";
    }
    if (Validator.isEmpty(data.password2)) {
        errores.password2 = "Confirmar contraseña es requerido";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errores.password = "La contraseña debe tener entre 6 a 30 caracteres";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errores.password2 = "Las contraseñas deben coincidir";
    }

    return {
        errores,
        esValido: isEmpty(errores) // Valida el formulario
    };
};