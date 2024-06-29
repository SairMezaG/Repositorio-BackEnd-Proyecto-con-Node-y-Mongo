const mongoose = require('mongoose');

const SolicitudSchema = new mongoose.Schema({
    solUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios', // Hace referencia al modelo User
        required: true
    },
    solDescripcion: {
        type: String,
        required: true,
        maxlength: 1000
    },
    solOficinaAmbiente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OficinaAmbiente', // Hace referencia al modelo OficinaAmbiente
        required: true
    },
    fechaHoraCreacion: {
        type: Date,
        required: true,
        default: Date.now
    },
    fechaHoraActualizacion: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {
    timestamps: { createdAt: 'fechaHoraCreacion', updatedAt: 'fechaHoraActualizacion' },
    versionKey: false
});

// Método para devolver la descripción como string (similar a __str__)
SolicitudSchema.methods.toString = function() {
    return this.solDescripcion;
};

module.exports = mongoose.model("solicitud", SolicitudSchema);
