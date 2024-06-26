const mongoose  = require("mongoose");
const loteCafe = require("./loteCafe");


const seguimientoSchema = mongoose.Schema({
    fecha:{
        type:Date,
        required:true
    },
    estado:{
        type:String,
        require:true,
        enum:['Operando','Fuera de servicio','Mantenimiento']
    },
    maquina:{
        type:String,
        required:true
    },
    loteCafe:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref : "maquina"
    },
    usuarios:{
        type:String,
        required:true
    },
    idProceso:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"tipoProceso"
    }
})
module.exports = mongoose.model('seguimiento',seguimientoSchema)