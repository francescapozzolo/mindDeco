import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom'


const SeccionDirecciones = (props)=>{
   const {infoDelUsuario, setInfoDelUsuario} = props.statesDelPadre
   // const [infoDelUsuario, setInfoDelUsuario] = useState({nombreyapellidos: '', direccion: '', codigoPostal: '', ciudad: '', provincia: '', telefono: '', descripcionExtra: ""})
   const [inputsIncompletos, setInputsIncompletos] = useState({ nombreyapellidos: false, direccion: false, ciudad: false, codigoPostal: false, provincia:false, telefono: false, helperInputNombre: "Complete este campo para continuar." })
   // const [helperInputNombre, setHelperInputNombre] = useState("Complete este campo para continuar.")

   useEffect(()=>{
   if(localStorage.getItem("infoDeCompraDelUsuario")){
      setInfoDelUsuario(JSON.parse(localStorage.getItem("infoDeCompraDelUsuario")))
   }
   },[])

   const leerInput = (campo, valorDelInput) => {
      setInfoDelUsuario({ ...infoDelUsuario, [campo]: valorDelInput })
      setInputsIncompletos({...inputsIncompletos, [campo]: false})
   }

   const avanzar = ()=>{
      props.statesDelPadre.setPasoDeCompra('paso2-metodoDeEnvio')
      localStorage.setItem("infoDeCompraDelUsuario", JSON.stringify(infoDelUsuario))
      // localStorage.setItem("pasoDeCompra", "paso2-metodoDeEnvio")
   }

   const continuar = () => {
      // console.log(infoDelUsuario)
      infoDelUsuario.nombreyapellidos === "" ? setInputsIncompletos({...inputsIncompletos, nombreyapellidos: true})
         : infoDelUsuario.nombreyapellidos.trim().indexOf(" ") === -1 ? setInputsIncompletos({...inputsIncompletos, nombreyapellidos: true, helperInputNombre: "Lo sentimos, Necesitamos su Nombre y Apellido"})
         : infoDelUsuario.nombreyapellidos.indexOf(" ") === -1 ? setInputsIncompletos({...inputsIncompletos, nombreyapellidos: true, helperInputNombre: "Lo sentimos, Necesitamos su Nombre y Apellido"})
         : infoDelUsuario.direccion === "" ? setInputsIncompletos({...inputsIncompletos, direccion: true})
         : infoDelUsuario.ciudad === "" ? setInputsIncompletos({...inputsIncompletos, ciudad: true})
         : infoDelUsuario.codigoPostal === "" ? setInputsIncompletos({...inputsIncompletos, codigoPostal: true})
         : infoDelUsuario.provincia === "" ? setInputsIncompletos({...inputsIncompletos, provincia: true})
         : infoDelUsuario.telefono === "" ? setInputsIncompletos({...inputsIncompletos, telefono: true})
         : avanzar()
         // : props.setPasoDeCompra('paso2-metodoDeEnvio')
         console.log(inputsIncompletos)
   }
   return (
      <>

         <div className="contenedor-descripcionDeDirecciones">
            <p className="descripcionDirecciones fontTexto">La dirección seleccionada se utilizará como su dirección personal (para la factura) y como su dirección de entrega.</p>
         </div>
      
         <form className="direccionesFormContainer">
            <div className="contenedor-input-nombreyDireccion">
               {inputsIncompletos.nombreyapellidos 
                  ? <TextField error helperText={inputsIncompletos.helperInputNombre} value={infoDelUsuario.nombreyapellidos} id="textField1" onChange={(e)=>leerInput("nombreyapellidos", e.target.value)} name="nombreyapellidos" className="inputNombreNuevo" label="Nombre y Apellidos"  />
                  : <TextField className="inputNombreNuevo" value={infoDelUsuario.nombreyapellidos} onChange={(e)=>leerInput("nombreyapellidos", e.target.value)} name="nombreyapellidos" label="Nombre y Apellidos" />
               }
               {inputsIncompletos.direccion 
                  ? <TextField error helperText="Complete este campo para continuar."  value={infoDelUsuario.direccion} onChange={(e)=>leerInput("direccion", e.target.value)} name="direccion" className="inputNombreNuevo" label="Direccion"  />
                  : <TextField className="inputNombreNuevo" value={infoDelUsuario.direccion} onChange={(e)=>leerInput("direccion", e.target.value)} name="direccion" label="Direccion" />
               }
            </div>
            <div className="contenedor-input-nombreyDireccion">
               {inputsIncompletos.ciudad 
                  ? <TextField error helperText="Complete este campo para continuar." value={infoDelUsuario.ciudad} onChange={(e)=>leerInput("ciudad", e.target.value)} name="ciudad"  className="inputNombreNuevo" label="Ciudad"  />
                  : <TextField className="inputNombreNuevo" value={infoDelUsuario.ciudad} onChange={(e)=>leerInput("ciudad", e.target.value)} name="ciudad" label="Ciudad" />
               }
               {inputsIncompletos.codigoPostal 
                  ? <TextField error helperText="Complete este campo para continuar." value={infoDelUsuario.codigoPostal} onChange={(e)=>leerInput("codigoPostal", e.target.value)} name="codigoPostal" className="inputNombreNuevo" label="Codigo Postal"  />
                  : <TextField className="inputNombreNuevo" value={infoDelUsuario.codigoPostal} onChange={(e)=>leerInput("codigoPostal", e.target.value)} name="ciudad" label="Codigo Postal" />
               }
            </div>
            <div className="contenedor-input-nombreyDireccion">
               {inputsIncompletos.provincia 
                  ? <TextField error helperText="Complete este campo para continuar." value={infoDelUsuario.provincia} onChange={(e)=>leerInput("provincia", e.target.value)} name="provincia" className="inputNombreNuevo" label="Provincia"  />
                  : <TextField className="inputNombreNuevo" value={infoDelUsuario.provincia} onChange={(e)=>leerInput("provincia", e.target.value)} name="ciudad" label="Provincia" />
               }
               {inputsIncompletos.telefono 
                  ? <TextField error helperText="Complete este campo para continuar." value={infoDelUsuario.telefono} onChange={(e)=>leerInput("telefono", e.target.value)} name="telefono" className="inputNombreNuevo" label="Telefono de Contacto"  />
                  : <TextField className="inputNombreNuevo" value={infoDelUsuario.telefono} onChange={(e)=>leerInput("telefono", e.target.value)} name="telefono" label="Telefono de Contacto" />
               }
            </div>

            <label className="label-infoExtra fontTexto">Indicaciones adicionales para el repartidor (opcional)</label>
            <textarea className="textArea-extraInfo fontTexto" value={infoDelUsuario.descripcionExtra} onChange={(e)=>leerInput("descripcionExtra", e.target.value )} placeholder="Entre que calles, casa de que color, algun distintivo a la vista, etc..." ></textarea>

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