

const Producto = ()=>{
   return (
      <>
         <div className="contenedorPrincipal-productoIndividual">
            <section className="productoIndividual-mainSection">
               <div className="contenedor-carruselVertical"></div>
               <div className="contenedor-productoMostrado">
                  <div className="producto-mostrado" style={{backgroundImage: `url("https://casachula.com.ar/1822-large_default/juego-noruega.jpg")`}}></div>
               </div>
               <div className="contenedor-infoDeProductoMostrado">
                  <h4 className="nombreProducto-CompIndividual fontTitulos">Juego Noruega</h4>
                  <div className="contenedor-valoracionDeProducto"> 
                     <div>⭐⭐⭐⭐⭐</div>
                     <p className="opcion-AgregarOpinion fontTexto"><span className="barrita-divisora">|</span> Agregar una opinion</p>
                  </div>
                  <p className="precioProducto-componenteIndividual fontTexto">$  125.525 ARS</p>
                  <p className="descripcion-componenteIndividual fontTexto"><span className="tituloDescripcion-CompIndividual fontTitulos">Descripcion: </span>Fabricados en madera maciza, su exclusivo diseño aporta calidez y confort a tus espacios, cómodo y moderno, ideal para #enchular tu galeria o terraza y disfrutar de lindos momentos en familia.</p>
                  <p className="textoInfoTecnica-compIndividual fontTexto"><span className="titulo-infoTecnica fontTitulos">Dimensiones: </span>110cm X 110cm X 80cm/h.</p>
               </div>
            </section>
         </div>   
      </>
   )
}

export default Producto