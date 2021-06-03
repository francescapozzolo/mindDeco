import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
 
export default class PaymentForm extends React.Component {
   state = {
     cvc: '',
     expiry: '',
     focus: '',
     name: '',
     number: '',
   };
  
   handleInputFocus = (e) => {
     this.setState({ focus: e.target.name });
   }
   
   handleInputChange = (e) => {
     const { name, value } = e.target;
     
     this.setState({ [name]: value });
   }
   
   funcionContinuar = ()=> {
    this.state.number === "" ? alert('Debe llenar el campo Numero de Targeta para continuar')
      : this.state.name === "" ? alert('Debe llenar el campo Nombre para continuar')
      : this.state.expiry === "" ? alert('Debe llenar el campo Fecha de Expiracion para continuar')
      : this.state.cvc === "" ? alert('Debe llenar el campo cvc para continuar')
      : alert('continuar para ya confirmar la compra')
    // alert('funcion continuar credit card')
   }


   render() {
     return (
       <>
          <div id="PaymentForm">
            <Cards className="creditCard-example"
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
              />
            <form className="creditCard-form">
                <input type="tel" className="creditCard-input fontTexto" name="number" placeholder="Numero de Tarjeta" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
                <input type="tel" className="creditCard-input fontTexto" name="name" placeholder="Nombre y Apellido" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
                
                <div className="contenedor-expiryCVC">
                  <input type="tel" className="creditCard-input fontTexto" name="expiry" placeholder="Fecha de expiración" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
                  <input type="tel" className="creditCard-input cvcInput fontTexto" name="cvc" placeholder="Codigo de Seguridad" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
                </div>
                
                <input type="text" className="creditCard-input fontTexto" placeholder="DNI del Titular de la tarjeta" onFocus={this.handleInputFocus} />
            </form>
          </div>
          <p className="boton-continuar botonDeMetodoDePago fontTitulos" onClick={()=>this.funcionContinuar()} >Continuar</p>   
        </>

     );
   }
 }


// const CreditCard = ()=>{

//    return (
//       <h1>Soy el componente de Credit Card</h1>
//    )
// }

// export default CreditCard
