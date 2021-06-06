import {connect} from "react-redux"
import React, { useEffect } from 'react'
import Categoria from './Categoria'

import productosActions from '../../redux/actions/productosActions'

const HeaderFiltro = (props) => {
    const categorias = ['LIVING', 'COCINA & COMEDOR', 'DORMITORIO', 'BAÑO', 'JARDIN']

    useEffect(() => {
        props.obtenerLosProductos()
    }, [])

    return (
        <div className="c-headerContainer">
            <div className="c-headerFiltroContainer">
                {
                    categorias.map(categoria => {
                        return <Categoria key={categoria} categoria={categoria} />
                    })
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFiltro)