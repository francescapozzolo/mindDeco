const Producto = require('../models/Producto')
var cloudinary = require('cloudinary').v2

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
        let  {categoria, subcategoria, articulo, nombre, descripcion, precio, stock, dimensiones} = req.body
        let fotos =req.files.foto

        let respuesta
        let error
        try{
            let arrayUrl = []
            const armarUrl = async (tempFilePath) => {
                const {url} = await cloudinary.uploader.upload(tempFilePath)
                arrayUrl.push(url)
                if (arrayUrl.length === fotos.length){
                    const nuevoProducto = new Producto({categoria, subcategoria, articulo, nombre, descripcion, precio, stock, dimensiones, fotos: arrayUrl})
                    await nuevoProducto.save()
                    res.json({success: true, respuesta: nuevoProducto})
                }
            }
            fotos.map(foto => armarUrl(foto.tempFilePath))
        }
        catch(error) {
            error = 'Algo salió mal, intente nuevamente'
        }
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