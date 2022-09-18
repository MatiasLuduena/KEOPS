// router-dom
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// paginas
import Login from "./paginas/autenticacion/Login";
import Register from "./paginas/autenticacion/Register";
import Inicio from "./paginas/aplicacion/Inicio";

// componentes
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

function App() {
  const auth = true;

  return (
    <BrowserRouter>
      { auth ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/inicio" element={<Inicio />} />

            <Route path="/*" element={<Navigate to="/inicio" />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <div className="fondo-auth">
          <div 
            className="container vh-100 d-flex justify-content-center align-items-center"
          >
            <Routes>
              <Route path="/iniciosesion" element={<Login />} />

              <Route path="/registrarme" element={<Register />} />

              <Route path="/*" element={<Navigate to="/registrarme" />} />
            </Routes>
          </div>
        </div>
      ) }
    </BrowserRouter>
  );
}

export default App;
