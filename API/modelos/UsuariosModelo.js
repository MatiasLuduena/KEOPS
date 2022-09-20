import mongoose from 'mongoose';

const usuariosEsquema = new mongoose.Schema(
    {
        numeroDeVentas: {
            type: Number,
            default: 0
        },
        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('Usuarios', usuariosEsquema);