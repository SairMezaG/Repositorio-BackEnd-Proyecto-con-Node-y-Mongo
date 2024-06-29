const mongoose = require('mongoose');

const TipoProcedimientoSchema = new mongoose.Schema({
    tipNombre: {
        type: String,
        required: true,
        unique: true
    },
    tipDescripcion: {
        type: String,
        maxlength: 1000,
        default: null
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

// Método para devolver el nombre del tipo de procedimiento como string (similar a __str__ de los modelos de Django)
TipoProcedimientoSchema.methods.toString = function() {
    return this.tipNombre;
};

module.exports = mongoose.model("tipoProcedimiento", TipoProcedimientoSchema);
