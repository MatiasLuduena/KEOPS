import "./auth.css";
import axios from "axios";
import { useState, useContext } from "react"

// router-dom
import { Link } from "react-router-dom";

// context
import authContext from "../../context/authContext";

const datosIniciales = {
  nombre: "", password: ""
};

const Login = () => {
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState(datosIniciales);
  const { setToken } = useContext(authContext);

  async function clickBoton(e) {
    e.preventDefault();

    try {
			const rta = await axios.post('http://localhost:5000/api/usuarios/login', {
				nombre: datos.nombre,
				password: datos.password
			});
      setToken(rta.data.token);
		} catch (error) {
      setErrores(error.response.data);
		}
  }

  return (
    <div className="card-login p-4 m-3">
      <div className="card-login_head mt-4">
        <h4>INICIAR SESIÓN</h4>
        <p>Bienvenido a KEOPS.</p>
      </div>

      <form className="mt-4">
        <div className="input-field col s12">
          <label htmlFor="name">Nombre de usuario</label>
          <input 
            type="text" id="name" value={datos.nombre}
            onChange={(evento) => {
              setDatos({...datos, nombre: evento.target.value});
            }}
          />
          <p className="red-text">{errores.nombre}</p>
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
        <button className="waves-effect btn mt-3" onClick={clickBoton}>INICIAR SESIÓN</button>
      </form>

      <div className="d-flex justify-content-center mt-4">
        <p>¿No tienes cuenta aun? <Link to="/registrarme">CREAR CUENTA</Link></p>
      </div>
    </div>
  );
}

export default Login;