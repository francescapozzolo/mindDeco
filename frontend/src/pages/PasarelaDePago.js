import React, { useState } from 'react'
import { connect } from 'react-redux'
import CreditCard from '../componentes/pasarela de pago/CreditCard'
import TextField from "@material-ui/core/TextField";
import SeccionDirecciones from '../componentes/pasarela de pago/SeccionDirecciones'
import SeccionMetodoDeEnvio from '../componentes/pasarela de pago/SeccionMetodoDeEnvio'
import SeccionMetodoDePago from '../componentes/pasarela de pago/SeccionMetodoDePago'


const PasarelaDePago = (props)=>{
   console.log(props)
   // const [metodoSeleccionado, setMetodoSeleccionado] = useState("")
   const [pasoDeCompra, setPasoDeCompra] = useState('paso1-direcciones')
   const [metodoDePago, setMetodoDePago] = useState("")
   const [datosDeTarjetaFueronPuestos, setDatosDeTarjetaFueronPuestos] = useState(false)

   return( 
      <div className="contenedorGeneral-pagina-pasarelaDePago">
         <div className="contenedorDeFormularios">

            <p className="tituloDirecciones-pasarelaDePago fontTitulos" >1. Direcciones</p>
            <div className="barraHorizontal-Pasarela"></div>
            {pasoDeCompra === "paso1-direcciones" && <SeccionDirecciones setPasoDeCompra={setPasoDeCompra}/> }            

            <p className="tituloMetodoEnvio-pasarelaDePago fontTitulos" >2. Metodo de Envio</p>
            <div className="barraHorizontal-Pasarela"></div>
            {pasoDeCompra === "paso2-metodoDeEnvio" && <SeccionMetodoDeEnvio setPasoDeCompra={setPasoDeCompra} />}

            <p className="tituloEnvio-pasarelaDePago fontTitulos" >3. Metodo de Pago</p>
            <div className="barraHorizontal-Pasarela"></div>
            {pasoDeCompra === "paso3-metodoDePago" && <SeccionMetodoDePago statesDelPadre={{metodoDePago, setMetodoDePago, datosDeTarjetaFueronPuestos, setPasoDeCompra}} />}

            {pasoDeCompra === "pasoOpcional-cargarDatosDeTargeta" && <CreditCard/>}


         </div>

         <div className="contenedorLateral">
            <div className="subcontenedorLateral">

               <p className="estasComprando-text fontTitulos">Estas Comprando:</p>
               <div className="productoAComprar">
                  <div className="fotoDeProductoAComprar" style={{backgroundImage: "url('https://casachula.com.ar/2224-large_default/portamaceta-lima.jpg')"}}></div>
                  <div className="infoProductoAComprar">
                     <p className="nombre-productoAComprar fontTitulos"> Sillon Bar con Puff </p>
                     <div className="contenedor-UnidadesyPrecio">
                        <div className="contenedor-infoDeProducto">
                           <p className="unidades-productoAComprar fontTexto"> Unidades: </p>
                           <p className="fontTexto fontSize20">3</p>
                        </div>
                        <div className="contenedor-infoDeProducto">
                           <p className="fontSize20 fontTexto"> Valor por Unidad: </p>
                           <p className="fontTexto fontSize20">5000 ARS</p>
                        </div>
                        <div className="contenedor-infoDeProducto">
                           <p className="subtotal-productoAComprar fontNegrita fontTexto"> Subtotal:</p>
                           <p className="fontTexto fontNegrita fontSize20">15000 ARS</p> 
                        </div>
                     </div>
                  </div>
               </div>

               <div className="barra-horizonta-aside"></div>

               <div className="productoAComprar">
                  <div className="fotoDeProductoAComprar" style={{backgroundImage: "url('https://casachula.com.ar/70-home_default/mesa-auxiliar-capri.jpg')"}}></div>
                  <div className="infoProductoAComprar">
                     <p className="nombre-productoAComprar fontTitulos"> Sillon Bar con Puff </p>
                     <div className="contenedor-UnidadesyPrecio">
                     <div className="contenedor-infoDeProducto">
                           <p className="fontSize20 fontTexto"> Unidades: </p>
                           <p className="fontTexto fontSize20">1</p>
                        </div>
                        <div className="contenedor-infoDeProducto">
                           <p className="fontSize20 fontTexto"> Valor por Unidad: </p>
                           <p className="fontTexto fontSize20">10000 ARS</p>
                        </div>
                        <div className="contenedor-infoDeProducto">
                           <p className="fontSize20 fontNegrita fontTexto"> Subtotal:</p>
                           <p className="fontTexto fontNegrita fontSize20">10000 ARS</p> 
                        </div>
                     </div>
                  </div>
               </div>

               <div className="barra-horizonta-aside"></div>

               <div className="contenedor-envioYTotal">
                  <div className="subcontenedor-envioYTotal">
                     <p className="fontSize25 fontTexto">Envio:</p>
                     <p className="fontSize25 fontTexto">Gratis</p>
                  </div>
                  <div className="subcontenedor-envioYTotal">
                     <p className="fontSize25 fontTexto">Total:</p>
                     <p className="fontSize25 fontTexto">50000 ARS</p>
                  </div>
               </div>

            </div>
         </div>
         
      </div>
   )
}

const mapStateToProps = (state)=>{
   return {
      usuario: state
   }
}

export default connect(mapStateToProps)(PasarelaDePago)