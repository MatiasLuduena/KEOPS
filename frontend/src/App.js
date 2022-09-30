import { useEffect, useContext } from "react";
import axios from "axios";

// router-dom
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// paginas
import Login from "./paginas/autenticacion/Login";
import Register from "./paginas/autenticacion/Register";
import Inicio from "./paginas/aplicacion/Inicio";
import Usuario from "./paginas/aplicacion/Usuario";
import Short from "./paginas/autenticacion/Short";
import Presentacion from "./paginas/autenticacion/Presentacion";

// componentes
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

// context
import AuthContext from "./context/authContext";

function App() {
  const { auth, setAuth, token } = useContext(AuthContext);

  useEffect(() => {
    async function comprobarAuth() {
      try {
        const res = await axios.get('http://localhost:5000/api/usuarios/auth', {
          headers: {
            Authorization: token
          }
        });
        if (res) {
          localStorage.setItem('token', JSON.stringify(token));
          setAuth(res.data);
        }
      } catch (error) {
        localStorage.removeItem('token');
        setAuth(null);
      }
    }
    comprobarAuth();
  }, [token]);

  return (
    <>
      { auth === null ? (
      <BrowserRouter>
        <div className="fondo-auth">
          <div 
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '100vh' }}
          >
            <Routes>
              <Route path="/" element={<Presentacion />} />

              <Route path="/iniciosesion" element={<Login />} />

              <Route path="/registrarme" element={<Register />} />

              <Route path="/short/:id" element={<Short />} />

              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      ) : (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />

          <Route path="/usuario" element={<Usuario />} />

          <Route path="/*" element={<Navigate to="/inicio" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      ) }
    </>
  );
}

export default App;
