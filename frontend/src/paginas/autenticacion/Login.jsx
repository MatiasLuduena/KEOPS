import "./auth.css";
import { useState } from "react"

// router-dom
import { Link } from "react-router-dom";

const datosIniciales = {
  email: "", contra: ""
};

const Login = () => {
  const [datos, setDatos] = useState(datosIniciales);

  function clickBoton(e) {
    e.preventDefault();
  }

  return (
    <div className="card-login p-4">
      <div className="card-login_head mt-4">
        <h4>INICIAR SESIÓN</h4>
        <p>Bienvenido a KEOPS.</p>
      </div>

      <form className="mt-4">
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
        <button className="waves-effect btn mt-3" onClick={clickBoton}>INICIAR SESIÓN</button>
      </form>

      <div className="d-flex justify-content-center mt-4">
        <p>¿No tienes cuenta aun? <Link to="/registrarme">CREAR CUENTA</Link></p>
      </div>
    </div>
  );
}

export default Login;