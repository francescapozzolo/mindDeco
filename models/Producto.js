const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
	articulo: {type: String, required: true}, 	
    descripcion: {type: String, required: true},		
    categoria: {type: String, required: true}, 		
    subcategoria: [{type: String, required: true}],	
    precio: {type: Number, required: true},		
    stock: {type: Number, required: true}, 	
    fotos:	[String],			
    info_tecnica: {type: String, required: true}	
})

const Producto = mongoose.model('product', productoSchema)

module.exports = Producto;