import React, { useState, useEffect } from 'react'
import {connect} from "react-redux"
import carritoActions from "../../redux/actions/carritoActions"
import authActions from "../../redux/actions/authActions"
import CloseIcon from '@material-ui/icons/Close';
import NumericInput from 'react-numeric-input'

const Producto = (props) => {
    

    return (
        <div className='BContainerProducto'>
            <div className='BImagenProducto' style={{backgroundImage:'url("https://casachula.com.ar/69-cart_default/mesa-auxiliar-capri.jpg")'}}></div>
            <h3>Titulo</h3>
            <div>
                <NumericInput className="BInputNumeric" 
                            // props.producto.cantidad
                            value={ 1 } 
                            min={ 0 } 
                            max={ 100 } 
                            step={ 1 } 
                            precision={ 0 } 
                            size={ 5 } 
                            onChange={(e)=>console.log(e)}
                            />

            </div>
            <h3>precio</h3>
            <CloseIcon />
        </div>
        
    )
}

const mapStateToProps = state => {
   return { 
       userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logInUser: carritoActions.logInUser,
}

export default connect(mapStateToProps ,mapDispatchToProps)(Producto)