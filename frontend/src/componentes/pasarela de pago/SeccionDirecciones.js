import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import {NavLink} from 'react-router-dom'


const SeccionDirecciones = (props)=>{

   const [infoDelUsuario, setInfoDelUsuario] = useState({nombreyapellidos: '', direccion: '', codigoPostal: '', ciudad: '', provincia: '', telefono: ''})
   const [inputsIncompletos, setInputsIncompletos] = useState({ nombreyapellidos: false, direccion: false, ciudad: false, codigoPostal: false, provincia:false, telefono: false })

   const leerInput = (campo, valorDelInput) => {
      setInfoDelUsuario({ ...infoDelUsuario, [campo]: valorDelInput })
      setInputsIncompletos({...inputsIncompletos, [campo]: false})
      console.log(infoDelUsuario)
   }

   const continuar = () => {
      console.log(infoDelUsuario)
      infoDelUsuario.nombreyapellidos === "" ? setInputsIncompletos({...inputsIncompletos, nombreyapellidos: true})
         : infoDelUsuario.direccion === "" ? setInputsIncompletos({...inputsIncompletos, direccion: true})
         : infoDelUsuario.ciudad === "" ? setInputsIncompletos({...inputsIncompletos, ciudad: true})
         : infoDelUsuario.codigoPostal === "" ? setInputsIncompletos({...inputsIncompletos, codigoPostal: true})
         : infoDelUsuario.provincia === "" ? setInputsIncompletos({...inputsIncompletos, provincia: true})
         : infoDelUsuario.telefono === "" ? setInputsIncompletos({...inputsIncompletos, telefono: true})
         : props.setPasoDeCompra('paso2-metodoDeEnvio')

         console.log(inputsIncompletos)
   }
   // const continuar = () => {
      // infoDelUsuario.nombreyapellidos == "" ? setInputsIncompletos({...inputsIncompletos, nombreyapellidos: true}) : setInputsIncompletos({...inputsIncompletos}) 
      // infoDelUsuario.direccion === "" ? setInputsIncompletos({...inputsIncompletos, direccion: true}) : setInputsIncompletos({...inputsIncompletos})
      // infoDelUsuario.codigoPostal === "" ? setInputsIncompletos({...inputsIncompletos, codigoPostal: true}) : setInputsIncompletos({...inputsIncompletos})
      // infoDelUsuario.ciudad === "" ? setInputsIncompletos({...inputsIncompletos, ciudad: true}) : setInputsIncompletos({...inputsIncompletos})
      // infoDelUsuario.provincia === "" ? setInputsIncompletos({...inputsIncompletos, provincia: true}) : setInputsIncompletos({...inputsIncompletos})
      // infoDelUsuario.telefono === "" ? setInputsIncompletos({...inputsIncompletos, telefono: true}) : setInputsIncompletos({...inputsIncompletos})
      // props.setPasoDeCompra('paso2-metodoDeEnvio')
      // console.log(infoDelUsuario)
      // console.log(inputsIncompletos)
   // }

   return (
      <>

         <div className="contenedor-descripcionDeDirecciones">
            <p className="descripcionDirecciones fontTexto">La dirección seleccionada se utilizará como su dirección personal (para la factura) y como su dirección de entrega.</p>
         </div>
      
         <form className="direccionesFormContainer">
            {/* <TextField error id="standard-error-helper-text" label="Nombre" defaultValue="Hello World" helperText="Complete este campo para continuar." /> */}
            <div className="contenedor-input-nombreyDireccion">
               {inputsIncompletos.nombreyapellidos 
                  ? <TextField error helperText="Complete este campo para continuar." id="textField1" onChange={(e)=>leerInput("nombreyapellidos", e.target.value)} name="nombreyapellidos" id="standard-error-helper-text" className="inputNombreNuevo" label="Nombre y Apellidos"  />
                  : <TextField id="standard-error-helper-text" className="inputNombreNuevo" onChange={(e)=>leerInput("nombreyapellidos", e.target.value)} name="nombreyapellidos" label="Nombre y Apellidos" />
               }
               {inputsIncompletos.direccion 
                  ? <TextField error helperText="Complete este campo para continuar." id="textField1" onChange={(e)=>leerInput("direccion", e.target.value)} name="direccion" id="standard-error-helper-text" className="inputNombreNuevo" label="Direccion"  />
                  : <TextField id="standard-error-helper-text" className="inputNombreNuevo" onChange={(e)=>leerInput("direccion", e.target.value)} name="direccion" label="Direccion" />
               }
            </div>
            <div className="contenedor-input-nombreyDireccion">
               {inputsIncompletos.ciudad 
                  ? <TextField error helperText="Complete este campo para continuar." id="textField1" onChange={(e)=>leerInput("ciudad", e.target.value)} name="ciudad" id="standard-error-helper-text" className="inputNombreNuevo" label="Ciudad"  />
                  : <TextField id="standard-error-helper-text" className="inputNombreNuevo" onChange={(e)=>leerInput("ciudad", e.target.value)} name="ciudad" label="Ciudad" />
               }
               {inputsIncompletos.codigoPostal 
                  ? <TextField error helperText="Complete este campo para continuar." id="textField1" onChange={(e)=>leerInput("codigoPostal", e.target.value)} name="codigoPostal" id="standard-error-helper-text" className="inputNombreNuevo" label="Codigo Postal"  />
                  : <TextField id="standard-error-helper-text" className="inputNombreNuevo" onChange={(e)=>leerInput("codigoPostal", e.target.value)} name="ciudad" label="Codigo Postal" />
               }
            </div>
            <div className="contenedor-input-nombreyDireccion">
               {inputsIncompletos.provincia 
                  ? <TextField error helperText="Complete este campo para continuar." id="textField1" onChange={(e)=>leerInput("provincia", e.target.value)} name="provincia" id="standard-error-helper-text" className="inputNombreNuevo" label="Provincia"  />
                  : <TextField id="standard-error-helper-text" className="inputNombreNuevo" onChange={(e)=>leerInput("provincia", e.target.value)} name="ciudad" label="Provincia" />
               }
               {inputsIncompletos.telefono 
                  ? <TextField error helperText="Complete este campo para continuar." id="textField1" onChange={(e)=>leerInput("telefono", e.target.value)} name="telefono" id="standard-error-helper-text" className="inputNombreNuevo" label="Telefono de Contacto"  />
                  : <TextField id="standard-error-helper-text" className="inputNombreNuevo" onChange={(e)=>leerInput("telefono", e.target.value)} name="telefono" label="Telefono de Contacto" />
               }
               {/* <TextField id="standard-error-helper-text" className="inputNombreNuevo" label="Provincia" defaultValue="" /> */}
               {/* <TextField id="standard-error-helper-text" className="inputDireccion" label="Telefono de Contacto" defaultValue="" /> */}
            </div>

            <label className="label-infoExtra fontTexto">Indicaciones adicionales para el repartidor (opcional)</label>
            <textarea className="textArea-extraInfo fontTexto" placeholder="Entre que calles, casa de que color, algun distintivo a la vista, etc..." ></textarea>




            {/* <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Nombre y Apellidos:</label>
               <div className="subcontenedor-inputDirecciones">
                  <input className="input-direcciones fontTexto" type="text" name="nombreyapellidos" onChange={(e)=>leerInput("nombreyapellidos", e.target.value)} />
               </div>
            </div> */}
            
            {/* <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Dirección:</label>
               <div className="subcontenedor-inputDirecciones">
                  <input className="input-direcciones fontTexto" type="text" name="direccion" onChange={(e)=>leerInput("direccion", e.target.value)} />
               </div>
            </div> */}

            {/* <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Codigo Postal:</label>
               <div className="subcontenedor-inputDirecciones">
               <input className="input-direcciones fontTexto" type="text" name="codigoPostal" onChange={(e)=>leerInput("codigoPostal", e.target.value)} />
               </div>
            </div> */}
            
            {/* <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Ciudad:</label>
               <div className="subcontenedor-inputDirecciones">
               <input className="input-direcciones fontTexto" type="text" name="ciudad" onChange={(e)=>leerInput("ciudad", e.target.value)} />
               </div>
            </div> */}
            
            {/* <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Provincia:</label>
               <div className="subcontenedor-inputDirecciones">
               <input className="input-direcciones fontTexto" type="text" name="provincia" onChange={(e)=>leerInput("provincia", e.target.value)} />
               </div>
            </div> */}
            
            {/* <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">Telefono:</label>
               <div className="subcontenedor-inputDirecciones">
               <input className="input-direcciones fontTexto" type="text" name="telefono" onChange={(e)=>leerInput("telefono", e.target.value)} /> */}
                  {/* <p className="alerta alertaCompletarCampo fontTexto">*Debe completar este campo para continuar</p> */}
               {/* </div> */}
            {/* </div> */}
            
            {/* <div className="contenedor-input-direcciones">
               <label className="texto-direcciones fontTexto">DNI:</label>
               <input className="input-direcciones" type="text" />
            </div> */}
            <div className="contenedor-botonesAvanzar">
               <NavLink to="/carrito">
                  <p className="boton-continuar fontTitulos">Volver</p>
               </NavLink>
               <p className="boton-continuar fontTitulos" onClick={()=>continuar()}>Continuar</p>
            </div>
         </form>

      </>
      )
}

export default SeccionDirecciones