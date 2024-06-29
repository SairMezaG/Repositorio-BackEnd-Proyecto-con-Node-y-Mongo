const mongoose = require('mongoose');

const tipoSolucion = ["Parcial", "Definitiva"]; // Definir los valores válidos para tipoSolucion

const SolucionCasoSchema = new mongoose.Schema({
    solCaso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Caso', // Hace referencia al modelo Caso
        required: true
    },
    solProcedimiento: {
        type: String,
        maxlength: 2000,
        required: true
    },
    solTipoSolucion: {
        type: String,
        maxlength: 20,
        required: true,
        enum: tipoSolucion
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

// Método para devolver el tipo de solución como string (similar a __str__ de los modelos de Django)
SolucionCasoSchema.methods.toString = function() {
    return this.solTipoSolucion;
};

module.exports = mongoose.model("solucionCaso", SolucionCasoSchema);
