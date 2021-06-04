import React, { useEffect } from 'react'
import {useState} from 'react'
import { connect } from 'react-redux'
import searchOutlined from '@iconify-icons/ant-design/search-outlined';
import shoppingCart from '@iconify-icons/la/shopping-cart'; 
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

import productosActions from '../../redux/actions/productosActions'

const HomeFiltroGrilla = (props) => {

    const [array, setArray] = useState([])

    useEffect(() => {
        props.obtenerLosProductos()
        setArray(props.todosLosProductos)
    }, [props.todosLosProductos])

    const filtrarProd = (tipoArray) => {
        switch(tipoArray){
            case 'todos':
                setArray(props.todosLosProductos)
                break
            case 'destacados':
                setArray(props.todosLosProductos.filter(producto => producto.descuento !== 0))
            case 'ultimos':
                setArray(props.todosLosProductos.filter(producto => producto.stock <= 5))
                break
            case 'masVendidos':
                setArray(props.todosLosProductos.sort((a,b)=> a.unidadesVendidas - b.unidadesVendidas))
            default :
                return null
        }
    }

   
    return (
        <div id="p-contenedorFiltroGrilla">
            <div id="p-contenedorTitFiltroGrilla" className="fontTitulos">
                <h2 onClick={()=>filtrarProd('todos')}>TODOS</h2>
                <h2 onClick={()=>filtrarProd('destacados')}>DESTACADOS</h2>
                <h2 onClick={()=>filtrarProd('ultimos')}>ÚLTIMOS</h2>
                <h2 onClick={()=>filtrarProd('masVendidos')}>MÁS VENDIDOS</h2>
            </div>
            <div id="p-contenedorProdFiltrados">
                {array.slice(0,5).map(item => {
                    return(
                        <div className="p-fotoProdFiltrado" style={{backgroundImage: `url(${item.fotos[0].includes('https') ? item.fotos[0] :'/fotos/'+item.fotos[0]})`}}>
                            <div className="p-capa">
                                <h3 className="fontCursive">{item.nombre.charAt(0).toUpperCase() + item.nombre.slice(1, item.nombre.legth)}</h3>
                                <div className="p-contenedorIconosAcciones">
                                    <div className="l-contenedor-icono-de-imagen-1">
                                        <NavLink to={`/producto/${item._id}`} className="l-subContenedor-icono-de-imagen" ><Icon icon={searchOutlined} className="l-icono-de-imagen1"/></NavLink>
                                    </div>
                                    <div className="l-contenedor-icono-de-imagen-2">
                                        <div className="l-subContenedor-icono-de-imagen"><Icon icon={shoppingCart} className="l-icono-de-imagen2" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todosLosProductos: state.productosReducer.todosLosProductos
    }
}

const mapDispatchToProps = {
    obtenerLosProductos: productosActions.obtenerLosProductos
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFiltroGrilla) 