const mongoose = require('mongoose');

const OficinaAmbienteSchema = new mongoose.Schema({
    ofiTipo: {
        type: String,
        required: true,
        enum: ["Administrativo", "Formacion"]
    },
    ofiNombre: {
        type: String,
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

module.exports = mongoose.model("oficinaAmbiente", OficinaAmbienteSchema);
