import { useEffect } from "react";
import axios from "axios";

// copiar al portapapeles
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

const Analiticas = ({usuario}) => {
    useEffect(() => {
        async function fetchUrl() {
            const res = await axios.post('http://localhost:5000/api/usuarios/url', {
                url: usuario.url,
                id: usuario._id
            });
        }
        fetchUrl();
    }, []);

  return (
    <>
        <div className="row">
            <div className="col">
                <div className="col-in d-flex align-items-center justify-content-between p-3">
                    <div className="mx-2">
                        <h5>Enlace</h5>
                        <p>Enlace que debo compartir para tener mis ventas.</p>
                    </div>
                    <CopyToClipboard text={usuario.urlAcortado}>
                        <div
                            className="insignia-app2"
                            onClick={() => toast('Enlace copiado', { position: 'top-center' })}
                        >
                            COPIAR ENLACE
                        </div>
                    </CopyToClipboard>
                </div>
                <Toaster />
            </div>
        </div>

        <div className="row">
            <div className="col-xs-12 col-md-6 col-app p-2">
                <div className="col-in d-flex align-items-center justify-content-between p-3">
                    <div className="mx-2">
                        <h5>Clics</h5>
                        <p>Cantidad de clics que ha tenido mi enlace.</p>
                    </div>
                    <div className="insignia-app">{usuario.clics}</div>
                </div>
            </div>
            <div className="col-xs-12 col-md-6 col-app p-2">
                <div className="col-in d-flex align-items-center justify-content-between p-3">
                    <div className="mx-2">
                        <h5>Ventas propias</h5>
                        <p>Número total de las ventas por mi enlace.</p>
                    </div>
                    <div className="insignia-app">{usuario.numeroDeVentasPropias}</div>
                </div>
            </div>
            <div className="col-xs-12 col-md-6 col-app p-2">
                <div className="col-in d-flex align-items-center justify-content-between p-3">
                    <div className="mx-2">
                        <h5>Ventas</h5>
                        <p>Número total de mis ventas y las de mis hijos.</p>
                    </div>
                    <div className="insignia-app">{usuario.numeroDeVentas}</div>
                </div>
            </div>
            <div className="col-xs-12 col-md-6 col-app p-2">
                <div className="col-in d-flex align-items-center justify-content-between p-3">
                    <div className="mx-2">
                        <h5>Ganancias</h5>
                        <p>Mis ganancias totales en AR$.</p>
                    </div>
                    <div className="insignia-app">${usuario.numeroDeVentas * 100}</div>
                </div>
            </div>
       </div>
    </>
  );
}

export default Analiticas;