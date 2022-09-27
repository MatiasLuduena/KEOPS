import { useContext } from "react";

// componentes
import DatosUsuario from "./inicioComponentes/DatosUsuario";
import Transferencias from "./inicioComponentes/Transferencias";
import CerrarSesion from "./inicioComponentes/CerrarSesion";

// context
import AuthContext from "../../context/authContext";

const Usuario = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
      <div style={{ height: 60 }}></div>
      <div className="container-fluid contenedor-app">
        <DatosUsuario usuario={auth} />
        <hr />
        <Transferencias />
        <hr />
        <CerrarSesion />
        <div style={{ height: 1 }}></div>
      </div>
    </div>
  );
}

export default Usuario;