const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
        nombre: {type: String, required: true},
        apellido: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        foto: {type: String, required: true},
        provincia: {type: String, required: true},
        administrador: {type: Boolean, default: false},
        google: {type: Boolean, default: false},
        carrito: [{idProducto:{type: mongoose.Types.ObjectId, ref: 'product'}, cantidad: {type: Number, default: 1}}],
        favoritos: [{type: mongoose.Types.ObjectId, ref: 'product'}]
})
     
const Usuario = mongoose.model('user', usuarioSchema)

module.exports = Usuario