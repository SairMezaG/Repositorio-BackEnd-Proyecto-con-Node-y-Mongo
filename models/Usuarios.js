const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsuariosSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    userTipo: {
        type: String,
        required: true,
        enum: ["Administrativo", "Instructor"]
    },
    userFoto: {
        type: String, // Guardamos la URL de la imagen
        required: false,
        default: null
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

// Método para cifrar la contraseña antes de guardar (Consultar mas sobre esto)
UsuariosSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Método para comparar la contraseña ingresada con la almacenada (Consultar mas sobre esto)
UsuariosSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// Método para devolver el username como string (similar a __str__ de los modelos de Django)
UsuariosSchema.methods.toString = function() {
    return this.username;
};

module.exports = mongoose.model("usuarios", UsuariosSchema);