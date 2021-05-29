import { Icon, InlineIcon } from '@iconify/react';
import sharpGridView from '@iconify-icons/ic/sharp-grid-view';
import menuIcon from '@iconify-icons/icomoon-free/menu';
import roundMenu from '@iconify-icons/ic/round-menu';
import { useEffect, useState } from 'react';
import searchOutlined from '@iconify-icons/ant-design/search-outlined';
// import cartIcon from '@iconify-icons/topcoat/cart';
import shoppingCart from '@iconify-icons/la/shopping-cart'; 
import ProductosEnGrilla from '../componentes/categoria/ProductosEnGrilla'
import ProductosEnFila from '../componentes/categoria/ProductosEnFila'




const Categoria = ()=>{


   const [mouseIsOnCard, setMouseIsOnCard] = useState(false)
   const [rightIconIsClicked, setRightIconIsClicked] = useState(false) 
   const [leftIconIsClicked, setLeftIconIsClicked] = useState(true)
   const [todosLosProductos, setTodosLosProductos] = useState([])
   const [productosAMostrar, setProductosAMostrar] = useState([])
   
   useEffect(()=>{
      const productos = [
         {
            articulo: "almohadon", 
            nombre: "Banco Noruega",
            descripcion: " Fabricados en madera maciza, su exclusivo diseño aporta calidez y confort a tus espacios, cómodo y moderno, ideal para #enchular tu galeria o terraza y disfrutar de lindos momentos en familia. fabricado en madera maciza, encastrada, encolada y atornillada. Asiento realizado",		
            categoria: "Living", 		
            subcategoria: ["Textil", "Decoracion"],	
            precio: 1200,		
            stock: 20, 	
            fotos: ["https://casachula.com.ar/2327-home_default/sillon-puff.jpg", "https://casachula.com.ar/2322-home_default/sillon-bari-modular.jpg"],
            dimensiones: "110cm X 110cm X 80cm/h.",
            _id: 1
         },
         {
            articulo: "almohadon", 
            nombre: "Servilleta Paris",
            descripcion: "El camino de mesa Olivia es el detalle que hace la diferencia en tu comedor. Enchulá tu mesa, mientras no está armada para que siga siendo protagonista de tu espacio.",		
            categoria: "Living", 		
            subcategoria: ["Textil", "Decoracion"],	
            precio: 1423,		
            stock: 20, 	
            fotos: ["https://casachula.com.ar/1952-home_default/sillon-niza.jpg", "https://casachula.com.ar/1928-home_default/bancos-noruega.jpg "],
            dimensiones: "110cm X 110cm X 80cm/h.",
            _id: 2
         },
         {
            articulo: "almohadon", 
            nombre: "Alfombra",
            descripcion: "El camino de mesa Olivia es el detalle que hace la diferencia en tu comedor. Enchulá tu mesa, mientras no está armada para que siga siendo protagonista de tu espacio.",		
            categoria: "Living", 		
            subcategoria: ["Textil", "Decoracion"],	
            precio: 1233,		
            stock: 20, 	
            fotos: ["https://casachula.com.ar/182-home_default/sillon-malaga.jpg", "https://casachula.com.ar/1952-home_default/sillon-niza.jpg"],
            dimensiones: "110cm X 110cm X 80cm/h.",
            _id: 3
         },
         {
            articulo: "almohadon", 
            nombre: "Mesada",
            descripcion: "El camino de mesa Olivia es el detalle que hace la diferencia en tu comedor. Enchulá tu mesa, mientras no está armada para que siga siendo protagonista de tu espacio.",		
            categoria: "Living", 		
            subcategoria: ["Textil", "Decoracion"],	
            precio: 5434,		
            stock: 20, 	
            fotos: ["https://casachula.com.ar/69-home_default/mesa-auxiliar-capri.jpg", "https://casachula.com.ar/1928-home_default/bancos-noruega.jpg"],
            dimensiones: "110cm X 110cm X 80cm/h.",
            _id: 4
         },{
            articulo: "almohadon", 
            nombre: "Cuadro",
            descripcion: "El camino de mesa Olivia es el detalle que hace la diferencia en tu comedor. Enchulá tu mesa, mientras no está armada para que siga siendo protagonista de tu espacio.",		
            categoria: "Living", 		
            subcategoria: ["Textil", "Decoracion"],	
            precio: 20000,		
            stock: 20, 	
            fotos: ["https://casachula.com.ar/1033-home_default/cuadro-pach-negro.jpg", "https://casachula.com.ar/1044-home_default/sillon-bari-con-puff.jpg"],
            dimensiones: "Medidas Producto 5.",
            _id: 5
         },{
            articulo: "almohadon", 
            nombre: "Sillon",
            descripcion: "El camino de mesa Olivia es el detalle que hace la diferencia en tu comedor. Enchulá tu mesa, mientras no está armada para que siga siendo protagonista de tu espacio.",		
            categoria: "Living", 		
            subcategoria: ["Textil", "Decoracion"],	
            precio: 7000,		
            stock: 20, 	
            fotos: ["https://casachula.com.ar/1043-home_default/sillon-bari-con-puff.jpg", "https://casachula.com.ar/196-home_default/sillon-montpellier.jpg"],
            dimensiones: "Medidas Producto 6.",
            _id: 6
         },
      ]
      setTodosLosProductos(productos)
      setProductosAMostrar(productos)
   },[])



   const productosFiltradosAaZ = todosLosProductos.filter(function (producto, index) {
      return todosLosProductos.indexOf(producto) === index;
    }).sort((a, b) => {
      if (a.nombre < b.nombre) return -1;
      else if (a.nombre > b.nombre) return 1;
      return 0;
   });

   const productosFiltradosZaA = todosLosProductos.filter(function (producto, index) {
      return todosLosProductos.indexOf(producto) === index;
    }).sort((a, b) => {
      if (a.nombre < b.nombre) return 1;
      else if (a.nombre > b.nombre) return -1;
      return 0;
   });

   const productosFiltradosMenosPrecioAMas = todosLosProductos.filter(function (producto, index) {
      return todosLosProductos.indexOf(producto) === index;
    }).sort((a, b) => {
      if (a.precio < b.precio) return -1;
      else if (a.precio > b.precio) return 1;
      return 0;
   });

   const productosFiltradosMasPrecioAMenos = todosLosProductos.filter(function (producto, index) {
      return todosLosProductos.indexOf(producto) === index;
    }).sort((a, b) => {
      if (a.precio < b.precio) return 1;
      else if (a.precio > b.precio) return -1;
      return 0;
   });


   const filtroSelect = (valorDelFiltro)=> {
      console.log(valorDelFiltro)
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

   console.log(rightIconIsClicked)
   return (
      <>
         <header className="l-headerDelDani"></header>
         
         <section className="l-categorias-main-section">
            
            {/* Menu lateral */}
            <div className="l-contenedor-menu-lateral">
               <div className="l-menu-lateral">
                  <div className="l-contenedor-titulo-menu">
                     <p className="l-titulo-menuLateral fontTitulos">CATEGORIAS</p>
                     <Icon icon={roundMenu} className="l-icono-roundMenu" />
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
               
            </div>
         </section>
         
         <footer className="l-footerDelDani" ></footer>
      </>
   )
}

export default Categoria