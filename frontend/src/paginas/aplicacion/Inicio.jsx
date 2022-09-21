import "./app.css";

// componentes
import Analiticas from "./inicioComponentes/Analiticas";
import Graficos from "./inicioComponentes/Graficos";
import DatosUsuario from "./inicioComponentes/DatosUsuario";

const Inicio = () => {
  return (
    <div style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
      <div style={{ height: 60 }}></div>
      <div className="container-fluid contenedor-app">
        <Analiticas />
        <Graficos />
        <hr />
        <DatosUsuario />
        <div style={{ height: 1 }}></div>
      </div>
    </div>
  );
}

export default Inicio;