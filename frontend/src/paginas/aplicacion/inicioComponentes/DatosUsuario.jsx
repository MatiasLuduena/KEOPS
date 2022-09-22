const DatosUsuario = ({usuario}) => {
  return (
    <div className="row">
        <div className="col">
            <div className="col-in d-flex align-items-center justify-content-between p-3 flex-wrap">
                <div className="mx-2">
                    <h6 className="my-3" style={{ fontSize: 15 }}>
                        Nombre de usuario: {usuario.nombre}
                    </h6>
                    <h6 className="my-3" style={{ fontSize: 15 }}>
                        Correo electrónico: {usuario.email}
                    </h6>
                </div>
                <div className="insignia-app3 mt-2">CERRAR SESIÓN</div>
            </div>
        </div>
    </div>
  );
}

export default DatosUsuario;