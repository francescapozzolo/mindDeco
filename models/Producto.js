const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
	articulo: {type: String, required: true}, 
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},		
    categoria: {type: String, required: true}, 		
    subcategoria: {type: String, required: true},	
    precio: {type: Number, required: true},		
    stock: {type: Number, required: true}, 	
    fotos: [String],
    dimensiones: {type: String},
    descuento: {type: Number, default: 0},
    unidadesVendidas: {type: Number, default: 0}
})

const Producto = mongoose.model('product', productoSchema)

module.exports = Producto;