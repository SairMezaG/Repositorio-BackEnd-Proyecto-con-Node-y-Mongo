const mongoose = require("mongoose")

const UsuariosSchema = new mongoose.Schema(
    {
        Nombre:{
            type: String
        },

        Direccion:{
            type: String
        },

        Telefono:{
            type: Number
        },

        Correo:{
            type: String,
            unique: true
        },

        Password:{
            type: String
        },

        Rol:{
            type:["Operario","Administrador","Proveedor"],
            default:"Operario"
        }

    },
    {
        timestamps: true,
        versionKey: false

    }
)

module.exports = mongoose.model("usuarios", UsuariosSchema)