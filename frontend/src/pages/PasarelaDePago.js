import e from 'cors'
import React, { useState } from 'react'

const PasarelaDePago = ()=>{
   
   const [metodoSeleccionado, setMetodoSeleccionado] = useState("")
   const [metodoDePago, setMetodoDePago] = useState("")

   return( 
      <div className="contenedorGeneral-pagina-pasarelaDePago">
         <div className="contenedorDeFormularios">
            <p className="tituloDirecciones-pasarelaDePago fontTitulos" >1. Direcciones</p>
            
            <div className="contenedor-descripcionDeDirecciones">
               <div className="barraHorizontal-Pasarela"></div>
               <p className="descripcionDirecciones fontTexto">La dirección seleccionada se utilizará como su dirección personal (para la factura) y como su dirección de entrega.</p>
            </div>
            <form className="direccionesFormContainer">
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Nombre:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Apellidos:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Empresa:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Numero de IVA:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Dirección:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Dirección Complementaria:</label>
                  <input className="input-direcciones" type="text" />
               </div>

               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Código postal/Zip:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Ciudad:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Provincia:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">País:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">Teléfono:</label>
                  <input className="input-direcciones" type="text" />
               </div>
               
               <div className="contenedor-input-direcciones">
                  <label className="fontTexto">DNI:</label>
                  <input className="input-direcciones" type="text" />
               </div>
            <p className="boton-continuar fontTitulos">Continuar</p>
            </form>


            <p className="tituloMetodoEnvio-pasarelaDePago fontTitulos" >2. Metodo de Envio</p>
            <div className="barraHorizontal-Pasarela"></div>
               
               
            <label for="1" className={metodoSeleccionado === "envioOpcion1" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>setMetodoSeleccionado("envioOpcion1")}><input type="radio" id="1" className="metodoDePagoOption" name="metodoDeEnvio" value="recibirCompra"/>Recibir Compra</label>
            
            <label for="2" className={metodoSeleccionado === "envioOpcion2" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>setMetodoSeleccionado("envioOpcion2")}><input type="radio" id="2" className="metodoDePagoOption" name="metodoDeEnvio" value="retiroEnDepo"/>Retiro en Deposito mas cercano</label>

            <label for="3" className={metodoSeleccionado === "envioOpcion3" ? "metodoDeEnvio metodoSeleccionado fontTexto" : "metodoDeEnvio fontTexto"} onClick={()=>setMetodoSeleccionado("envioOpcion3")}><input type="radio" id="3" className="metodoDePagoOption" name="metodoDeEnvio" value="retiroEnCorreo"/>Retiro en Correo</label>

            <p className="boton-continuar botonDeMetodoDeEnvio fontTitulos">Continuar</p>


            <p className="tituloEnvio-pasarelaDePago fontTitulos" >3. Metodo de Pago</p>
            <div className="barraHorizontal-Pasarela"></div>

            <label className={metodoDePago === "pagoOpcion1" ? "metodoDePago pagoSeleccionado fontTexto" : "metodoDePago fontTexto"} onClick={()=>setMetodoDePago("pagoOpcion1")}><input type="radio"  className="metodoDePagoOption" name="metodoDePago" value="mercadoPago"/>Mercado Pago</label>

            <label className={metodoDePago === "pagoOpcion2" ? "metodoDePago pagoSeleccionado fontTexto" : "metodoDePago fontTexto"} onClick={()=>setMetodoDePago("pagoOpcion2")}><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="targetaDeDebito"/>Targeta de Debito</label>
            
            <label className={metodoDePago === "pagoOpcion3" ? "metodoDePago credito pagoSeleccionado fontTexto" : "metodoDePago credito fontTexto"} onClick={()=>setMetodoDePago("pagoOpcion3")} ><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="targetaDeCredito"/>Targeta de Credito</label>

            <label className={metodoDePago === "pagoOpcion4" ? "metodoDePago efectivo pagoSeleccionado fontTexto" : "metodoDePago efectivo  fontTexto"} onClick={()=>setMetodoDePago("pagoOpcion4")}><input type="radio" className="metodoDePagoOption" name="metodoDePago" value="efectivo"/>Efectivo en puntos de pago</label>

            <p className="boton-continuar botonDeMetodoDePago fontTitulos">Continuar</p>



         </div>

         <div className="contenedorLateral"></div>
         
      </div>
   )
}

export default PasarelaDePago