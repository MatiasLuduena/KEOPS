import { useState, useContext } from "react";
import axios from "axios";

// context
import AuthContext from "../../../context/authContext";

const Transferencias = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [cambiar, setCambiar] = useState({ cbu: "", alias: "" });

    async function cambiarAliasCbu() {
        const res = await axios.post('http://localhost:5000/api/usuarios/cbualias', {
            id: auth._id,
            cbu: cambiar.cbu,
            alias: cambiar.alias
        });
        setAuth({
            ...auth, cbu: res.data.cbu, alias: res.data.alias
        });
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
                            Tu Alias es: { auth.alias }
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <form className="input-field my-4">
            <label htmlFor="cbu">Cambiar CBU</label>
            <input
                type="text" id="cbu" value={cambiar.cbu}
                onChange={(e) => setCambiar({...cambiar, cbu: e.target.value})}
            />
        </form>
        <form className="input-field mt-4">
            <label htmlFor="alias">Cambiar Alias</label>
            <input
                type="text" id="alias" value={cambiar.alias}
                onChange={(e) => setCambiar({...cambiar, alias: e.target.value})}
            />
        </form>
        <button className="btn btn-primary" onClick={cambiarAliasCbu}>CAMBIAR</button>

        <div className="my-5">
            <p className="p-nota">
                Lo mínimo a transferir son AR$1000. Una vez pidas tu transferencia, se te adreditará pasando 48hs (algunas acreditaciones son indemidatas o pueden tardar menos, dependiendo de la alta demanda de transferenicas).
            </p>
            <button className="btn btn-success mt-2">PEDIR TRANSFERENCIA</button>
        </div>
    </div>
  );
}

export default Transferencias;