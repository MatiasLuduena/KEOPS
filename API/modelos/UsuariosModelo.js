import mongoose from 'mongoose';

const usuariosEsquema = new mongoose.Schema(
    {
        numeroDeVentas: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('Usuarios', usuariosEsquema);