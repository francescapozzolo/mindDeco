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
import { Modal, Button, Space } from 'antd';

const SeccionConfirmarCompra = (props)=>{
   const {infoDelUsuario, precioTotal, productosAComprar} = props.statesDelPadre
   const [metodoDeEnvioAMostrar, setMetodoDeEnvioAMostrar] = useState('')
   const [metodoDePagoAMostrar, setMetodoDePagoAMostrar] = useState('')
   const [iconoDetalleDelPago, setIconoDetalleDelPago] = useState('')
   const [visible, setVisible] = useState(false);

   useEffect(()=>{
      // console.log(props)
      // console.log(precioTotal)
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

   function success() {
      Modal.success({
        content: (
           <div className="contenedor-modal-ConfirmarCompra">
              <div className="contenedor-tituloModalCompra">
               <h1 className="titulo-ModalCompra fontTitulos">Compra realizada con Exito!</h1>
              </div>
               <div className="contenedorTextoModalCompra">
                  <p className="textoModalCompra1 fontTexto">Gracias por confiar en nostros!</p>
                  <p className="textoModalCompra2 fontTexto">Mientras preparamos su entrega puede continuar navegando por nuestras extensas categorias!</p>
               </div>
           </div>
        ),
        width: '40%',
        
      //   height: '800px' 
      });
    }

   const confirmarCompra = ()=>{
      productosAComprar.map(producto => {
         return props.vaciarCarrito(props.userLogged, producto)
      })
     alert('Felicitaciones! Su compra fue realizada con Exito') 
      success() 
     localStorage.removeItem("infoDeCompraDelUsuario")
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

               {/* Probando Modals */}
               {/* <Button onClick={success}>Success</Button> */}
               {/* <Button type="primary" onClick={() => setVisible(true)}>
                  Open Modal of 1000px width
               </Button> */}
               {/* <Modal
                  title="Modal 1000px width"
                  centered
                  visible={visible}
                  onOk={() => setVisible(false)}
                  onCancel={() => setVisible(false)}
                  width={600}
               >
                  <p>some contents...</p>
                  <p>some contents...</p>
                  <p>some contents...</p>
               </Modal> */}
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
   vaciarCarrito: carritoActions.vaciarCarrito
}

export default connect(mapStateToProps, mapDispatchToProps)(SeccionConfirmarCompra)