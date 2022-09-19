import { useState } from "react"
import axios from "axios";

// router dom
import { Link } from "react-router-dom";

const datosIniciales = {
  nombre: "", email: "", password: "", password2: ""
};

const Register = () => {
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState(datosIniciales);

  async function clickBoton(e) {
    e.preventDefault();

    try {
      const rta = await axios.post('http://localhost:5000/api/usuarios/register', {
				nombre: datos.nombre,
				email: datos.email,
				password: datos.password,
        password2: datos.password2
			});

      if (rta.statusText === "OK") {
        alert("TE HAZ REGISTRADO CON ÉXITO, AHORA DEBES INICIAR SESIÓN.");
        window.location.href = "/iniciosesion";
      }
    } catch (error) {
      setErrores(error.response.data);
    }
  }

  return (
    <div className="card-login p-4">
      <div className="card-login_head mt-4">
        <div className="d-flex justify-content-between">
          <h4>CREAR CUENTA</h4>
          <h4>$400</h4>
        </div>
        <p>Se te cobrará una licencia única.</p>
      </div>

      <form className="mt-4">
        <div className="input-field col s12">
          <label htmlFor="nombre">Nombre de usuario</label>
          <input
            type="text" id="nombre" value={datos.nombre}
            onChange={(evento) => {
              setDatos({...datos, nombre: evento.target.value});
            }}
          />
          <p className="red-text">{errores.nombre}</p>
        </div>
        <div className="input-field col s12">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="text" id="email" value={datos.email}
            onChange={(evento) => {
              setDatos({...datos, email: evento.target.value});
            }}
          />
          <p className="red-text">{errores.email}</p>
        </div>
        <div className="input-field col s12 mt-4">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password" id="password" value={datos.password}
            onChange={(evento) => {
              setDatos({...datos, password: evento.target.value});
            }}
          />
          <p className="red-text">{errores.password}</p>
        </div>
        <div className="input-field col s12 mt-4">
          <label htmlFor="password2">Confirmar contraseña</label>
          <input
            type="password" id="password2" value={datos.password2}
            onChange={(evento) => {
              setDatos({...datos, password2: evento.target.value});
            }}
          />
          <p className="red-text">{errores.password2}</p>
        </div>
        <button className="waves-effect btn mt-3" onClick={clickBoton}>IR A PAGAR</button>
      </form>

      <div className="d-flex justify-content-center mt-4">
        <p>¿Ya tienes una cuenta? <Link to="/iniciosesion">INICIAR SESIÓN</Link></p>
      </div>
    </div>
  );
}

export default Register;