import React from 'react'
import {useState} from 'react'

const PagoEnEfectivo = (props)=>{
   const {infoDelUsuario, setInfoDelUsuario} = props.statesDelPadre

   const [metodoElegido, setMetodoElegido] = useState("")
   const [metodoDePagoFueSeleccionado, setMetodoDePagoFueSeleccionado] = useState(false)

   const establecerMetodoDePago = (metodoSeleccionado)=>{
      setInfoDelUsuario({...infoDelUsuario, pagoEnEfectivo: metodoSeleccionado, pagoConTarjeta: false})
      setMetodoElegido(metodoSeleccionado)
      setMetodoDePagoFueSeleccionado(true)
   }

   const funcionContinuar = ()=>{
      console.log(metodoElegido)
      !metodoDePagoFueSeleccionado 
      ?  setMetodoElegido("ninguno")
      :  props.statesDelPadre.setPasoDeCompra("paso4-confirmarCompra")
   }

   const volver = ()=>{
      props.statesDelPadre.setPasoDeCompra("paso3-metodoDePago")
   }

   // const funcionContinuar = () => {
   //    props.setPasoDeCompra("paso4-confirmarCompra")
   // }

   return (
      <div className="seccion-PagoEnEfectivo">
         <div className="contenedor-opcionesDePagoEnEfectivo">
            {/* <label className={metodoElegido === "tarjetaDeDebito" ? "metodoDePago pagoSeleccionado fontTexto" : "metodoDePago fontTexto"} onClick={()=>establecerMetodoDePago("tarjetaDeDebito")}><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="targetaDeDebito"/>Pago Facil</label> */}
            <label className={metodoElegido === "pagoFacil" ? "metodoDePago pagoSeleccionado fontTexto" : "metodoDePago fontTexto"} onClick={()=>establecerMetodoDePago("pagoFacil")}><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="pagoFacil"/>Pago Facil</label>

            <label className={metodoElegido === "rapiPago" ? "metodoDePago pagoSeleccionado fontTexto" : "metodoDePago fontTexto"} onClick={()=>establecerMetodoDePago("rapiPago")} ><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="rapiPago"/>RapiPago</label>

            <label className={metodoElegido === "provinciaNet" ? "metodoDePago opcionProvincia pagoSeleccionado fontTexto" : "metodoDePago opcionProvincia  fontTexto"} onClick={()=>establecerMetodoDePago("provinciaNet")}><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="efectivo"/>Provincia NET Pagos</label>

            { metodoElegido === "ninguno" &&  <p className="error-MetodoDePago fontTexto">Para continuar seleccione un metodo de Pago.</p>}
         

         </div>
            <div className="contenedor-botonesAvanzar-metodoDePagoEfectivo">
               <p className="boton-continuar fontTitulos" onClick={()=>volver()} >Volver</p>
               <p className="boton-continuar fontTitulos" onClick={()=>funcionContinuar()}>Continuar</p>
            </div>
      </div>
      )
} 

export default PagoEnEfectivo