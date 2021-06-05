import React, { useEffect, useState } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import locationIcon from '@iconify-icons/carbon/location';
import truckIcon from '@iconify-icons/bi/truck';
import { NavLink } from 'react-router-dom';
import creditCard2Front from '@iconify-icons/bi/credit-card-2-front';
import creditCard from '@iconify-icons/mdi-light/credit-card';
import moneyBill from '@iconify-icons/uil/money-bill';
import moneyIcon from '@iconify-icons/carbon/money';
import carritoActions from '../../redux/actions/carritoActions'
import { connect } from 'react-redux';

const SeccionConfirmarCompra = (props)=>{
   const {infoDelUsuario, precioTotal, productosAComprar} = props.statesDelPadre
   const [metodoDeEnvioAMostrar, setMetodoDeEnvioAMostrar] = useState('')
   const [metodoDePagoAMostrar, setMetodoDePagoAMostrar] = useState('')
   const [iconoDetalleDelPago, setIconoDetalleDelPago] = useState('')

   useEffect(()=>{
      console.log(props)
      console.log(precioTotal)
      if(infoDelUsuario.envioElegido === "recibirCompra"){
         setMetodoDeEnvioAMostrar("Recibir en Domicilio")
      }else if(infoDelUsuario.envioElegido === "retiroPorSucursal"){
         setMetodoDeEnvioAMostrar("Retiro en Sucursal")
      } else if(infoDelUsuario.envioElegido === "retiroPorCorreo"){
         setMetodoDeEnvioAMostrar("Retiro por Correo Argentino")
      }  

      if(infoDelUsuario.metodoDePago === "tarjetaDeDebito"){
         setMetodoDePagoAMostrar(`Visa Debito **** ${infoDelUsuario.pagoConTarjeta.number.slice(infoDelUsuario.pagoConTarjeta.number.trim().length-4).trim()}`)
      } else if(infoDelUsuario.metodoDePago === "tarjetaDeCredito"){
         setMetodoDePagoAMostrar(`Visa Credito **** ${infoDelUsuario.pagoConTarjeta.number.slice(infoDelUsuario.pagoConTarjeta.number.trim().length-4).trim()}`)
      } else if(infoDelUsuario.pagoEnEfectivo === "rapiPago"){
         setMetodoDePagoAMostrar(`Efectivo en RapiPago `)
      } else if(infoDelUsuario.pagoEnEfectivo === "pagoFacil"){
         setMetodoDePagoAMostrar(`Efectivo en Pago Fácil`)
      }else if(infoDelUsuario.pagoEnEfectivo === "provinciaNet"){
         setMetodoDePagoAMostrar(`Efectivo en Provincia NET`)
      }

      if(infoDelUsuario.pagoEnEfectivo === false){
         setIconoDetalleDelPago('tarjeta')
      } else {
         setIconoDetalleDelPago('cash')
      }

      // if(infoDelUsuario)
   },[])

   const confirmarCompra = ()=>{
     alert('Felicitaciones! Su compra fue realizada con Exito') 
     localStorage.removeItem("infoDeCompraDelUsuario")
     productosAComprar.map(producto => {
        props.borrarProducto(props.userLogged, producto)
     })
   }

   const volver = ()=>{
      props.statesDelPadre.setPasoDeCompra("paso3-metodoDePago")
   }

   const modificarDatos = ()=>{
      props.statesDelPadre.setPasoDeCompra('paso1-direcciones')
   }

   const modificarMetodoDeEnvio = ()=>{
      props.statesDelPadre.setPasoDeCompra('paso2-metodoDeEnvio')
   }

   const modificarMetodoDePago = ()=>{
      props.statesDelPadre.setPasoDeCompra('paso3-metodoDePago')
   }



   return (
      <>
         {/* <h1>Soy el componente SeccionConfirmarCompra</h1> */}
         <div className="contenedorDeTargetas">
            <p className="fontNegrita texto-detalleDeLaEntrega fontTexto">Detalle de la Entrega</p>
            <div className="targeta-confirmarCompra">
               <div className="contenedorIconoDireccion-ConfirmarCompra">
                  <Icon icon={locationIcon} className="iconoDireccion-ConfirmarCompra" />                
               </div>
               <div className="contenedorDeDatos-ConfirmarCompra">
                  <p className="direccionDeEntrega-confirmarCompra fontTexto">{infoDelUsuario.direccion}</p>
                  <p className="info-confirmarCompra fontTexto fontSize15">{infoDelUsuario.ciudad} - {infoDelUsuario.provincia}</p>
                  <p className="info-confirmarCompra fontTexto">{infoDelUsuario.nombreyapellidos} - {infoDelUsuario.telefono}</p>
               </div>
               <p className="textoModificar fontTexto" onClick={()=>modificarDatos()}>Modificar</p>
            </div>

            <div className="targeta-confirmarCompra">
               <div className="contenedorIconoDireccion-ConfirmarCompra">
                  <Icon icon={truckIcon} className="iconoDireccion-ConfirmarCompra" />                
               </div>
               <div className="contenedorDeDatos-ConfirmarCompra">
                  <p className="direccionDeEntrega-confirmarCompra fontTexto">{metodoDeEnvioAMostrar}</p>
                  <p className="info-confirmarCompra fontTexto fontSize15">Llega en 10 dias habiles</p>
               </div>
               <p className="textoModificar fontTexto" onClick={()=>modificarMetodoDeEnvio()}>Modificar</p>
            </div>

            <p className="fontTexto fontNegrita texto-DetalleDelPago">Detalle del Pago</p>
            <div className="targeta-confirmarCompra">
               <div className="contenedorIconoDireccion-ConfirmarCompra">
                  {iconoDetalleDelPago === 'cash' 
                     ?  <Icon icon={moneyIcon} className="cashIcon" />
                     : <Icon icon={creditCard} className="debitCard-icon" />
                  }
               </div>
               <div className="contenedorDeDatos-ConfirmarCompra">
                  <p className="direccionDeEntrega-confirmarCompra fontTexto">{metodoDePagoAMostrar}</p>
                  {infoDelUsuario.metodoDePago === "efectivo" &&  <p className="info-confirmarCompra fontTexto fontSize15">Solamente en sucursales abiertas</p>}
                  {/* <p className="info-confirmarCompra fontTexto">Mateo Lorenzo - 11 4039-2404</p> */}
               </div>
               <p className="textoModificar fontTexto" onClick={()=>modificarMetodoDePago()}>Modificar</p>
            </div>
            <div className="contenedor-botonesComprar">
               <p className="boton-continuar fontTitulos" onClick={()=>volver()} >Volver</p>
               <NavLink to="/">
                  <p className="botonComprar-confirmarCompra fontTitulos" onClick={()=>confirmarCompra()}>Comprar!</p>
               </NavLink>
            </div>
         </div>
      </>
   )
}

const mapStateToProps = state => {
   return { 
       userLogged: state.authReducer.userLogged,
    }
}

const mapDispatchToProps = {
   borrarProducto: carritoActions.borrarProducto
}

export default connect(mapStateToProps, mapDispatchToProps)(SeccionConfirmarCompra)