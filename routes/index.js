const {Router} = require ('express')
const router = Router()
const validator = require ('../config/validator')
const passport = require ('passport')
const usuariosControllers = require ('../controllers/usuariosControllers')
const productosControllers = require ('../controllers/productosControllers')
const carritoControllers = require('../controllers/carritoControllers')

//RUTAS USUARIOS 
router.route("/usuario/registrarse")
.post(/*validator,*/ usuariosControllers.registrarUsuario)

router.route("/usuario/loguearse")
.post(usuariosControllers.loguearUsuario)

router.route("/usuario/loginforzado")
.get(passport.authenticate('jwt', {session: false}), usuariosControllers.loginForzado)

//RUTAS CARRITO
router.route("/modificarCantidadProducto")
.put(passport.authenticate('jwt', {session: false}),carritoControllers.modificarProducto)

router.route("/carrito")
.put(passport.authenticate('jwt', {session: false}),carritoControllers.agregarProductosAlCarrito)

router.route("/obtenerProductos")
.get(passport.authenticate('jwt', {session: false}),carritoControllers.obtenerProductos)

router.route("/borrarProducto")
.put(passport.authenticate('jwt', {session: false}),carritoControllers.borrarProducto)

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