import { Icon, InlineIcon } from '@iconify/react';
import sharpGridView from '@iconify-icons/ic/sharp-grid-view';
import menuIcon from '@iconify-icons/icomoon-free/menu';
import roundMenu from '@iconify-icons/ic/round-menu';
import { useState } from 'react';
import searchOutlined from '@iconify-icons/ant-design/search-outlined';
// import cartIcon from '@iconify-icons/topcoat/cart';
import shoppingCart from '@iconify-icons/la/shopping-cart'; 
import CarroCompras from './CarroCompras'

const Categoria = ()=>{

   const [mouseIsOnCard, setMouseIsOnCard] = useState(false)
   const [carro, setCarro] = useState(false)
   // mouseIsOnCard ?console.log('esta encima'): console.log('bajó')

   return (
      <>
         <header className="l-headerDelDani"></header>
         
         <section className="l-categorias-main-section">
            
            {/* Menu lateral */}
            <div className="l-contenedor-menu-lateral">
               <div className="l-menu-lateral">
                  <div className="l-contenedor-titulo-menu">
                     <p className="l-titulo-menuLateral fontTitulos">CATEGORIAS</p>
                     <Icon icon={roundMenu} className="icono-roundMenu" />
                     {/* <p>icon</p> */}
                  </div>
                  <div className="l-contenedor-opcion-por-categoria">
                     <div className="l-barra-horizontal-1"></div>
                     <div className="l-barra-horizontal-2"></div>
                     
                     <p className="l-opcion-por-categoria fontTitulos">Almohadones</p>
                     <p className="l-opcion-por-categoria fontTitulos">Puff</p>
                     <p className="l-opcion-por-categoria fontTitulos">Mantas</p>
                     <p className="l-opcion-por-categoria fontTitulos">Alfombras</p>
                  </div>
               </div>
            </div>   

            <div className="l-contenedor-productos">
               {/* Filtro por select */}
               <div className="l-productos-top-section">
                  {/* <div className="boton-comparar" >
                     <p className="comparar-boton-texto fontTexto">COMPARAR (0)</p>
                  </div> */}
                  <div>
                     <select value="" className="l-filtro-select fontTexto">
                        <option selected disabled>Seleccionar</option>
                        <option value="l-Relevancia">Relevancia</option>
                        <option value="l-NombreA-Z">Nombre, A a Z</option>
                        <option value="l-NombreZ-A">Nombre, Z a A</option>
                        <option value="l-PrecioMenosAMas">Precio: de mas bajo a mas alto</option>
                        <option value="l-PrecioMasAMenos">Precio: de mas alto a mas bajo</option>
                     </select>
                  </div>
               <div className="l-iconos-grid-container">
                  <div className="l-contenedor-grid-icon icono-con-borde">
                     <Icon icon={sharpGridView} className="grid-icon1" />
                  </div>
                  <div className="l-contenedor-grid-icon">
                     <Icon icon={menuIcon} className="l-grid-icon2" />
                  </div>
               </div>
               </div>
               
               {/* Seccion de productos */}
               <div className="l-productos-main-section">


               <div className="l-card">
                     <div className="l-contenedor-foto" onMouseOver={()=>setMouseIsOnCard(true)} onMouseLeave={()=>setMouseIsOnCard(false)}>
                        <div className="l-foto-card">
                           {mouseIsOnCard && 
                              <>
                                 <div className="l-contenedor-icono-de-imagen">
                                    <Icon icon={searchOutlined} className="l-icono-de-imagen1"/>
                                 </div>
                                 <div className="l-contenedor-icono-de-imagen">
                                    <Icon icon={shoppingCart} onClick={()=> setCarro(!carro)} className="l-icono-de-imagen2" />
                                 </div>
                              </>
                           }
                           {carro && <CarroCompras />}
                        </div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p className="l-nombre-producto fontTexto">Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>

                  <div className="l-card">
                     <div className="l-contenedor-foto">
                        <div className="l-foto-card"></div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p className="l-nombre-producto fontTexto">Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>

                  <div className="l-card">
                     <div className="l-contenedor-foto">
                        <div className="l-foto-card"></div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p>Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>

                  <div className="l-card">
                     <div className="l-contenedor-foto">
                        <div className="l-foto-card"></div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p>Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>

                  <div className="l-card">
                     <div className="l-contenedor-foto">
                        <div className="l-foto-card"></div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p>Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>

                  <div className="l-card">
                     <div className="l-contenedor-foto">
                        <div className="l-foto-card"></div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p>Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>

                  <div className="l-card">
                     <div className="l-contenedor-foto">
                        <div className="l-foto-card"></div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p>Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>

                  <div className="l-card">
                     <div className="l-contenedor-foto">
                        <div className="l-foto-card"></div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p>Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>

                  <div className="l-card">
                     <div className="l-contenedor-foto">
                        <div className="l-foto-card"></div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p>Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>
                  
                  <div className="l-card">
                     <div className="l-contenedor-foto">
                        <div className="l-foto-card"></div>
                     </div>
                     <div className="l-nombre-y-precio">
                        <p>Lámpara Milan</p>
                        <p className="l-precio-producto fontTexto">33.600,00 ARS</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         
         <footer className="l-footerDelDani" ></footer>
      </>
   )
}

export default Categoria