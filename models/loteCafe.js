const mongoose  = require("mongoose");
const loteCafeSchema = mongoose.Schema({
    peso:{
        type:Number,
        required:true
    },
    usuarios:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'usuarios'
    },
    tipoProcesos:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'tiposProcesos'
    },
    variedad:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'variedad'

    }
})
module.exports = mongoose.model('loteCafe',loteCafeSchema)