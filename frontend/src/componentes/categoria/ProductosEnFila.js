import React, { useEffect } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import sharpGridView from '@iconify-icons/ic/sharp-grid-view';
import menuIcon from '@iconify-icons/icomoon-free/menu';
import roundMenu from '@iconify-icons/ic/round-menu';
import { useState } from 'react';
import searchOutlined from '@iconify-icons/ant-design/search-outlined';
// import cartIcon from '@iconify-icons/topcoat/cart';
import shoppingCart from '@iconify-icons/la/shopping-cart'; 


const ProductosEnFila = (props)=>{

   const [mouseIsOnCard, setMouseIsOnCard] = useState(false)
   const [targetaHoveada, setTargetaHoveada] = useState("")

   const mostrarIconos = (elementoHoveado)=>{
      setMouseIsOnCard(true)
      setTargetaHoveada(elementoHoveado)
  }

   return(
      <>
         {props.infoImportante.productosAMostrar.map(producto => {
            return(
               // <div key={producto._id} className={props.infoImportante.rightIconIsClicked ? "list-card list-card-activa" : "list-card" }>
               <div key={producto._id} className="list-card" onMouseOver={(e)=>mostrarIconos(producto._id)} onMouseLeave={()=>setMouseIsOnCard(false)} >
                  <div className="contenedor-foto-listCard">
                     <div className="foto-listCard" style={{backgroundImage: `url('${producto.fotos[0]}')`}}>
                     {(mouseIsOnCard & targetaHoveada === producto._id) && 
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
                  <div className="contenedor-info-listCard">
                     <h4 className="nombre-producto-listCard fontTitulos">{producto.nombre}</h4>
                     <div className="contenedor-descripcion">
                        <p className="texto-descripcion fontTexto"><span className="titulo-descripcion fontTitulos">Descripcion: </span>{producto.descripcion} </p>
                     </div>

                     <div className="contenedor-infoTecnica">
                        <p className="texto-infoTecnica fontTexto"><span className="titulo-infoTecnica fontTitulos">Dimensiones: </span>{producto.dimensiones}</p>
                     </div>
                     <p className="precio-producto fontTexto">{producto.precio} ARS</p>
                  </div>
               </div>
            )
         })}
         
         
         {/* <div className="list-card">
            <div className="contenedor-foto-listCard">
               <div className="foto-listCard"></div>
            </div>
            <div className="contenedor-info-listCard">
               <h4 className="nombre-producto-listCard fontTitulos">Bancos Noruega</h4>
               <div className="contenedor-descripcion">
                  <p className="texto-descripcion fontTexto"><span className="titulo-descripcion fontTitulos">Descripcion:</span> Fabricados en madera maciza, su exclusivo diseño aporta calidez y confort a tus espacios, cómodo y moderno, ideal para #enchular tu galeria o terraza y disfrutar de lindos momentos en familia. fabricado en madera maciza, encastrada, encolada y atornillada. Asiento realizado</p>
               </div>
               <div className="contenedor-infoTecnica">
                  <p className="texto-infoTecnica fontTexto"><span className="titulo-infoTecnica fontTitulos">Información Tecnica:</span> Fabricado en madera maciza, encastrada, encolada y atornillada. Asiento realizado con placa soft + pillow. Respaldo relleno con vellón siliconado y copos. Tapizado en tela de algodón.</p>
               </div>
               <p className="precio-producto fontTexto">86.700 ARS</p>
            </div>
         </div> */}
         
         {/* <div className="list-card">
            <div className="contenedor-foto-listCard">
               <div className="foto-listCard"></div>
            </div>
            <div className="contenedor-info-listCard">
               <h4 className="nombre-producto-listCard fontTitulos">Bancos Noruega</h4>
               <div className="contenedor-descripcion">
                  <p className="texto-descripcion fontTexto"><span className="titulo-descripcion fontTitulos">Descripcion:</span> Fabricados en madera maciza, su exclusivo diseño aporta calidez y confort a tus espacios, cómodo y moderno, ideal para #enchular tu galeria o terraza y disfrutar de lindos momentos en familia. fabricado en madera maciza, encastrada, encolada y atornillada. Asiento realizado</p>
               </div>

               <div className="contenedor-infoTecnica">
                  <p className="texto-infoTecnica fontTexto"><span className="titulo-infoTecnica fontTitulos">Información Tecnica:</span> Fabricado en madera maciza, encastrada, encolada y atornillada. Asiento realizado con placa soft + pillow. Respaldo relleno con vellón siliconado y copos. Tapizado en tela de algodón.</p>
               </div>
               <p className="precio-producto fontTexto">86.700 ARS</p>
            </div>
         </div> */}
      </>
   )
}

export default ProductosEnFila