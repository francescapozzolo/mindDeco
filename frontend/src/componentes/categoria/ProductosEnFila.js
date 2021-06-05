import React, { useEffect } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import sharpGridView from '@iconify-icons/ic/sharp-grid-view';
import menuIcon from '@iconify-icons/icomoon-free/menu';
import roundMenu from '@iconify-icons/ic/round-menu';
import { useState } from 'react';
import searchOutlined from '@iconify-icons/ant-design/search-outlined';
// import cartIcon from '@iconify-icons/topcoat/cart';
import shoppingCart from '@iconify-icons/la/shopping-cart'; 
import {connect} from "react-redux"
import carritoActions from '../../redux/actions/carritoActions'
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductosEnFila = (props)=>{

   const [mouseIsOnCard, setMouseIsOnCard] = useState(false)
   const [targetaHoveada, setTargetaHoveada] = useState("")

   const mostrarIconos = (elementoHoveado)=>{
      setMouseIsOnCard(true)
      setTargetaHoveada(elementoHoveado)
  }
  const agregandoProducto = async (producto) => {
      const response = await props.agregarProductoAlCarrito(props.userLogged, producto)
      if(response.success) {
         return toast.success('Se agrego al carrito')
      }else{
         return toast.success('Este producto ya esta en el carrito')
      }
  }
   return(
      <>
         {props.infoImportante.productosAMostrar.map(producto => {
            return(
               <>
               <div key={producto._id} className="list-card" onMouseOver={(e)=>mostrarIconos(producto._id)} onMouseLeave={()=>setMouseIsOnCard(false)} >
                  <div className="contenedor-foto-listCard">
                    

                     <div className={!(mouseIsOnCard & targetaHoveada === producto._id) ? " foto-listCard-active" : "foto-listCard"} style={{backgroundImage: `url(${producto.fotos[0]})`}}>
                        {(mouseIsOnCard & (targetaHoveada === producto._id)) 
                           ?  <div className="contenedor-iconosDeImagen"> 
                                 <div className="l-contenedor-icono-de-imagen-1">
                                    <NavLink to={`/producto/${producto._id}`} className="l-subContenedor-icono-de-imagen"><Icon icon={searchOutlined} className="l-icono-de-imagen1"/></NavLink>

                                 </div>
                                 <div className="l-contenedor-icono-de-imagen-2">
                                    <div className="l-subContenedor-icono-de-imagen" onClick={()=>agregandoProducto(producto)}><Icon icon={shoppingCart} className="l-icono-de-imagen2" /></div>
                                 </div>
                           </div>
                           : null}
                     </div>
                     <div className={(mouseIsOnCard & targetaHoveada === producto._id) ? " foto-listCard-active" : "foto-listCard"}
                        style={{backgroundImage: `url(${producto.fotos[1]})`}}>
                           {(mouseIsOnCard & (targetaHoveada === producto._id)) ?
                              <div className="contenedor-iconosDeImagen"> 
                                    <div className="l-contenedor-icono-de-imagen-1">
                                       <NavLink to={`/producto/${producto._id}`} className="l-subContenedor-icono-de-imagen"><Icon icon={searchOutlined} className="l-icono-de-imagen1"/></NavLink>
                                    </div>
                                    <div className="l-contenedor-icono-de-imagen-2">
                                       <div className="l-subContenedor-icono-de-imagen" onClick={()=>agregandoProducto(producto)}><Icon icon={shoppingCart} className="l-icono-de-imagen2" /></div>
                                    </div>
                              </div>
                              : null
                           }
                     </div>
                  </div>
                  <div className="contenedor-info-listCard">
                     <h4 className="nombre-producto-listCard fontTitulos">{producto.nombre.charAt(0).toUpperCase() + producto.nombre.slice(1, producto.nombre.legth)}</h4>
                     <div className="contenedor-descripcion">
                        <p className="texto-descripcion fontTexto"><span className="titulo-descripcion fontTitulos">Descripción: </span>{producto.descripcion} </p>
                     </div>

                     <div className="contenedor-infoTecnica">
                        <p className="texto-infoTecnica fontTexto"><span className="tituloInfoTecnica-compIndividual fontTitulos">{(producto.dimensiones.trim).length > 0 ? 'Dimensiones:' : ''} </span>{producto.dimensiones}</p>
                     </div>
                     <p className="precio-producto fontTexto">{producto.precio} ARS</p>
                  </div>
                  
               </div>
               <div className="l-borderBottom-card"></div>
               </>
            )
         })}
         <ToastContainer />
      </>
   )
}

const mapStateToProps = state => {
   return {
      userLogged: state.authReducer.userLogged
   }
}
const mapDispatchToProps = {
   agregarProductoAlCarrito: carritoActions.agregarProductoAlCarrito
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductosEnFila)