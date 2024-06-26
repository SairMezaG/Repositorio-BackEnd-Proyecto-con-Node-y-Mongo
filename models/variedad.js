const mongoose = require("mongoose")

const variedadSchema = new mongoose.Schema(
    {
        Nombre:{
            type: String,
            unique: true
        }
    },
    {
        timestamps: true,
        versionKey: false

    }
)

module.exports = mongoose.model("variedad", variedadSchema)