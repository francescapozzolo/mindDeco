import React, { useState, useEffect } from 'react'
import {connect} from "react-redux"
import carritoActions from "../../redux/actions/carritoActions"
import authActions from "../../redux/actions/authActions"
import Producto from './Producto';

const Carrito = (props) => {
    const [num, setNum] = useState(0)

    // useEffect(()=>{

    // },[])
    
    

    return (
        <div className='BContainerCarrito'>
            <div className='BContainerProductos'>
                {
                    // props.userLogged.carrito.map(producto => <Producto producto={producto} />)
                }
                <Producto />
            </div>
            <div className='BTableroCarrito'>
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

export default connect(mapStateToProps ,mapDispatchToProps)(Carrito)