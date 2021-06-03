import {useState} from 'react'
import CreditCard from './CreditCard'

const SeccionMetodoDePago = (props)=>{
   const [metodoElegido, setMetodoElegido] = useState("")
   const [metodoDePagoFueSeleccionado, setMetodoDePagoFueSeleccionado] = useState(false)

   const establecerMetodoDePago = (metodoSeleccionado)=>{
      props.statesDelPadre.setMetodoDePago('metodoSeleccionado')
      setMetodoElegido('metodoSeleccionado')
      setMetodoDePagoFueSeleccionado(true)
   }

   const funcionContinuar = ()=>{
      // metodoDePagoFueSeleccionado 
      //    ? props.statesDelPadre.datosDeTarjetaFueronPuestos 
      //       ? alert('Mostrar datos finales y Mostrar boton de confirmar compra')
      //       : alert('Faltan completar datos de la tarjeta')
      //    : alert('Por favor, seleccione un metodo de pago')
      metodoDePagoFueSeleccionado 
      ? props.statesDelPadre.setPasoDeCompra("pasoOpcional-cargarDatosDeTargeta")
      : alert('Por favor, seleccione un metodo de pago')
   }

   return (
      <>
         <label className={metodoElegido === "tarjetaDeDebito" ? "metodoDePago pagoSeleccionado fontTexto" : "metodoDePago fontTexto"} onClick={()=>establecerMetodoDePago("tarjetaDeDebito")}><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="targetaDeDebito"/>Tarjeta de Debito</label>

         <label className={metodoElegido === "tarjetaDeCredito" ? "metodoDePago credito pagoSeleccionado fontTexto" : "metodoDePago credito fontTexto"} onClick={()=>establecerMetodoDePago("tarjetaDeCredito")} ><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="targetaDeCredito"/>Tarjeta de Credito</label>

         <label className={metodoElegido === "efectivo" ? "metodoDePago efectivo pagoSeleccionado fontTexto" : "metodoDePago efectivo  fontTexto"} onClick={()=>establecerMetodoDePago("efectivo")}><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="efectivo"/>Efectivo en puntos de pago</label>

         {/* <CreditCard/> */}


         <p className="boton-continuar botonDeMetodoDePago fontTitulos" onClick={()=>funcionContinuar()} >Continuar</p>   

      </>
   )
}

export default SeccionMetodoDePago