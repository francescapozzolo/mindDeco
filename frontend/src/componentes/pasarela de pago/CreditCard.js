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
    expiryValue: '',
    numberValue: ''
  };
  
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
   
  handleInputChange = (e) => {
    const { name, value } = e.target; 
    this.setState({ [name]: value, inputsIncompletos: {[name]: false}});
    
    // const agregarBarraAlExpiry = ()=>{
    //   if(name === "expiry"){
    //     this.setState({ [name]: value, inputsIncompletos: {[name]: false}, expiryValue: e.target.value});
    //     this.state.expiry.trim().length === 1 && this.setState({[name]: value, inputsIncompletos: {[name]: false}, expiry: e.target.value + "/"})
    //   }
    // }
    
    this.props.statesDelPadre.setInfoDelUsuario({ ...this.props.statesDelPadre.infoDelUsuario, pagoConTarjeta: {...this.props.statesDelPadre.infoDelUsuario.pagoConTarjeta, [name]: e.target.value}, pagoEnEfectivo: false})

    const agregarEspaciosAlNum = () => {
      if(name === "number"){
        this.setState({ [name]: value, inputsIncompletos: {[name]: false}, numberValue: e.target.value});
        if(this.state.numberValue.trim().length === 3){
          this.setState({[name]: value, inputsIncompletos: {[name]: false}, numberValue: e.target.value + "  "})  
        } else if (this.state.numberValue.trim().length === 9){
          this.setState({[name]: value, inputsIncompletos: {[name]: false}, numberValue: e.target.value + "  "})  
        } else if(this.state.numberValue.trim().length === 15) {
          this.setState({[name]: value, inputsIncompletos: {[name]: false}, numberValue: e.target.value + "  "})  
        }
      }
    }
    agregarEspaciosAlNum()

  }
   
  avanzar = () => {
    this.props.statesDelPadre.setPasoDeCompra("paso4-confirmarCompra")
    // localStorage.setItem("pasoDeCompra", "paso4-confirmarCompra")
  }

   funcionContinuar = ()=> {
    this.state.number === "" ? this.setState({inputsIncompletos: {number: true, helperText: "Por favor, Complete este campo"}})
      // : this.state.number.length > 16 ? this.setState({inputsIncompletos: {number: true, helperText: "Numero de tarjeta invalido"}})
      // : this.state.number.length < 16 ? this.setState({inputsIncompletos: {number: true, helperText: "Numero de tarjeta invalido"}})
      : this.state.name === "" ? this.setState({inputsIncompletos: {name: true, helperText: "Por favor, Complete este campo"}})
      : this.state.name.trim().indexOf(" ") === -1 ? this.setState({inputsIncompletos: {name: true, helperText: "Lo sentimos, Necesitamos su Nombre y Apellido"}})
      : this.state.expiry === "" ? this.setState({inputsIncompletos: {expiry: true, helperText: "Por favor, Complete este campo"}})
      : this.state.expiry.length > 5 ? this.setState({inputsIncompletos: {expiry: true, helperText: "Fecha no valida"}})
      : this.state.cvc === "" ? this.setState({inputsIncompletos: {cvc: true, helperText: "Por favor, Complete este campo"}})
      : this.state.dni === "" ? this.setState({inputsIncompletos: {dni: true, helperText: "Por favor, Complete este campo"}})
      : this.avanzar()
  }

    funcionVolver = ()=>{
      this.props.statesDelPadre.setPasoDeCompra("paso3-metodoDePago")
      // localStorage.setItem("pasoDeCompra", "paso3-metodoDePago")
    }
   
   
   render() {
     return (
       <div className="contenedor-seccionCreditCard">
          <div id="PaymentForm">
            <form className="creditCard-form">
                { this.state.inputsIncompletos.number 
                    ? <TextField type="tel" error helperText={this.state.inputsIncompletos.helperText} value={this.state.numberValue} name="number" className="creditCardInput1" label="Numero de Tarjeta" onChange={this.handleInputChange} onFocus={this.handleInputFocus} className="creditCardInput1"/>
                    :  <TextField type="tel" name="number" className="creditCardInput1" label="Numero de Tarjeta" value={this.state.numberValue} onChange={this.handleInputChange} onFocus={this.handleInputFocus}  className="creditCardInput1"/>
                }
                
                { this.state.inputsIncompletos.name 
                    ? <TextField type="tel" error helperText={this.state.inputsIncompletos.helperText} name="name" className="creditCardInput1" label="Nombre y Apellido" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
                    : <TextField type="tel" name="name" className="creditCardInput1" label="Nombre y Apellido" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
                }
                
                <div className="contenedor-expiryCVC">
                { this.state.inputsIncompletos.expiry
                    ? <TextField type="tel" error helperText={this.state.inputsIncompletos.helperText} name="expiry" className="inputExpiry" label="Fecha de expiración" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                    : <TextField type="tel" name="expiry" className="inputExpiry" label="Fecha de expiración" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                }

                {this.state.inputsIncompletos.cvc 
                  ? <TextField type="tel" error helperText={this.state.inputsIncompletos.helperText} name="cvc" className="inputCVC" label="Codigo de Seguridad" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                  : <TextField type="tel" name="cvc" className="inputCVC" label="Codigo de Seguridad" onChange={this.handleInputChange} onFocus={this.handleInputFocus}  />
                }
                </div>
                
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
