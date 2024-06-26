const mongoose = require('mongoose')
const tiposProcesoSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('tiposProceso', tiposProcesoSchema);