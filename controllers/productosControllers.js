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
        let  {categoria, subcategoria, articulo, nombre, descripcion, precio, stock, dimensiones} = req.body
        let fotos =req.files.foto
        let foto1 =req.files.foto[0]
        let foto2 =req.files.foto[1]
        let foto3 =req.files.foto[2]
        console.log(foto1)

        let respuesta
        let error

        const nuevoProducto = new Producto({categoria, subcategoria, articulo, nombre, descripcion, precio, stock, dimensiones})
        const {_id} = nuevoProducto

        const fileName1 = _id + "a." + foto1.name.split(".")[foto1.name.split(".").length-1]
        const ruta1 = `${__dirname}../../frontend/public/fotos/${fileName1}`

        const fileName2 = _id + "b." + foto2.name.split(".")[foto2.name.split(".").length-1]
        const ruta2 = `${__dirname}../../frontend/public/fotos/${fileName2}`

        const fileName3 = _id + "c." + foto3.name.split(".")[foto3.name.split(".").length-1]
        const ruta3 = `${__dirname}../../frontend/public/fotos/${fileName3}`

        foto1.mv(ruta1, err => {
            if(err){
                console.log(err)
            }
        })

        foto2.mv(ruta2, err => {
            if(err){
                console.log(err)
            }
        })

        foto3.mv(ruta3, err => {
            if(err){
                console.log(err)
            }
        })

        nuevoProducto.fotos = [fileName1, fileName2, fileName3]
        console.log(nuevoProducto)
        try{
        


            
            await nuevoProducto.save()
            
        //     respuesta = nuevoProducto
        }
        catch(error) {
            error = 'Algo salió mal, intente nuevamente'
        }
        // res.json({
        //     success: !error ? true : false,
        //     respuesta: {categoria: nuevoProducto.categoria, subcategoria: nuevoProducto.subcategoria, articulo: nuevoProducto.articulo, nombre: nuevoProducto.nombre, descripcion: nuevoProducto.descripcion, precio: nuevoProducto.precio, stock: nuevoProducto.stock, dimensiones: nuevoProducto.dimensiones, fotos: nuevoProducto.fotos},
        //     error: error 
        // })
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