const Transferencias = () => {
  return (
    <div className="container">
        <h6 className="m-2 mb-3 ms-4">Datos de transferencia</h6>
        <div className="row">
            <div className="col">
                <div className="col-in d-flex align-items-center justify-content-between flex-wrap">
                    <div className="mx-2">
                        <h6 className="my-3" style={{ fontSize: 15 }}>
                            Tu CBU es: 0000000000000
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
                            Tu Alias es: 0000000000000
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <form className="input-field mt-4">
            <label htmlFor="cbu">Cambiar CBU</label>
            <input type="text" id="cbu" />
        </form>
        <form className="input-field mt-4">
            <label htmlFor="cbu">Cambiar Alias</label>
            <input type="text" id="cbu" />
        </form>
        <button className="btn btn-primary">CAMBIAR</button>

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