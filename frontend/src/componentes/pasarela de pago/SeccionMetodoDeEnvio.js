// import useState from 'react'

import { useState } from "react"

const SeccionMetodoDeEnvio = (props)=>{
   const {infoDelUsuario, setInfoDelUsuario, setPasoDeCompra} = props.statesDelPadre
   const [metodoSeleccionado, setMetodoSeleccionado] = useState("")
   
   const establecerMetodoDeEnvio = (envioElegido)=>{
      setMetodoSeleccionado(envioElegido)
      setInfoDelUsuario({...infoDelUsuario, envioElegido})
   }

   const funcionContinuar = ()=>{
      metodoSeleccionado === "" 
         ? setMetodoSeleccionado("ninguno")
         : setPasoDeCompra("paso3-metodoDePago")
   }

   

   return(
      <div className="seccion-metodoDeEnvio">
         <div className="contenedor-opcionesDeEnvio">
            <label htmlFor="1" className={metodoSeleccionado === "recibirCompra" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>establecerMetodoDeEnvio("recibirCompra")}><input type="radio" id="1" className="metodoDePagoOption" name="metodoDeEnvio" />Recibir Compra</label>
               
            <label htmlFor="2" className={metodoSeleccionado === "retiroPorSucursal" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>establecerMetodoDeEnvio("retiroPorSucursal")}><input type="radio" id="2" className="metodoDePagoOption" name="metodoDeEnvio"/>Retiro en Sucursal</label>
            
            <label htmlFor="3" className={metodoSeleccionado === "retiroPorCorreo" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>establecerMetodoDeEnvio("retiroPorCorreo")}><input type="radio" id="3" className="metodoDePagoOption" name="metodoDeEnvio" />Retiro por Correo Argentino</label>
         </div>

         { metodoSeleccionado === "ninguno" &&  <p className="error-MetodoDeEnvio fontTexto">Para continuar seleccione un metodo de Envio.</p>}

         <div className="contenedor-botonesAvanzar-metodoDeEnvio">
            <p className="boton-continuar fontTitulos" onClick={()=>setPasoDeCompra("paso1-direcciones")} >Volver</p>
            <p className="boton-continuar fontTitulos" onClick={()=>funcionContinuar()}>Continuar</p>
         </div>
         {/* <p className="boton-continuar botonDeMetodoDeEnvio fontTitulos" onClick={()=>funcionContinuar()}>Continuar</p> */}
      </div>
   )
}

export default SeccionMetodoDeEnvio