const DatosUsuario = ({usuario}) => {
  return (
    <div className="container">
    <h6 className="m-2 mb-3 ms-4">Datos del usuario</h6>
    <div className="row">
        <div className="col">
            <div className="col-in d-flex align-items-center justify-content-between flex-wrap">
                <div className="mx-2">
                    <h6 className="my-3" style={{ fontSize: 15 }}>
                        Nombre de usuario: {usuario.nombre}
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
                        Correo electrónico: {usuario.email}
                    </h6>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default DatosUsuario;