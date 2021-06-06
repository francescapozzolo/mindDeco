import { useEffect, useState } from "react"
import { connect } from "react-redux"
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify-icons/la/shopping-cart'; 
import carritoActions from "../redux/actions/carritoActions";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import mailActions from "../redux/actions/mailActions";

import productosActions from "../redux/actions/productosActions";

const Producto = (props)=>{
   const [producto, setProducto] = useState(null)
   const idProducto = props.match.params.id
   const [prodLikeado, setProdLikeado] = useState(false)
   const [prodFavoriteado, setProdFavoriteado] = useState(false)
   const [mail, setMail] = useState({destinatario: '', nombre: '', asunto: 'consulta', cuerpo: ''})
   
   useEffect(()=> {
      window.scrollTo(0, 0)
      setearProducto()
   }, [])

   const setearProducto = async () => {
      const respuesta = await props.obtenerProductoPorId(idProducto)
      setProducto(respuesta)
   }
  
   if(!producto){
      return <div className="sk-cube-grid">
               <div className="sk-cube sk-cube1"></div>
               <div className="sk-cube sk-cube2"></div>
               <div className="sk-cube sk-cube3"></div>
               <div className="sk-cube sk-cube4"></div>
               <div className="sk-cube sk-cube5"></div>
               <div className="sk-cube sk-cube6"></div>
               <div className="sk-cube sk-cube7"></div>
               <div className="sk-cube sk-cube8"></div>
               <div className="sk-cube sk-cube9"></div>
         </div>
   }

const likear = () => {
   setProdLikeado(!prodLikeado)
}

const favoritear = () => {
   setProdFavoriteado(!prodFavoriteado)
}

const agregandoProducto = async (item) => {
   if(props.userLogged){
       const response = await props.agregarProductoAlCarrito(props.userLogged, item)
       if(response && response.success) {
           return toast.success('Se agrego al carrito')
       }else{
           return toast.warning('Este producto ya esta en el carrito')
       }
   } else {
       return toast.warning('Debe iniciar sesión para poder comprar')
   }
}

const leerInput = (e, campo) => {
    setMail({
        ...mail, 
        [campo]: e.target.value
    })
}

const enviarMail = (e) => {
    e.preventDefault()
    props.mandarMail(mail)
    toast.warning('Tu consulta ha sido enviada!')
    setMail({destinatario: '', nombre: '', cuerpo: ''})
}

if(producto){
   props.history.push('/categoria')
}

   return (
      <div id="p-contenedorPrincipalProducto">
         <div className="p-seccionImpar">
            <div className="p-contenedorFotoProdInv"  style={{backgroundImage: `url(${producto.fotos[0]})`}}>
            </div>
            <div className="p-contenedorDescripcionProd">
               <p className="p-descripcionDivision fontTitulos">{producto.categoria.toUpperCase()}<span className="barrita-divisora">|</span> {producto.subcategoria.toUpperCase()} <span className="barrita-divisora">|</span> {producto.articulo.toUpperCase()}</p>
               <h4 className="nombreProducto-CompIndividual fontTitulos">{producto.nombre.charAt(0).toUpperCase() + producto.nombre.slice(1, producto.nombre.legth)}</h4>
               <p className="descripcion-componenteIndividual fontTexto"><span className="tituloDescripcion-CompIndividual fontTitulos"></span>{producto.descripcion}</p>
            </div>
         </div>
         <div id="p-seccion2">
            <div className="p-contenedorFotoProdInv"  style={{backgroundImage: `url(${producto.fotos[1]})`}}>
            </div>
            <div className="p-contenedorDescripcionProd">
               <div className="l-contenedor-icono-de-imagen-2 p-iconoCarrito">
                     <div className="l-subContenedor-icono-de-imagen" onClick={()=>agregandoProducto(producto)}><Icon icon={shoppingCart} className="l-icono-de-imagen2 p-iconoCarrito" /></div>
               </div>
               <p className="precioProducto-componenteIndividual fontTexto">Precio: ${producto.precio}</p>
               <div className="contenedor-valoracionDeProducto"> 
                  <div><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
                  <p className="opcion-AgregarOpinion fontTexto"><span className="barrita-divisora">|</span></p><label className="fontTexto p-agregarOpinion" htmlFor="inputMail">Agregar una opinión</label> 
               </div>
               <div className="p-contenedorIconosAcciones">
                  <div>
                     {prodLikeado 
                     ? <BookmarkIcon fontSize='large' style={{color: 'red'}} onClick={likear}/>
                     : <BookmarkBorderIcon fontSize='large' onClick={likear}/>
                     }
                  </div>
                  <div>
                     {prodFavoriteado 
                     ? <FavoriteIcon style={{color: 'red'}} fontSize='large' onClick={favoritear}/> 
                     : <FavoriteBorderIcon fontSize='large' onClick={favoritear}/>
                     }
                  </div>
               </div>
               <div id="p-contenedorFotosChicas">
                  <div style={{backgroundImage: `url(${producto.fotos[0]})`}}></div>
                  <div style={{backgroundImage: `url(${producto.fotos[1]})`}}></div>
                  <div style={{backgroundImage: `url(${producto.fotos[2]})`}}></div>
               </div>
            </div>
         </div>
         <div className="p-seccionImpar p-formProdInd">
            <div className="p-contenedorFotoProdInv"  style={{backgroundImage: `url(${producto.fotos[2]})`}}>
            </div>
            <div className="p-contenedorDescripcionProd"> 
                  <div className="p-titEnvianosConsulta">
                     <h2 className="fontTitulos p-envianos">Envíanos </h2><h2 className="fontCursive p-tuConsulta">tu consulta</h2>
                  </div>
                  <input type="text" id="inputMail" className="fontTexto" placeholder="Ingresá tu mail" name="destinatario" value={mail.destinatario} onChange={(e)=>leerInput(e, 'destinatario')}></input>
                  <input type="text" className="fontTexto" placeholder="Ingresá tu nombre" name="nombre" value={mail.nombre} onChange={(e)=>leerInput(e, 'nombre')}></input>
                  <textarea className="fontTexto" placeholder="Ingresá tu consulta" name="cuerpo" value={mail.cuerpo} onChange={(e)=>leerInput(e, 'cuerpo')}></textarea>
                  <button className="fontTitulos" onClick={enviarMail}>ENVIAR CONSULTA</button>
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state)=>{
   return {
      todosLosProductos: state.productosReducer.todosLosProductos,
      userLogged: state.authReducer.userLogged
   }
}

const mapDispatchToProps ={
   agregarProductoAlCarrito: carritoActions.agregarProductoAlCarrito,
   mandarMail: mailActions.mandarMail,
   obtenerProductoPorId: productosActions.obtenerProductoPorId,
}

export default connect(mapStateToProps, mapDispatchToProps)(Producto)