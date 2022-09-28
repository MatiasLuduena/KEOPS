import { useState, useContext } from "react";
import axios from "axios";

// context
import AuthContext from "../../../context/authContext";

const Transferencias = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [cambiar, setCambiar] = useState({ cbu: "", error: "", cuit: "" });

    async function cambiarAliasCbu() {
        const res = await axios.post('http://localhost:5000/api/usuarios/cbualias', {
            id: auth._id,
            cbu: cambiar.cbu,
            cuit: cambiar.cuit
        });
        if (res.data.error) {
            setCambiar({
                ...cambiar, error: res.data.error
            });
        } else {
            setCambiar({
                ...cambiar, error: ""
            });
            setAuth({
                ...auth, cbu: res.data.cbu, alias: res.data.alias
            });
        }
    }

  return (
    <div className="container">
        <h6 className="m-2 mb-3 ms-4">Datos de transferencia</h6>
        <div className="row">
            <div className="col">
                <div className="col-in d-flex align-items-center justify-content-between flex-wrap">
                    <div className="mx-2">
                        <h6 className="my-3" style={{ fontSize: 15 }}>
                            Tu CBU es: { auth.cbu }
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="col-in d-flex align-items-center justify-content-between flex-wrap">
                    <div className="mx-2">
                        <h6 className="my-3" style={{ fontSize: 15 }}>
                            Tu CUIL es: { auth.cuit }
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <form className="input-field my-4 mt-5">
            <label htmlFor="cbu">Cambiar CBU</label>
            <input
                type="text" id="cbu" value={cambiar.cbu}
                onChange={(e) => setCambiar({...cambiar, cbu: e.target.value})}
            />
            <p className="red-text">{ cambiar.error.cbu }</p>
        </form>
        <form className="input-field my-4">
            <label htmlFor="cuit">CUIL del dueño del banco</label>
            <input
                type="text" id="cuit" value={cambiar.cuit}
                onChange={(e) => setCambiar({...cambiar, cuit: e.target.value})}
            />
            <p className="red-text">{ cambiar.error.cuit }</p>
        </form>

        <div className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropCBU"
          style={{ maxWidth: 250 }}
        >CAMBIAR</div>

        <div className="my-5">
            <p className="p-nota">
                Lo mínimo a transferir son AR$1000. Una vez pidas tu transferencia, se te adreditará pasando 48hs (algunas acreditaciones son indemidatas o pueden tardar menos o mas, dependiendo de la demanda de transferenicas).
            </p>
            <button className="btn btn-success mt-2">PEDIR TRANSFERENCIA</button>
        </div>

        {/* MODAL */}
        <div className="modal fade" id="staticBackdropCBU" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true"
            style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title" id="staticBackdropLabel">
                        Por favor, verifica que los datos sean correctos, en caso contrario no le podremos transferir.
                    </h6>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" 
                    style={{ position: 'absolute', top: 15, right: 15 }}></button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary m-2 mt-4" data-bs-dismiss="modal">
                        Cancelar
                    </button>
                    <button type="button" className="btn btn-secondary m-2 mt-4" 
                        onClick={cambiarAliasCbu} data-bs-dismiss="modal"
                    >Aceptar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Transferencias;