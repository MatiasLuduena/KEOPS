const CerrarSesion = () => {
    function clicBtn() {
        localStorage.removeItem('token');
        window.location.href = "/";
    }

  return (
    <>
        <div className="insignia-app3 mx-5 my-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
          style={{ maxWidth: 250 }}
        >CERRAR SESIÓN</div>
        
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true"
            style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                        ¿Estás seguro que deseas cerrar sesión?
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary m-2 mt-4" data-bs-dismiss="modal">
                        Cancelar
                    </button>
                    <button type="button" className="btn btn-secondary m-2 mt-4" onClick={clicBtn}>
                        Aceptar
                    </button>
                </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default CerrarSesion;