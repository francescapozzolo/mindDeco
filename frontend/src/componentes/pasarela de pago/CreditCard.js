import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import TextField from "@material-ui/core/TextField";

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    dni: '',
    inputsIncompletos : {
      number: false,
      name: false,
      expiry: false,
      cvc: false,
      dni: false,
      helperText: "Por favor, complete este campo"
    },
    expiryValue: ''
  };
  
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
   
  handleInputChange = (e) => {
    const { name, value } = e.target; 
    this.setState({ [name]: value, inputsIncompletos: {[name]: false}});

    const agregarBarraAlExpiry = ()=>{
      this.setState({ [name]: value, inputsIncompletos: {[name]: false}, expiryValue: e.target.value});
      this.state.expiryValue.length === 1 && this.setState({[name]: value, inputsIncompletos: {[name]: false}, expiryValue: e.target.value + "/"})
    }

    name === "expiry" && agregarBarraAlExpiry()
    
  }
   
   funcionContinuar = ()=> {
    
    this.state.number === "" ? this.setState({inputsIncompletos: {number: true, helperText: "Por favor, Complete este campo"}})
      : this.state.number.length > 16 ? this.setState({inputsIncompletos: {number: true, helperText: "Numero de tarjeta invalido"}})
      : this.state.number.length < 16 ? this.setState({inputsIncompletos: {number: true, helperText: "Numero de tarjeta invalido"}})
      : this.state.name === "" ? this.setState({inputsIncompletos: {name: true, helperText: "Por favor, Complete este campo"}})
      : this.state.name.trim().indexOf(" ") === -1 ? this.setState({inputsIncompletos: {name: true, helperText: "Lo sentimos, Necesitamos su Nombre y Apellido"}})
      : this.state.expiry === "" ? this.setState({inputsIncompletos: {expiry: true, helperText: "Por favor, Complete este campo"}})
      : this.state.expiry.length > 5 ? this.setState({inputsIncompletos: {expiry: true, helperText: "Fecha no valida"}})
      : this.state.cvc === "" ? this.setState({inputsIncompletos: {cvc: true, helperText: "Por favor, Complete este campo"}})
      : this.state.dni === "" ? this.setState({inputsIncompletos: {dni: true, helperText: "Por favor, Complete este campo"}})
      : alert('continuar para ya confirmar la compra')

    console.log(this.state)
  }

    funcionVolver = ()=>{
      this.props.setPasoDeCompra("paso3-metodoDePago")
    }
   
   
   render() {
     return (
       <div className="contenedor-seccionCreditCard">
          <div id="PaymentForm">
            <form className="creditCard-form">
                { this.state.inputsIncompletos.number 
                    ? <TextField type="tel" error helperText={this.state.inputsIncompletos.helperText} name="number" className="creditCardInput1" label="Numero de Tarjeta" onChange={this.handleInputChange} onFocus={this.handleInputFocus} className="creditCardInput1"/>
                    :  <TextField type="tel" name="number" className="creditCardInput1" label="Numero de Tarjeta" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  className="creditCardInput1"/>
                }
                
                { this.state.inputsIncompletos.name 
                    ? <TextField type="tel" error helperText={this.state.inputsIncompletos.helperText} name="name" className="creditCardInput1" label="Nombre y Apellido" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
                    : <TextField type="tel" name="name" className="creditCardInput1" label="Nombre y Apellido" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
                }
                
                {/* <input type="tel" className="creditCard-input fontTexto" name="number" placeholder="Numero de Tarjeta" onChange={this.handleInputChange} onFocus={this.handleInputFocus} /> */}
                {/* <input type="tel" className="creditCard-input fontTexto" name="name" placeholder="Nombre y Apellido" onChange={this.handleInputChange} onFocus={this.handleInputFocus} /> */}
                
                <div className="contenedor-expiryCVC">
                  {/* <input type="tel" className="creditCard-input fontTexto" name="expiry" placeholder="Fecha de expiración" onChange={this.handleInputChange} onFocus={this.handleInputFocus} /> */}
                  {/* <input type="tel" className="creditCard-input cvcInput fontTexto" name="cvc" placeholder="Codigo de Seguridad" onChange={this.handleInputChange} onFocus={this.handleInputFocus} /> */}
                { this.state.inputsIncompletos.expiry
                    ? <TextField type="tel" error helperText={this.state.inputsIncompletos.helperText} value={this.state.expiryValue} name="expiry" className="inputExpiry" label="Fecha de expiración" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                    : <TextField type="tel" name="expiry" className="inputExpiry" value={this.state.expiryValue} label="Fecha de expiración" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                }

                {this.state.inputsIncompletos.cvc 
                  ? <TextField type="tel" error helperText={this.state.inputsIncompletos.helperText} name="cvc" className="inputCVC" label="Codigo de Seguridad" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                  : <TextField type="tel" name="cvc" className="inputCVC" label="Codigo de Seguridad" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                }
                </div>
                {/* <input type="text" className="creditCard-input fontTexto" placeholder="DNI del Titular de la tarjeta" onFocus={this.handleInputFocus} /> */}
                
                {this.state.inputsIncompletos.dni 
                  ? <TextField type="tel" error helperText={this.state.inputsIncompletos.helperText} name="dni" className="creditCardInput1" label="DNI del Titular de la tarjeta" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                  : <TextField type="tel" name="dni" className="creditCardInput1" label="DNI del Titular de la tarjeta" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                }
            </form>
            <Cards className="creditCard-example"
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
              />
            </div>
            <div className="contenedor-botonesContinuar-creditCard">
              <p className="boton-continuar fontTitulos" onClick={()=>this.funcionVolver()}>Volver</p>
              <p className="boton-continuar fontTitulos" onClick={()=>this.funcionContinuar()}>Continuar</p>
            </div>
          {/* <p className="boton-continuar botonDeMetodoDePago fontTitulos" onClick={()=>this.funcionContinuar()} >Continuar</p>    */}
        </div>

     );
   }
 }


// const CreditCard = ()=>{

//    return (
//       <h1>Soy el componente de Credit Card</h1>
//    )
// }

// export default CreditCard
