import "./app.css";
import { useContext } from "react";

// componentes
import Analiticas from "./inicioComponentes/Analiticas";
import Graficos from "./inicioComponentes/Graficos";
import Calendario from "./inicioComponentes/Calendario";
import DatosUsuario from "./inicioComponentes/DatosUsuario";

// context
import AuthContext from "../../context/authContext";

const Inicio = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
      <div style={{ height: 60 }}></div>
      <div className="container-fluid contenedor-app">
        <h5>Panel</h5>
        <Analiticas usuario={auth} />
        <Graficos />
        <Calendario />
        <hr />
        <h5>Datos del usuario</h5>
        <DatosUsuario usuario={auth} />
        <div style={{ height: 1 }}></div>
      </div>
    </div>
  );
}

export default Inicio;