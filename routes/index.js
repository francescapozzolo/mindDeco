const {Router} = require ('express')
const router = Router()
const validator = require ('../config/validator')
const passport = require ('passport')
const usuariosControllers = require ('../controllers/usuariosControllers')
const productosControllers = require ('../controllers/productosControllers')
const carritoControllers = require('../controllers/carritoControllers')
const mailControllers = require('../controllers/mailControllers')

//RUTAS USUARIOS 
router.route("/usuario/registrarse")
.post(validator, usuariosControllers.registrarUsuario)

router.route("/usuario/loguearse")
.post(usuariosControllers.loguearUsuario)

router.route("/usuario/loginforzado")
.get(passport.authenticate('jwt', {session: false}), usuariosControllers.loginForzado)

router.route("/usuario/botonGoogle")
.post(usuariosControllers.botonGoogle) //Ruta unicamente para el boton de google de native

//RUTAS CARRITO
router.route("/modificarCantidadProducto")
.put(passport.authenticate('jwt', {session: false}),carritoControllers.modificarProducto)

router.route("/carrito")
.put(passport.authenticate('jwt', {session: false}),carritoControllers.agregarProductosAlCarrito)

router.route("/obtenerProductos")
.get(passport.authenticate('jwt', {session: false}),carritoControllers.obtenerProductos)

router.route("/borrarProducto")
.put(passport.authenticate('jwt', {session: false}),carritoControllers.borrarProducto)

router.route("/vaciarCarrito")
.put(passport.authenticate('jwt', {session: false}),carritoControllers.vaciarCarrito)

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

router.route("/productosSubcategoria/:subcategoria")
.get(productosControllers.obtenerProductosSubcategoria)
//RUTAS MAIL

router.route("/mensaje")
.post(mailControllers.enviarMail)
module.exports = router