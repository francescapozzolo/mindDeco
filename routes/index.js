const {Router} = require ('express')
const router = Router()
const validator = require ('../config/validator')
const passport = require ('passport')
const usuariosControllers = require ('../controllers/usuariosControllers')
const productosControllers = require ('../controllers/productosControllers')


//RUTAS USUARIOS 
router.route("/usuario/registrarse")
.post(/*validator,*/ usuariosControllers.registrarUsuario)

router.route("/usuario/loguearse")
.post(usuariosControllers.loguearUsuario)

router.route("/usuario/loginforzado")
.get(/*passport.authenticate('jwt', {session: false}),*/ usuariosControllers.loginForzado)


//RUTAS PRODUCTOS 
router.route("/productos")
.get(productosControllers.obtenerTodosLosProductos)
.post(productosControllers.cargarProductos)

router.route("/producto/:id")
.get(productosControllers.obtenerProductoEspecifico)
.delete(productosControllers.eliminarProducto)
.put(productosControllers.modificarProducto)

router.route("/productos/:categoria")
.get(productosControllers.obtenerProductosCategoria)

module.exports = router