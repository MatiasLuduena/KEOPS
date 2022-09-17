import { useState } from "react"

// router dom
import { Link } from "react-router-dom";

const datosIniciales = {
  nombre: "", email: "", contra: "", contra2: ""
};

const Register = () => {
  const [datos, setDatos] = useState(datosIniciales);

  function clickBoton(e) {
    e.preventDefault();
  }

  return (
    <div className="card-login p-4">
      <div className="card-login_head mt-4">
        <h4>CREAR CUENTA</h4>
        <p>Bienvenido a KEOPS.</p>
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
          <p className="red-text d-none">El nombre de usuario es requerido.</p>
        </div>
        <div className="input-field col s12">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="text" id="email" value={datos.email}
            onChange={(evento) => {
              setDatos({...datos, email: evento.target.value});
            }}
          />
          <p className="red-text d-none">El correo electrónico es requerido.</p>
        </div>
        <div className="input-field col s12 mt-4">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password" id="password" value={datos.contra}
            onChange={(evento) => {
              setDatos({...datos, contra: evento.target.value});
            }}
          />
          <p className="red-text d-none">La contraseña es requerida.</p>
        </div>
        <div className="input-field col s12 mt-4">
          <label htmlFor="password2">Confirmar contraseña</label>
          <input
            type="password" id="password2" value={datos.contra2}
            onChange={(evento) => {
              setDatos({...datos, contra2: evento.target.value});
            }}
          />
          <p className="red-text d-none">Confirmar contraseña es requerido.</p>
        </div>
        <button className="waves-effect btn mt-3" onClick={clickBoton}>CREAR CUENTA</button>
      </form>

      <div className="d-flex justify-content-center mt-4">
        <p>¿Ya tienes una cuenta? <Link to="/">INICIAR SESIÓN</Link></p>
      </div>
    </div>
  );
}

export default Register;