import mongoose from 'mongoose';

const usuariosEsquema = new mongoose.Schema(
    {
        numeroDeVentas: {
            type: Number,
            default: 0
        },
        numeroDeVentasPropias: {
            type: Number,
            default: 0
        },
        numeroDeVentasGrafico: {
            type: String,
            default: ""
        },
        clics: {
            type: Number,
            default: 0
        },
        clicsGrafico: {
            type: String,
            default: ""
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
        },
        urlAcortado: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model('Usuarios', usuariosEsquema);