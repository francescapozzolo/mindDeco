import React, { useState, useEffect } from 'react'
import {connect} from "react-redux"
import carritoActions from "../../redux/actions/carritoActions"
import authActions from "../../redux/actions/authActions"
import Producto from './Producto';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ForumIcon from '@material-ui/icons/Forum';
const Carrito = (props) => {
    const [carrito, setCarrito] = useState([])
    const [open, setOpen] = useState(false)
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
            </div>
            <div className='BTableroCarrito'>
                <div className='BTableroContenido'>
                    <div className='BTableroFilas'>
                        <h3>Envío</h3>
                        <h3>Por calcular</h3>
                    </div>
                    <div className='BTableroFilas BMargginBoton'>
                        <h3>{articulosTotales+' artículos'}</h3>
                        <h3>{precioTotal + ' ARS'}</h3>
                    </div>
                    <hr />
                    <h3 className='BMarginTop BCodigoPromocional' onClick={()=> setOpen(!open)}>¿Tienes un código promocional?</h3>
                    {
                        open && <div className='BTableroFilas BFilaInput'>
                                    <input type="text" placeholder='Código promocional' className='BInputTablero'/>
                                    <button className='BButon'>AÑADIR</button>
                                </div>
                    }
                    
                    <div className='BTableroFilas BTableroTotal'>
                        <h3>Total</h3>
                        <h3 className='BBold'>{precioTotal + ' ARS'}</h3>
                    </div>
                </div>
                <button className='BButon'>COMPRAR</button>
                <div>
                    <div>
                     <h3><LocalShippingIcon /> Política de Envío</h3>
                     <h3>El envío está a cargo del comprador</h3>
                    </div>
                    <div>
                        <h3>Cambios y Devoluciones</h3>
                    </div>
                    <div>
                        <h3><ForumIcon /> Dudas? Te ayudamos?</h3>
                        <h3>Comunicate con nosotros por whatsapp!</h3>
                    </div>
                </div>
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