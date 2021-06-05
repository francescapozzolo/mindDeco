import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CreditCard from '../componentes/pasarela de pago/CreditCard'
import TextField from "@material-ui/core/TextField";
import SeccionDirecciones from '../componentes/pasarela de pago/SeccionDirecciones'
import SeccionMetodoDeEnvio from '../componentes/pasarela de pago/SeccionMetodoDeEnvio'
import SeccionMetodoDePago from '../componentes/pasarela de pago/SeccionMetodoDePago'
import axios from 'axios'
import carritoActions from '../redux/actions/carritoActions';
import SeccionConfirmarCompra from '../componentes/pasarela de pago/SeccionConfirmarCompra';
import PagoEnEfectivo from '../componentes/pasarela de pago/PagoEnEfectivo';

const PasarelaDePago = (props)=>{
   // const [metodoSeleccionado, setMetodoSeleccionado] = useState("")
   const [pasoDeCompra, setPasoDeCompra] = useState('paso1-direcciones')
   // const [metodoDePago, setMetodoDePago] = useState("")
   const [datosDeTarjetaFueronPuestos, setDatosDeTarjetaFueronPuestos] = useState(false)
   const [productosAComprar, setProductosAComprar] = useState([])
   const [precioTotal, setPrecioTotal] = useState(0)
   const [infoDelUsuario, setInfoDelUsuario] = useState({nombreyapellidos: '', direccion: '', codigoPostal: '', ciudad: '', provincia: '', telefono: '', descripcionExtra: '', metodoDeEnvio: '', metodoDePago: '', pagoEnEfectivo: false, pagoConTarjeta: false})


   useEffect(()=>{
      const cargarProductosAComprar = async()=>{
         if (props.userLogged){
            const respuesta = await props.obtenerProductos(props.userLogged)
            setProductosAComprar(respuesta.carrito)
            let precioAPagar = 0 
            respuesta.carrito.map(producto => precioAPagar = precioAPagar + producto.idProducto.precio * producto.cantidad) 
            // if(precioAPagar.length > 3){

            // }
            setPrecioTotal(precioAPagar)
         }
      }      
      cargarProductosAComprar()
   },[props])


   // console.log(infoDelUsuario)
   return( 
      <div className="contenedorGeneral-pagina-pasarelaDePago">
         <div className="contenedorDeFormularios">

            <p className="tituloDirecciones-pasarelaDePago fontTitulos" >1. Direcciones</p>
            <div className="barraHorizontal-Pasarela"></div>
            {pasoDeCompra === "paso1-direcciones" && <SeccionDirecciones statesDelPadre={{setPasoDeCompra, infoDelUsuario, setInfoDelUsuario}}/> }            
            {/* {pasoDeCompra === "paso1-direcciones" && <SeccionDirecciones setPasoDeCompra={setPasoDeCompra}/> }             */}

            <p className="tituloMetodoEnvio-pasarelaDePago fontTitulos" >2. Metodo de Envio</p>
            <div className="barraHorizontal-Pasarela"></div>
            {pasoDeCompra === "paso2-metodoDeEnvio" && <SeccionMetodoDeEnvio statesDelPadre={{setPasoDeCompra, infoDelUsuario, setInfoDelUsuario}} />}
            {/* {pasoDeCompra === "paso2-metodoDeEnvio" && <SeccionMetodoDeEnvio setPasoDeCompra={setPasoDeCompra} />} */}

            <p className="tituloEnvio-pasarelaDePago fontTitulos" >3. Metodo de Pago</p>
            <div className="barraHorizontal-Pasarela"></div>
            {pasoDeCompra === "paso3-metodoDePago" && <SeccionMetodoDePago statesDelPadre={{infoDelUsuario, setInfoDelUsuario, datosDeTarjetaFueronPuestos, setPasoDeCompra}} />}

            {pasoDeCompra === "pasoOpcional-pagoEnEfectivo" && <PagoEnEfectivo statesDelPadre={{setPasoDeCompra, infoDelUsuario, setInfoDelUsuario}}/>}
            {pasoDeCompra === "pasoOpcional-pagarConTarjeta" && <CreditCard statesDelPadre={{setPasoDeCompra, infoDelUsuario, setInfoDelUsuario}}/>}

            <p className="tituloEnvio-pasarelaDePago fontTitulos" >4. Confirmar Compra</p>
            <div className="barraHorizontal-Pasarela"></div>
            {pasoDeCompra === "paso4-confirmarCompra" && <SeccionConfirmarCompra statesDelPadre={{setPasoDeCompra, infoDelUsuario, precioTotal, productosAComprar}} />}



         </div>

         <div className="contenedorLateral">
            <div className="subcontenedorLateral">

               <p className="estasComprando-text fontTitulos">Estas Comprando:</p>

               {productosAComprar.map(producto =>{
                  return(
                     <div key={producto._id} >
                        <div className="productoAComprar">
                           <div className="fotoDeProductoAComprar" style={{backgroundImage: `url(${producto.idProducto.fotos[0]})`}}></div>
                           <div className="infoProductoAComprar">
                              <p className="nombre-productoAComprar fontTitulos">{producto.idProducto.nombre.charAt(0).toUpperCase() + producto.idProducto.nombre.slice(1) }</p>
                              <div className="contenedor-UnidadesyPrecio">
                                 <div className="contenedor-infoDeProducto">
                                    <p className="unidades-productoAComprar fontTexto"> Unidades: </p>
                                    <p className="fontTexto fontSize18">{producto.cantidad}</p>
                                 </div>
                                 <div className="contenedor-infoDeProducto">
                                    <p className="fontSize18 fontTexto texto-valorPorUnidad"> Valor por Unidad: </p>
                                    <p className="fontTexto fontSize18 valorProducto ">$ {producto.idProducto.precio}</p>
                                 </div>
                                 <div className="contenedor-infoDeProducto">
                                    <p className="fontSize18 fontNegrita fontTexto"> Subtotal:</p>
                                    <p className="fontTexto fontNegrita fontSize18">$ {producto.idProducto.precio * producto.cantidad}</p> 
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="barra-horizonta-aside"></div>
                     </div>
                  )
               })}


               <div className="contenedor-envioYTotal">
                  <div className="subcontenedor-envioYTotal">
                     <p className="fontSize25 fontTexto">Envio:</p>
                     <p className="fontSize25 fontTexto">Gratis</p>
                  </div>
                  <div className="subcontenedor-envioYTotal">
                     <p className="fontSize25 fontTexto">Total:</p>
                     <p className="fontSize25 fontTexto">$ {precioTotal}</p>
                  </div>
               </div>

            </div>
         </div>
         
      </div>
   )
}

const mapStateToProps = (state)=>{
   return {
      userLogged: state.authReducer.userLogged
   }
}

const mapDispatchToProps = {
   obtenerProductos: carritoActions.obtenerProductos
}

export default connect(mapStateToProps, mapDispatchToProps)(PasarelaDePago)