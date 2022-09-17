// router-dom
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// paginas
import Login from "./paginas/autenticacion/Login";
import Register from "./paginas/autenticacion/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="fondo-auth">
        <div 
          className="container vh-100 d-flex justify-content-center align-items-center"
        >
          <Routes>
            <Route path="/iniciosesion" element={<Login />} />

            <Route path="/registrarme" element={<Register />} />

            <Route path="/*" element={<Navigate to="/iniciosesion" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
