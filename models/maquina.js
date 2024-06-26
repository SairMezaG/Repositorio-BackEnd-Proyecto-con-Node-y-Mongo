const mongoose = require("mongoose")
const maquinaSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        require:true,
        enum:['Activo','Inactivo']
    }
})
module.exports = mongoose.model('maquina', maquinaSchema)