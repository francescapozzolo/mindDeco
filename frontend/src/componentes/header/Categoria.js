import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import productosActions from '../../redux/actions/productosActions'

const Categoria = (props) => {
    const [categoria, setCategoria] = useState(props.categoria)

    const obtenerProductosCategoria = (e) => {
        let categoria = e.target.dataset.categoria.toLowerCase()
        props.obtenerProductosPorCategoria(categoria)
    }

    return (
        <Link to={`/categoria/${categoria.toLowerCase()}`}>
            <span data-categoria={categoria} onClick={obtenerProductosCategoria} className="fontTexto c-categoriaSpan">{categoria}</span>
        </Link>
    )
}

const mapStateToProps = state => {
    return {
        todosLosProductos: state.productosReducer.todosLosProductos,
        productosCategoria: state.productosReducer.productosCategoria
    }
}

const mapDispatchToProps = {
    obtenerProductosPorCategoria: productosActions.obtenerProductosPorCategoria
}

export default connect(mapStateToProps, mapDispatchToProps)(Categoria)