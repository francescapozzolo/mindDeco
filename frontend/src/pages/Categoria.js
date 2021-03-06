import { Icon, InlineIcon } from '@iconify/react';
import sharpGridView from '@iconify-icons/ic/sharp-grid-view';
import menuIcon from '@iconify-icons/icomoon-free/menu';
import roundMenu from '@iconify-icons/ic/round-menu';
import { useEffect, useState } from 'react';
// import cartIcon from '@iconify-icons/topcoat/cart';
import ProductosEnGrilla from '../componentes/categoria/ProductosEnGrilla'
import ProductosEnFila from '../componentes/categoria/ProductosEnFila'
import {connect} from "react-redux"
import {NavLink} from 'react-router-dom'


const Categoria = (props)=>{
   const [carro, setCarro] = useState(false)
   const [mouseIsOnCard, setMouseIsOnCard] = useState(false)
   const [rightIconIsClicked, setRightIconIsClicked] = useState(false) 
   const [leftIconIsClicked, setLeftIconIsClicked] = useState(true)
   const [todosLosProductos, setTodosLosProductos] = useState([])
   const [productosAMostrar, setProductosAMostrar] = useState([])
   const [subCategorias, setSubCategorias] = useState([])

   useEffect(()=>{
      window.scrollTo(0, 0)
      // console.log(categoriaSeleccionada)
      const subCategoriasHome = ['textil', 'muebles', 'vajilla', 'decoracion']
      const categoriaSeleccionada = props.match.params.categoria
      let productosPorCategoria = []
      let hash = {};
      let subsNoRep = []
      if(subCategoriasHome.includes(categoriaSeleccionada)){
         productosPorCategoria = props.todosLosProductos.filter(producto => producto.subcategoria === categoriaSeleccionada)
         if(productosPorCategoria.length === 0) {
            props.history.push('/')
         }
      }else{
         productosPorCategoria = props.todosLosProductos.filter(producto => producto.categoria === categoriaSeleccionada)
         subsNoRep = productosPorCategoria.filter(o => hash[o.subcategoria] ? false : hash[o.subcategoria] = true);
         if(productosPorCategoria.length === 0) {
            props.history.push('/')
         }
      }
      setSubCategorias(subsNoRep)
      setTodosLosProductos(productosPorCategoria)
      setProductosAMostrar(productosPorCategoria)
   },[props.match.params.categoria])
   
   const filtroSubCategoria = (subcategoria) =>{
      let productosPorSubCategoria = null

      if(subcategoria === 'todo'){
         setProductosAMostrar(todosLosProductos)
         return null
      }
      
      productosPorSubCategoria = todosLosProductos.filter(producto => producto.subcategoria === subcategoria)
      
      setProductosAMostrar(productosPorSubCategoria)
   }
   
   const productosFiltradosAaZ = productosAMostrar.filter(function (producto, index) {
      return productosAMostrar.indexOf(producto) === index;
    }).sort((a, b) => {
      if (a.nombre < b.nombre) return -1;
      else if (a.nombre > b.nombre) return 1;
      // return 0;
   });

   const productosFiltradosZaA = productosAMostrar.filter(function (producto, index) {
      return productosAMostrar.indexOf(producto) === index;
    }).sort((a, b) => {
      if (a.nombre < b.nombre) return 1;
      else if (a.nombre > b.nombre) return -1;
      // return 0;
   });

   const productosFiltradosMenosPrecioAMas = productosAMostrar.filter(function (producto, index) {
      return productosAMostrar.indexOf(producto) === index;
    }).sort((a, b) => {
      if (a.precio < b.precio) return -1;
      else if (a.precio > b.precio) return 1;
      // return 0;
   });

   const productosFiltradosMasPrecioAMenos = productosAMostrar.filter(function (producto, index) {
      return productosAMostrar.indexOf(producto) === index;
    }).sort((a, b) => {
      if (a.precio < b.precio) return 1;
      else if (a.precio > b.precio) return -1;
      // return 0;
   });


   const filtroSelect = (valorDelFiltro)=> {
      valorDelFiltro === "NombreAaZ" 
         ? setProductosAMostrar(productosFiltradosAaZ)
      : valorDelFiltro === "NombreZaA"
         ? setProductosAMostrar(productosFiltradosZaA)
      : valorDelFiltro === "PrecioMenosAMas"
         ? setProductosAMostrar(productosFiltradosMenosPrecioAMas)
      : valorDelFiltro === "PrecioMasAMenos" 
         ? setProductosAMostrar(productosFiltradosMasPrecioAMenos)
      :  valorDelFiltro === "Relevancia"
         && setProductosAMostrar(todosLosProductos)
   }



   const activarGridEnFila = () => {
      setLeftIconIsClicked(false)
      setRightIconIsClicked(true)
   }

   const activarGridEnGrilla = () => {
      setRightIconIsClicked(false)
      setLeftIconIsClicked(true)
   }
   let condicion = true
   const subCategoriasHome = ['textil', 'muebles', 'vajilla', 'decoracion']
   if(subCategoriasHome.includes(props.match.params.categoria)){
      condicion = false
   }
   return (
      <>
         
         <section className="l-categorias-main-section">
            
            {/* Menu lateral */}
            {
               condicion ? <div className="l-contenedor-menu-lateral">
               <div className="l-menu-lateral">
                  <div className="l-contenedor-titulo-menu">
                     <p className="l-titulo-menuLateral fontTitulos">CATEGORIAS</p>
                     <Icon icon={roundMenu} className="l-icono-roundMenu" />
                     {/* <p>icon</p> */}
                  </div>
                  <div className="l-contenedor-opcion-por-categoria">
                     <div className="l-barra-horizontal-1"></div>
                     <div className="l-barra-horizontal-2"></div>
                     <p onClick={() => filtroSubCategoria('todo')} className="l-opcion-por-categoria fontTitulos">Todas las categorias</p>
                     {
                        
                        subCategorias.map(subCategoria =><p onClick={() => filtroSubCategoria(subCategoria.subcategoria)} className="l-opcion-por-categoria fontTitulos">{ subCategoria.subcategoria.charAt(0).toUpperCase() + subCategoria.subcategoria.slice(1, subCategoria.subcategoria.legth) }</p>)
                     }
                     {/* <p className="l-opcion-por-categoria fontTitulos">Almohadones</p>
                     <p className="l-opcion-por-categoria fontTitulos">Puff</p>
                     <p className="l-opcion-por-categoria fontTitulos">Mantas</p>
                     <p className="l-opcion-por-categoria fontTitulos">Alfombras</p> */}
                  </div>
               </div>
            </div> : null  
            }
            

            <div className={condicion ? "l-contenedor-productos" : "BWidthGrilla"}>

               {/* Filtro por select */}
               <div className="l-productos-top-section">
                  <div>
                     <select onChange={(e)=>filtroSelect(e.target.value)} className="l-filtro-select fontTexto">
                        <option value="Relevancia" className="select-filtro-item" selected>Relevancia</option>
                        <option value="NombreAaZ" className="select-filtro-item">Nombre, A a Z</option>
                        <option value="NombreZaA" className="select-filtro-item">Nombre, Z a A</option>
                        <option value="PrecioMenosAMas" className="select-filtro-item">Precio: de mas bajo a mas alto</option>
                        <option value="PrecioMasAMenos" className="select-filtro-item">Precio: de mas alto a mas bajo</option>
                     </select>
                  </div>
                  <div className="l-iconos-grid-container">
                     <div className="contenedor-grid-icon1">
                        <div onClick={()=>activarGridEnGrilla()} 
                        className={!rightIconIsClicked ? "l-subContenedor-grid-icon1 l-icono-con-borde" : "l-subContenedor-grid-icon1"}>
                              <Icon icon={sharpGridView} className="l-grid-icon1" />
                        </div>
                     </div>
                     <div className="contenedor-grid-icon2">
                        <div onClick={()=>activarGridEnFila()}
                        className={rightIconIsClicked ? "l-subContenedor-grid-icon2 l-icono-con-borde" : "l-subContenedor-grid-icon2"}>
                           <Icon icon={menuIcon} className="l-grid-icon2" />
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Seccion de productos */}
               <div className={rightIconIsClicked ? "l-productos-main-section contenedor-activo" : "l-productos-main-section" }>
                  {rightIconIsClicked && <ProductosEnFila infoImportante={{productosAMostrar, rightIconIsClicked, leftIconIsClicked}}/>}
               </div>

               <div className={leftIconIsClicked ? "l-productos-main-section contenedor-activo" : "l-productos-main-section"}>
                  {leftIconIsClicked && <ProductosEnGrilla infoImportante={{productosAMostrar, leftIconIsClicked, rightIconIsClicked}}/> }
               </div>
               
               {/* <div className="l-productos-main-section contenedor-activo">
                  {leftIconIsClicked 
                     ? <ProductosEnGrilla infoImportante={{productosAMostrar, leftIconIsClicked, rightIconIsClicked}}/>
                     : <ProductosEnFila infoImportante={{productosAMostrar, rightIconIsClicked, leftIconIsClicked}}/>
                  }
               </div> */}
               

            </div>
         </section>
      </>
   )
}

const mapStateToProps = state => {
   return {
      todosLosProductos: state.productosReducer.todosLosProductos
   }
}

export default connect(mapStateToProps)(Categoria)