// import useState from 'react'

import { useState } from "react"

const SeccionMetodoDeEnvio = (props)=>{
   
   const [metodoSeleccionado, setMetodoSeleccionado] = useState("")
   
   const funcionContinuar = ()=>{
      metodoSeleccionado === "" 
         ? setMetodoSeleccionado("ninguno")
         : props.setPasoDeCompra("paso3-metodoDePago")
      }

   const volver = ()=>{
      props.setPasoDeCompra("paso1-direcciones")
   }
   

   return(
      <div className="seccion-metodoDeEnvio">
         <div className="contenedor-opcionesDeEnvio">
            <label for="1" className={metodoSeleccionado === "envioOpcion1" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>setMetodoSeleccionado("envioOpcion1")}><input type="radio" id="1" className="metodoDePagoOption" name="metodoDeEnvio" value="recibirCompra"/>Recibir Compra</label>
               
            <label for="2" className={metodoSeleccionado === "envioOpcion2" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>setMetodoSeleccionado("envioOpcion2")}><input type="radio" id="2" className="metodoDePagoOption" name="metodoDeEnvio" value="retiroEnDepo"/>Retiro en Sucursal</label>
            
            <label for="3" className={metodoSeleccionado === "envioOpcion3" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>setMetodoSeleccionado("envioOpcion3")}><input type="radio" id="3" className="metodoDePagoOption" name="metodoDeEnvio" value="retiroEnCorreo"/>Retiro en Correo mas Cercano</label>
         </div>

         { metodoSeleccionado === "ninguno" &&  <p className="error-MetodoDeEnvio fontTexto">Para continuar seleccione un metodo de Envio.</p>}

         <div className="contenedor-botonesAvanzar-metodoDeEnvio">
            <p className="boton-continuar fontTitulos" onClick={()=>volver()} >Volver</p>
            <p className="boton-continuar fontTitulos" onClick={()=>funcionContinuar()}>Continuar</p>
         </div>
         {/* <p className="boton-continuar botonDeMetodoDeEnvio fontTitulos" onClick={()=>funcionContinuar()}>Continuar</p> */}
      </div>
   )
}

export default SeccionMetodoDeEnvio