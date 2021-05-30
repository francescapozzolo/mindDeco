import React, { useState, useEffect } from 'react'
import {connect} from "react-redux"
import carritoActions from "../../redux/actions/carritoActions"
import authActions from "../../redux/actions/authActions"
import CloseIcon from '@material-ui/icons/Close';
import NumericInput from 'react-numeric-input'

const Producto = (props) => {
    console.log('ln: 9', props.producto)

    return (
        <div className='BContainerProducto'>
            <div className='BImagenProducto' style={{backgroundImage:`url('${props.producto.idProducto.fotos[0]}')`}}></div>
            <div className='BProductoContenido'>
                <h3>{props.producto.idProducto.nombre.replace(/\b\w/g, l => l.toUpperCase())}</h3>
                <div>
                    <NumericInput className="BInputNumeric" 
                                value={ props.producto.cantidad } 
                                min={ 0 } 
                                max={ props.producto.idProducto.stock } 
                                step={ 1 } 
                                precision={ 0 } 
                                size={ 5 } 
                                onChange={(e)=>console.log(e)}
                                />

                </div>
                <h3>{props.producto.idProducto.precio + ' ARS'} </h3>
                <CloseIcon />
            </div>
            
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