import React, { useState, useEffect } from 'react'
import {connect} from "react-redux"
import carritoActions from "../../redux/actions/carritoActions"
import authActions from "../../redux/actions/authActions"
import Producto from './Producto';

const Carrito = (props) => {
    const [num, setNum] = useState(0)
    const [carrito, setCarrito] = useState([])
    
    useEffect(() => {
        productos()
    }, [])
    
    const productos = async () => {
        if(props.userLogged){
            const array = await props.obtenerProductos(props.userLogged)
            console.log('ln:15',array)
            setCarrito(array.carrito)
        }else{
            console.log(props)
            props.history.push('/')
        }
    }
    // console.log(props)
    
    // productos()
    
    return (
        <div className='BContainerCarrito'>
            <div className='BContainerProductos'>
                {
                    carrito.map(producto => <Producto producto={producto} />)
                }
                {/* <Producto /> */}
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
    obtenerProductos: carritoActions.obtenerProductos,
}

export default connect(mapStateToProps ,mapDispatchToProps)(Carrito)