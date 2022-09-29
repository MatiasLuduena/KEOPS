// router-dom
import { Link } from "react-router-dom";

const Presentacion = () => {
  return (
    <div className="contenedor-present">
        <nav className="nav-app d-flex align-items-center justify-content-between position-fixed">
            <Link to="/" className="mx-3">
                <img alt="LOGO" src="assets/KEOPS-type.png" className="logo-app" />
            </Link>
            <div>
                <Link to="/registrarme" className="usuario me-5" 
                    style={{ textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>
                    EMPEZAR
                </Link>
            </div>
        </nav>
        <div style={{ height: 45 }}></div>
        <main className="container d-flex justify-content-center">
            <div className="div-pre my-3">
                <h2 className="text-center my-1 mt-2">
                    Bienvenido a KEOPS y felicidades por haber llegado hasta aquí.
                </h2>
                <h3 className="mb-3 mt-4 ms-2">¿Qué es KEOPS y cómo funciona?</h3>
                <h5 className="my-2">
                    KEOPS es una aplicación de licencia piramidal. Funciona de la siguiente manera, la forma de ganar dinero es simple, cuando entres a la app (solo podrás entrar una vez que compres la licencia) tendrás un enlace único, el cual deberás compartir para que la gente entre y compre la licencia de KEOPS, si compran desde tu enlace estarás recibiendo, por cada compra, un pago de $100 y por cada venta que tenga quien haya comprado la licencia desde tu enlace (llamémoslos "hijos") recibirás también un pago de $100; no solo eso, si no que también de las ventas que hayan tenido tus "hijos" desde su enlace (llamémoslos "nietos") se te benedifiará con otros $100.
                </h5>
                <h3 className="mb-3 mt-4 ms-2">En conclusión</h3>
                <h5 className="my-2 mb-4">
                    Si te encargas de vender muchas licencias, puedes tener grandes ingresos pasivos con las ventas que tengan tus "hijos" y "nietos".
                </h5>
            </div>
        </main>
    </div>
  );
}

export default Presentacion;