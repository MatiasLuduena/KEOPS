import { useState } from "react"
import axios from "axios";

// router dom
import { Link, useSearchParams } from "react-router-dom";

const datosIniciales = {
  nombre: "", password: "", password2: ""
};

const Register = () => {
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState(datosIniciales);

  // Parametros de Usuarios
  const [params] = useSearchParams();

  let uIds = { id1: "", id2: "", id3: "" };

  if (!localStorage.getItem('uid1') || localStorage.getItem('uid1') === null) {
    localStorage.setItem('uid1', JSON.stringify(params.get('uid1')));
    uIds.id1 = JSON.parse(localStorage.getItem('uid1'));
  } else {
    uIds.id1 = JSON.parse(localStorage.getItem('uid1'));
  }

  if (!localStorage.getItem('uid2') || localStorage.getItem('uid2') === null) {
    localStorage.setItem('uid2', JSON.stringify(params.get('uid2')));
    uIds.id2 = JSON.parse(localStorage.getItem('uid2'));
  } else {
    uIds.id2 = JSON.parse(localStorage.getItem('uid2'));
  }

  if (!localStorage.getItem('uid3') || localStorage.getItem('uid3') === null) {
    localStorage.setItem('uid3', JSON.stringify(params.get('uid3')));
    uIds.id3 = JSON.parse(localStorage.getItem('uid3'));
  } else {
    uIds.id3 = JSON.parse(localStorage.getItem('uid3'));
  }

  async function clickBoton(e) {
    e.preventDefault();

    const dates = new Date();
    const dia = dates.getDate();
    const mes = dates.getMonth();

    try {
      const rta = await axios.post('http://localhost:5000/api/usuarios/register', {
				nombre: datos.nombre,
				password: datos.password,
        password2: datos.password2,
        uIds: uIds,
        grafico: `${dia}/${mes + 1}-`
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
    <div className="card-login p-4 m-3">
      <div className="card-login_head mt-4">
        <h4>CREAR CUENTA</h4>
        <p>Bienvenido a KEOPS.</p>
      </div>

      <form className="mt-4">
        <div className="input-field col s12">
          <label htmlFor="nombre">Nombre único de usuario</label>
          <input
            type="text" id="nombre" value={datos.nombre}
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
        <button className="waves-effect btn mt-3" onClick={clickBoton}>CREAR CUENTA</button>
      </form>

      <div className="d-flex justify-content-center mt-4">
        <p>¿Ya tienes una cuenta? <Link to="/iniciosesion">INICIAR SESIÓN</Link></p>
      </div>
    </div>
  );
}

export default Register;