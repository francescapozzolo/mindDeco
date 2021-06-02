import TextField from "@material-ui/core/TextField";
import { useState } from "react";


const SeccionDirecciones = (props)=>{

   const [infoDelUsuario, setInfoDelUsuario] = useState({nombreyapellidos: '', direccion: '', codigoPostal: '', ciudad: '', provincia: '', telefono: ''})

   const leerInput = (campo, valorDelInput) => {
      setInfoDelUsuario({ ...infoDelUsuario, [campo]: valorDelInput })
      console.log(infoDelUsuario)
   }

   const continuar = () => {
      console.log(infoDelUsuario)
      infoDelUsuario.nombreyapellidos === "" ? alert('Debe completar el campo Nombre y Apellidos para continuar')
         : infoDelUsuario.direccion === "" ? alert('Debe completar el campo direccion para continuar')
         : infoDelUsuario.codigoPostal === "" ? alert('Debe completar el campo codigo Postal para continuar')
         : infoDelUsuario.ciudad === "" ? alert('Debe completar el campo ciudad para continuar')
         : infoDelUsuario.provincia === "" ? alert('Debe completar el campo provincia para continuar')
         : infoDelUsuario.telefono === "" ? alert('Debe completar el campo telefono para continuar')
         : props.setPasoDeCompra('paso2-metodoDeEnvio')
   }

   return (
      <>

         <div className="contenedor-descripcionDeDirecciones">
            <p className="descripcionDirecciones fontTexto">La dirección seleccionada se utilizará como su dirección personal (para la factura) y como su dirección de entrega.</p>
         </div>
      
         <form className="direccionesFormContainer">
            {/* <div className="contenedor-inputDirecciones"> */}
               {/* <TextField className="inputNombre" color="primary" required id="filled" label="Nombre"  variant="filled"/> */}
            {/* </div> */}

            <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Nombre y Apellidos:</label>
               <div className="subcontenedor-inputDirecciones">
                  <input className="input-direcciones fontTexto" type="text" name="nombreyapellidos" onChange={(e)=>leerInput("nombreyapellidos", e.target.value)} />
                   {/* <p className="alerta alertaCompletarCampo fontTexto">*Debe completar este campo para continuar</p> */}
               </div>
            </div>
            
            <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Dirección:</label>
               <div className="subcontenedor-inputDirecciones">
                  <input className="input-direcciones fontTexto" type="text" name="direccion" onChange={(e)=>leerInput("direccion", e.target.value)} />
                  {/* <p className="alerta alertaCompletarCampo fontTexto">*Debe completar este campo para continuar</p> */}
               </div>
            </div>

            <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Codigo Postal:</label>
               <div className="subcontenedor-inputDirecciones">
               <input className="input-direcciones fontTexto" type="text" name="codigoPostal" onChange={(e)=>leerInput("codigoPostal", e.target.value)} />
                  {/* <p className="alerta alertaCompletarCampo fontTexto">*Debe completar este campo para continuar</p> */}
               </div>
            </div>
            
            <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Ciudad:</label>
               <div className="subcontenedor-inputDirecciones">
               <input className="input-direcciones fontTexto" type="text" name="ciudad" onChange={(e)=>leerInput("ciudad", e.target.value)} />
                  {/* <p className="alerta alertaCompletarCampo fontTexto">*Debe completar este campo para continuar</p> */}
               </div>
            </div>
            
            <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Provincia:</label>
               <div className="subcontenedor-inputDirecciones">
               <input className="input-direcciones fontTexto" type="text" name="provincia" onChange={(e)=>leerInput("provincia", e.target.value)} />
                  {/* <p className="alerta alertaCompletarCampo fontTexto">*Debe completar este campo para continuar</p> */}
               </div>
            </div>
            
            {/* <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">País:</label>
               <input className="input-direcciones" type="text" />
            </div> */}
            
            <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Telefono:</label>
               <div className="subcontenedor-inputDirecciones">
               <input className="input-direcciones fontTexto" type="text" name="telefono" onChange={(e)=>leerInput("telefono", e.target.value)} />
                  {/* <p className="alerta alertaCompletarCampo fontTexto">*Debe completar este campo para continuar</p> */}
               </div>
            </div>
            
            {/* <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">DNI:</label>
               <input className="input-direcciones" type="text" />
            </div> */}
            <p className="boton-continuar fontTitulos" onClick={()=>continuar()} >Continuar</p>
         </form>

      </>
      )
}

export default SeccionDirecciones