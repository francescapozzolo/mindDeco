import React, { useEffect } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import sharpGridView from '@iconify-icons/ic/sharp-grid-view';
import menuIcon from '@iconify-icons/icomoon-free/menu';
import roundMenu from '@iconify-icons/ic/round-menu';
import { useState } from 'react';
import searchOutlined from '@iconify-icons/ant-design/search-outlined';
// import cartIcon from '@iconify-icons/topcoat/cart';
import shoppingCart from '@iconify-icons/la/shopping-cart'; 
import {NavLink} from 'react-router-dom'

const ProductosEnGrilla = (props) => {
    const [mouseIsOnCard, setMouseIsOnCard] = useState(false)
    const [targetaHoveada, setTargetaHoveada] = useState("")

    const mostrarIconos = (elementoHoveado)=>{
        setMouseIsOnCard(true)
        setTargetaHoveada(elementoHoveado)
    }

    return (
        <>    
            {props.infoImportante.productosAMostrar.map(producto =>{
                return(
                    <div key={producto._id} className="l-card" onMouseOver={(e)=>mostrarIconos(producto._id)} onMouseLeave={()=>setMouseIsOnCard(false)}>
                        <NavLink to={`/producto/${producto._id}`} className="l-contenedor-foto">
                            {/* <div className="l-foto-card" style={{backgroundImage: `url('${(mouseIsOnCard & (targetaHoveada === producto._id)) ? producto.fotos[1] : producto.fotos[0] }')`}}> */}
                            <div className={!(mouseIsOnCard & targetaHoveada === producto._id) ? "l-foto-card grid-card-active" : "l-foto-card"} style={{backgroundImage: `url('${producto.fotos[0]}')`}}>
                                {(mouseIsOnCard & (targetaHoveada === producto._id)) ?
                                    <div className="contenedor-iconosDeImagen"> 
                                        <div className="l-contenedor-icono-de-imagen-1">
                                            <div className="l-subContenedor-icono-de-imagen"><Icon icon={searchOutlined} className="l-icono-de-imagen1"/></div>
                                        </div>
                                        <div className="l-contenedor-icono-de-imagen-2">
                                            <div className="l-subContenedor-icono-de-imagen"><Icon icon={shoppingCart} className="l-icono-de-imagen2" /></div>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                            <div className={(mouseIsOnCard & targetaHoveada === producto._id) ? "l-foto-card grid-card-active" : "l-foto-card"}
                            style={{backgroundImage: `url('${producto.fotos[1]}')`}}>
                                {(mouseIsOnCard & (targetaHoveada === producto._id)) ?
                                    <div className="contenedor-iconosDeImagen"> 
                                        <div className="l-contenedor-icono-de-imagen-1">
                                            <div className="l-subContenedor-icono-de-imagen"><Icon icon={searchOutlined} className="l-icono-de-imagen1"/></div>
                                        </div>
                                        <div className="l-contenedor-icono-de-imagen-2">
                                            <div className="l-subContenedor-icono-de-imagen"><Icon icon={shoppingCart} className="l-icono-de-imagen2" /></div>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                        </NavLink>
                        <div className="l-nombre-y-precio">
                            <p className="l-nombre-producto fontTexto">{producto.nombre}</p>
                            <p className="l-precio-producto fontTexto">{producto.precio}</p>
                        </div>
                    </div>
                    )})}


                 {/* return(
                 <div key={producto._id} className={props.infoImportante.leftIconIsClicked ? "l-card l-card-activa" : "l-card"}>
                 <div key={producto._id} className="l-card">
                     <div className="l-contenedor-foto" onMouseOver={(e)=>setMouseIsOnCard(true)} onMouseLeave={()=>setMouseIsOnCard(false)}>
                        <div className="l-foto-card" style={{backgroundImage: `url('${producto.fotos[0]}')`}}>
                             {mouseIsOnCard && 
                            <div className="contenedor-iconosDeImagen"> 
                                <div className="l-contenedor-icono-de-imagen-1">
                                    <div className="l-subContenedor-icono-de-imagen"><Icon icon={searchOutlined} className="l-icono-de-imagen1"/></div>
                                </div>
                                <div className="l-contenedor-icono-de-imagen-2">
                                    <div className="l-subContenedor-icono-de-imagen"><Icon icon={shoppingCart} className="l-icono-de-imagen2" /></div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="l-nombre-y-precio">
                        <p className="l-nombre-producto fontTexto">{producto.nombre}</p>
                        <p className="l-precio-producto fontTexto">{producto.precio}</p>
                    </div>
                </div>
                )})} */}

                
        </>
    )
}
export default ProductosEnGrilla