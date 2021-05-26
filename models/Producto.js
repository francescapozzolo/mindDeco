const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
 
})

const Producto = mongoose.model('product', productoSchema)

module.exports = Producto