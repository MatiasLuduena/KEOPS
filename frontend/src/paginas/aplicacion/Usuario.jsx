import { useContext } from "react";

// componentes
import DatosUsuario from "./inicioComponentes/DatosUsuario";
import Transferencias from "./inicioComponentes/Transferencias";

// context
import AuthContext from "../../context/authContext";

const Usuario = () => {
  const { auth } = useContext(AuthContext);

  function clicBtn() {
    localStorage.removeItem('token');
    window.location.href = "/";
  }

  return (
    <div style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
      <div style={{ height: 60 }}></div>
      <div className="container-fluid contenedor-app">
        <DatosUsuario usuario={auth} />
        <hr />
        <Transferencias />
        <hr />

        <div className="insignia-app3 mx-5 my-4" onClick={clicBtn}
          style={{ maxWidth: 250 }}
        >CERRAR SESIÓN</div>

        <div style={{ height: 1 }}></div>
      </div>
    </div>
  );
}

export default Usuario;