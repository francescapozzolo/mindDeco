import React, { useState, useEffect } from 'react'
import {connect} from "react-redux"
import carritoActions from "../../redux/actions/carritoActions"
import authActions from "../../redux/actions/authActions"
import Producto from './Producto';

const Carrito = (props) => {
    const [num, setNum] = useState(0)
    const [carrito, setCarrito] = useState([])
    const [loading, setLoading] = useState(true)
    let precioTotal = 0
    let articulosTotales = 0
    useEffect(() => {
        productos()
    }, [])
    
    const productos = async () => {
        if(props.userLogged){
            const array = await props.obtenerProductos(props.userLogged)
            setCarrito(array.carrito)
        }else{
            props.history.push('/')
        }
    }
    
    const modificaProducto = async (producto, cantidad) => {
        if(!cantidad) return borrarProducto(producto)
        const response = await props.modificarProducto(props.userLogged, producto, cantidad)
        setCarrito(response.carrito)
    }

    const borrarProducto = async (producto) => {
        const response = await props.borrarProducto(props.userLogged, producto)
        setCarrito(response.carrito)
    } 
    return (
        <div className='BContainerCarrito'>
            <div className='BContainerProductos'>
                {
                    carrito.map(producto => {
                    
                        precioTotal +=  producto.cantidad*producto.idProducto.precio
                        articulosTotales += producto.cantidad
                        return <Producto producto={producto} borrarProducto={borrarProducto} modificaProducto={modificaProducto}/>
                        
                })
                }
                {/* <Producto /> */}
            </div>
            <div className='BTableroCarrito'>
                <div className='BTableroContenido'>
                    <h3>{articulosTotales+' artículos'}</h3>
                    <h3>{precioTotal}</h3>
                </div>
                <button className='BButon'>COMPRAR</button>
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
    modificarProducto: carritoActions.modificarProducto,
    borrarProducto: carritoActions.borrarProducto
}

export default connect(mapStateToProps ,mapDispatchToProps)(Carrito)