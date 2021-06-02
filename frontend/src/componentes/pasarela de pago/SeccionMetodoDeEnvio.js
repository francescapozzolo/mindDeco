// import useState from 'react'

import { useState } from "react"

const SeccionMetodoDeEnvio = (props)=>{
   
   const [metodoSeleccionado, setMetodoSeleccionado] = useState("")
   
   const funcionContinuar = ()=>{
      metodoSeleccionado === "" 
         ? alert('Seleccione un Metodo de Envio')
         : props.setPasoDeCompra("paso3-metodoDePago")
      }

   return(
      <>
         <label for="1" className={metodoSeleccionado === "envioOpcion1" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>setMetodoSeleccionado("envioOpcion1")}><input type="radio" id="1" className="metodoDePagoOption" name="metodoDeEnvio" value="recibirCompra"/>Recibir Compra</label>
            
         <label for="2" className={metodoSeleccionado === "envioOpcion2" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>setMetodoSeleccionado("envioOpcion2")}><input type="radio" id="2" className="metodoDePagoOption" name="metodoDeEnvio" value="retiroEnDepo"/>Retiro en Deposito mas cercano</label>

         <label for="3" className={metodoSeleccionado === "envioOpcion3" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>setMetodoSeleccionado("envioOpcion3")}><input type="radio" id="3" className="metodoDePagoOption" name="metodoDeEnvio" value="retiroEnCorreo"/>Retiro en Correo mas Cercano</label>

         <p className="boton-continuar botonDeMetodoDeEnvio fontTitulos" onClick={()=>funcionContinuar()}>Continuar</p>
      </>
   )
}

export default SeccionMetodoDeEnvio