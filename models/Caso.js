const mongoose = require('mongoose');



const CasoSchema = new mongoose.Schema({
    casSolicitud: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Solicitud', // Hace referencia al modelo Solicitud
        required: true
    },
    casCodigo: {
        type: String,
        required: true,
        unique: true
    },
    casUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios', // Hace referencia al modelo User
        required: true
    },
    casEstado: {
        type: String,
        required: true,
        enum:["Solicitada", "En Proceso", "Resuelta"],
        default: 'Solicitada'
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

// Método para devolver el código del caso como string (similar a __str__ de los modelos de Django)
CasoSchema.methods.toString = function() {
    return this.casCodigo;
};

module.exports = mongoose.model("caso", CasoSchema);
