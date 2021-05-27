const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
        nombre: {type: String, required: true},
        apellido: {type: String, required: true},
        email: {type: String, required: true},
        contraseña: {type: String, required: true},
        foto: {type: String, required: true},
        provincia: {type: String, required: true},
        administrador: {type: boolean, default: false},
        carrito:  [String],
        favoritos: [String]	
})

const Usuario = mongoose.model('user', usuarioSchema)

module.exports = Usuario