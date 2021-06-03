const Producto = require('../models/Producto')

const productosControllers = {
    obtenerTodosLosProductos: async (req, res) => {
        try{
            const todosProductos = await Producto.find()
            res.json({success:true, respuesta: todosProductos}) 
        }
        catch(error){
            res.json({success:false, respuesta: 'Algo salió mal, intente nuevamente'})}
    },

    cargarProductos: async (req, res) => {
        console.log(req.files)
        let  {categoria, subcategoria, articulo, nombre, descripcion, precio, stock, dimensiones, fotos} = req.body

        let respuesta
        let error
        let nuevoProducto

        try{
            nuevoProducto = new Producto({categoria, subcategoria, articulo, nombre, descripcion, precio, stock, dimensiones, fotos})
            await nuevoProducto.save()
            
            respuesta = nuevoProducto
        }
        catch(error) {
            error = 'Algo salió mal, intente nuevamente'
        }
        res.json({
            success: !error ? true : false,
            respuesta: {categoria: nuevoProducto.categoria, subcategoria: nuevoProducto.subcategoria, articulo: nuevoProducto.articulo, nombre: nuevoProducto.nombre, descripcion: nuevoProducto.descripcion, precio: nuevoProducto.precio, stock: nuevoProducto.stock, dimensiones: nuevoProducto.dimensiones, fotos: nuevoProducto.fotos},
            error: error 
        })
    },

    obtenerProductoEspecifico: async (req, res) => {
        try{
            const idProducto = req.params.id
            const productoEspecifico = await Producto.findOne({_id: idProducto})
            res.json({success:true, respuesta: productoEspecifico})
        }
        catch(error){
            res.json({success:false, respuesta: 'Algo salió mal, intente nuevamente'})}
    },

    eliminarProducto: async (req, res) => {
        try{
            const idProducto = req.params.id
            await Producto.findOneAndRemove({_id: idProducto})
            res.json({success:true})
        }
        catch(error){
            res.json({success:false, respuesta: 'Algo salió mal, intente nuevamente'})}
    },

    modificarProducto: async (req, res) => {
        try{
            const idProducto = req.params.id
            const productoModificado = await Producto.findByIdAndUpdate({_id: idProducto}, req.body, {new: true})
            res.json({success:true, respuesta: productoModificado})
        }
        catch(error){
            res.json({success:false, respuesta: 'Algo salió mal, intente nuevamente'})}
    },

    obtenerProductosCategoria: async(req, res) => {
        try {
            const categoriaBuscada = req.params.categoria
            const productosCategoria = await Producto.find({categoria: categoriaBuscada})
            res.json({success:true, respuesta: productosCategoria}) 
        } catch {
            res.json({success:false, respuesta: 'Algo salió mal, intente nuevamente'})
        }
    },

    obtenerProductosSubcategoria: async(req, res) => {
        try {
            const subcategoriaBuscada = req.params.subcategoria
            const productosSubcategoria = await Producto.find({subcategoria: subcategoriaBuscada})
            res.json({success:true, respuesta: productosSubcategoria}) 
        } catch {
            res.json({success:false, respuesta: 'Algo salió mal, intente nuevamente'})
        }
    },

}

module.exports = productosControllers