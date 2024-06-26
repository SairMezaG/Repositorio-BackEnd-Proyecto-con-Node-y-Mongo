const mongoose = require("mongoose")

const usuariosSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        cedula:{
            type:String,
            required:true,
            unique:true
        },
        nombreCompleto:{
            type:String,
            required:true
        },
        telefono:{
            type:Number,
            required:true
        },
        direccion:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        estado:{
            type:Boolean,
            require:true
        },
        foto:{
            type:String,
            require:true
        },
        tipoUsuario:{
            type:String,
            enum: ['Administrador','Operario','Proveedor'],
            require:true
        }
    },
    {
        timestamps: true,
        versionKey: false

    }
)

module.exports = mongoose.model("usuarios", usuariosSchema)