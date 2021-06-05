import {useState} from 'react'
import CreditCard from './CreditCard'
import { Icon, InlineIcon } from '@iconify/react';
import creditCard2Front from '@iconify-icons/bi/credit-card-2-front';
import creditCard from '@iconify-icons/mdi-light/credit-card';
import moneyBill from '@iconify-icons/uil/money-bill';
// import { Icon, InlineIcon } from '@iconify/react';
import moneyIcon from '@iconify-icons/carbon/money';



const SeccionMetodoDePago = (props)=>{
   const {infoDelUsuario, setInfoDelUsuario} = props.statesDelPadre

   const [metodoElegido, setMetodoElegido] = useState("")
   const [metodoDePagoFueSeleccionado, setMetodoDePagoFueSeleccionado] = useState(false)

   const establecerMetodoDePago = (metodoSeleccionado)=>{
      setInfoDelUsuario({...infoDelUsuario, metodoDePago: metodoSeleccionado})
      setMetodoElegido(metodoSeleccionado)
      setMetodoDePagoFueSeleccionado(true)
   }

   const funcionContinuar = ()=>{
      console.log(metodoElegido)
      !metodoDePagoFueSeleccionado 
      ? setMetodoElegido("ninguno")
      :  metodoElegido === "efectivo" 
         ?  props.statesDelPadre.setPasoDeCompra("pasoOpcional-pagoEnEfectivo") 
         :  props.statesDelPadre.setPasoDeCompra("pasoOpcional-pagarConTarjeta")

   }

   const volver = ()=>{
      props.statesDelPadre.setPasoDeCompra("paso2-metodoDeEnvio")
   }
   // console.log(props.statesDelPadre)
   return (
      <div className="seccion-metodoDePago">
         <div className="contenedor-opcionesDePago">

            <label className={metodoElegido === "tarjetaDeDebito" ? "metodoDePago pagoSeleccionado fontTexto" : "metodoDePago fontTexto"} onClick={()=>establecerMetodoDePago("tarjetaDeDebito")}>
            <input type="radio" className="metodoDePagoOption" name="metodoDePago" value="targetaDeDebito"/>
            <div className="contenedor-debitCardIcon">
               <Icon icon={creditCard2Front} className="creditCard-icon" />
            </div>
            Tarjeta de Debito</label>

            <label className={metodoElegido === "tarjetaDeCredito" ? "metodoDePago credito pagoSeleccionado fontTexto" : "metodoDePago credito fontTexto"} onClick={()=>establecerMetodoDePago("tarjetaDeCredito")}>
            <input type="radio" className="metodoDePagoOption" name="metodoDePago" value="targetaDeCredito"/>
            <div className="contenedor-creditCardicon">
               <Icon icon={creditCard} className="debitCard-icon" />
            </div>
            Tarjeta de Credito</label>

            <label className={metodoElegido === "efectivo" ? "metodoDePago efectivo pagoSeleccionado fontTexto" : "metodoDePago efectivo  fontTexto"} onClick={()=>establecerMetodoDePago("efectivo")}>
            <input type="radio" className="metodoDePagoOption" name="metodoDePago" value="efectivo"/>
            <div className="contenedor-cashIcon">
               <Icon icon={moneyIcon} className="cashIcon" />
            </div>
            Efectivo en puntos de pago</label>

            { metodoElegido === "ninguno" &&  <p className="error-MetodoDePago fontTexto">Para continuar seleccione un metodo de Pago.</p>}
         </div>

         <div className="contenedor-botonesAvanzar-metodoDeEnvio">
            <p className="boton-continuar fontTitulos" onClick={()=>volver()} >Volver</p>
            <p className="boton-continuar fontTitulos" onClick={()=>funcionContinuar()}>Continuar</p>
         </div>
      </div>
   )
}

export default SeccionMetodoDePago