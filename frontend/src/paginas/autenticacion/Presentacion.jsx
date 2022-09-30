import Footer from "../../componentes/Footer";

import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Presentacion = () => {
  return (
    <div className="contenedor-present">
        <nav className="nav-p d-flex align-items-center justify-content-between position-fixed">
            <Link to="/" className="mx-3">
                <img alt="LOGO" src="assets/KEOPS-type.png" className="logo-app" />
            </Link>
            <div className="d-flex">
                <Link to="/registrarme" className="usuario me-5" style={{
                    textDecoration: 'none', fontWeight: 700
                }}>
                    EMPEZAR
                </Link>
            </div>
        </nav>
        <div style={{ height: 50 }}></div>
        <main>
            <div className="p-top d-flex justify-content-center">
                <div className="p-top-c m-5 text-center">
                    <h2 className="mb-3" style={{ fontSize: 28 }}>
                        Bienvenido a Keops y felicidades por haber llegado hasta aquí.
                    </h2>
                    <div className="my-4 d-flex justify-content-center">
                        <span style={{ fontSize: 20 }}>
                            AR$
                        </span>
                        <h2 style={{ fontSize: 50 }}>399,00</h2>
                    </div>
                    <h4 className="my-3" style={{ fontSize: 20 }}>
                        Una aplicación de licencia piramidal, en la que puedes generar ingresos pasivos con tu habilidad de ventas por internet.
                    </h4>
                    <Link to="/registrarme"><button className="my-3 miBtn">EMPEZAR YA</button></Link>
                    <p>Compra protegida <FaCheck className="ms-1" /></p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="my-5 mx-2 text-center container seccion1">
                    <div className="m-1 subsec-1">
                        <div style={{ maxWidth: '750px' }} className="me-lg-5">
                        <h3 
                            style={{ fontSize: 22, color: '#1b6b5a', fontWeight: 'bold' }} className="mt-3"
                        >
                            ¿Y por qué piramidal?
                        </h3>
                        <h4
                            className="my-3"
                            style={{ fontSize: 17, lineHeight: '28px', letterSpacing: '1px' }} 
                        >
                            Cuando un cliente compre la licencia desde tu enlace de referidos, este será demoninado como tu "Hijo" y quienes compren la licencia desde el enlace de referidos de tu "Hijo" serán denominados tus "Nietos".
                            Lo piramidal es porque tanto con tus ventas como también las de tus "Hijos" y "Nietos", se te beneficiará con AR$100. Puedes solo hacer una venta, y por cada una que haga este "Hijo" tuyo significará un ingreso pasivo para tu bolsillo, lo mismo con tus "Niestos", así de fácil.
                        </h4>
                        </div>
                        <div>
                            <img src="assets/piramide.png" alt="Imagen de la piramide"
                                style={{ width: '300px', margin: 'auto' }}
                            />
                            <p className="text-center">
                                Ganancia para vos por cada venta de los de abajo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-body-2 d-flex justify-content-center">
                <div className="my-5 mx-2 text-center subsec-2 container">
                <div className="mx-1">
                    <h2 
                        style={{ fontSize: 22, color: '#1b6b5a', fontWeight: 'bold' }}
                    >
                        ¿Cómo funciona?
                    </h2>
                    <h4 
                        className="mt-3"
                        style={{ 
                            fontSize: 17, lineHeight: '28px', letterSpacing: '1px', color: '#134b3f' 
                        }}
                    >
                        Luego de registrarte con tu nombre usuario único y contraseña se te pedirá que pagues una licencia de tan solo AR$399, el pago aceptado es por transferencia bancaria, es la única forma de evitar impuestos. Una vez hecho el pago se te habilitará el panel principal de KEOPS en el que podrás ubicar tu enlace único de referidos, el cual, es el que deberás compartir para traer nuevos clientes a la app.
                    </h4>
                    </div>
                    <div className="mx-1">
                    <h2
                        style={{ fontSize: 22, color: '#1b6b5a', fontWeight: 'bold' }}
                        className="mt-5 mt-lg-0"
                    >
                        ¿Cómo gano dinero?
                    </h2>
                    <h5
                        className="mt-3"
                        style={{ 
                            fontSize: 17, lineHeight: '28px', letterSpacing: '1px', color: '#134b3f' 
                        }} 
                    >
                        Puedes compartir tu enlace en redes sociales, como en tus historias de Instagram, grupos de Facebook, facebook Marketplace, TikTok entre muchas más.
                        No te olvidés de explicar con detalles que es KEOPS y usar una buena estrategia de marketing para aumentar tus visitas.
                        Una vez que vendas varias licencias, empezarás a ganar de forma pasiva con las ventas de los demás, ¡es un hecho!
                    </h5>
                    </div>
                </div>
            </div>  
            <div className="p-bot d-flex justify-content-center">
                <div className="my-3 mx-1 text-center subsec-1 container">
                    <div style={{ maxWidth: '750px' }}>
                    <h2
                        style={{ fontSize: 22, color: '#1b6b5a', fontWeight: 'bold' }}
                    >Pagos</h2>
                    <h5
                        className="mt-3"
                        style={{ fontSize: 17, lineHeight: '28px', letterSpacing: '1px' }} 
                    >
                        Los pagos serán con transferancias bancarias, una vez solicites el retiro del dinero que hayas generado, te transferiremos a la cuenta bancaria que nos hayas indicado. No se te cobrará ninguna comisión, tus ganancias son totales.
                    </h5>
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/512/1770/1770992.png"
                        alt="Imagen pago" style={{ width: '210px', margin: 'auto' }}
                    />
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default Presentacion;