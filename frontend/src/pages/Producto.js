import { useEffect, useState } from "react"
import { connect } from "react-redux"


const Producto = (props)=>{
   console.log(props)
   const [producto, setProducto] = useState(null)
   const idProducto = props.match.params.id
   
   useEffect(()=> {
      setProducto(props.todosLosProductos.find(producto => producto._id === idProducto))
   }, [])
  
if(!producto){
   return <h2>Loading</h2>
}

console.log(producto)
   return (
      <div id="p-contenedorPrincipalProducto">
         <div className="p-seccionImpar">
            <div className="p-contenedorFotoProdInv"  style={{backgroundImage: `url(${producto.fotos[0]})`}}>
            </div>
            <div className="p-contenedorDescripcionProd">
               <h4 className="nombreProducto-CompIndividual fontTitulos">{producto.nombre}</h4>
               <p className="descripcion-componenteIndividual fontTexto"><span className="tituloDescripcion-CompIndividual fontTitulos"></span>{producto.descripcion}</p>
            </div>
         </div>
         <div id="p-seccion2">
            <div className="p-contenedorFotoProdInv"  style={{backgroundImage: `url(${producto.fotos[1]})`}}>
            </div>
            <div className="p-contenedorDescripcionProd">
               <p className="precioProducto-componenteIndividual fontTexto">${producto.precio}</p>
               <div className="contenedor-valoracionDeProducto"> 
                  <div>⭐⭐⭐⭐⭐</div>
                  <p className="opcion-AgregarOpinion fontTexto"><span className="barrita-divisora">|</span> Agregar una opinion</p>
               </div>
               <div id="p-contenedorFotosChicas">
                  <div style={{backgroundImage: `url(${producto.fotos[0]})`}}></div>
                  <div style={{backgroundImage: `url(${producto.fotos[1]})`}}></div>
                  <div style={{backgroundImage: `url(${producto.fotos[2]})`}}></div>
               </div>
            </div>
         </div>
         <div className="p-seccionImpar">
            <div className="p-contenedorFotoProdInv"  style={{backgroundImage: `url(${producto.fotos[2]})`}}>
            </div>
            <div className="p-contenedorDescripcionProd"> 
                  <input type="text" className="fontTexto" placeholder="Ingresá tu mail" ></input>
                  <input type="text" className="fontTexto" placeholder="Ingresá tu nombre"></input>
                  <textarea className="fontTexto" placeholder="Ingresá tu consulta"></textarea>
                  <button className="fontTitulos">ENVIAR CONSULTA</button>
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state)=>{
   return {
      todosLosProductos: state.productosReducer.todosLosProductos
   }
}


export default connect(mapStateToProps)(Producto)