// importaciones
import UsuariosModelo from '../modelos/UsuariosModelo.js';

// métodos
export const getUsuarios = (req, res) => {
    res.status(200).json(
        {
            "estado": "Funcionando"
        }
    );
}