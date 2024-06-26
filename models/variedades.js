const mongoose = require("mongoose")

const VariedadesSchema = new mongoose.Schema(
    {
        Nombre:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false

    }
)

module.exports = mongoose.model("variedades", VariedadesSchema)