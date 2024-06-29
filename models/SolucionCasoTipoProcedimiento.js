const mongoose = require('mongoose');

const SolucionCasoTipoProcedimientoSchema = new mongoose.Schema({
    solSolucionCaso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SolucionCaso', // Hace referencia al modelo SolucionCaso
        required: true
    },
    solTipoProcedimiento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoProcedimiento', // Hace referencia al modelo TipoProcedimiento
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model("solucionCasoTipoProcedimientos", SolucionCasoTipoProcedimientoSchema);
