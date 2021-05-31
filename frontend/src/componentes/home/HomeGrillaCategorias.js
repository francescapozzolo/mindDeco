import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import productosActions from '../../redux/actions/productosActions'

const HomeGrillaCategorias = (props) => {

    const filtrarSubcategorias = (subcategoria) => {
        props.fetchearSubcategorias(subcategoria) 
    }

    return (
        <div id="p-ContenedorHomeGrillaCategorias">
            <h2 className="fontTitulos p-titGrillaCategoriaHome">BUSCÁ TUS PRODUCTOS POR CATEGORIAS</h2>
            <div id="p-contenedorFotosCategorias">
                <div className="p-contenedorImg" onClick={() => filtrarSubcategorias('textil')}>
                    <Link to="/categoria" className="p-FotoCategoria" id="p-textil" style={{backgroundImage: 'url("./assets/foto2.jpg")'}}><p className="fontCursive">Textil</p></Link>
                </div>
                <div className="p-contenedorImg" onClick={() => {filtrarSubcategorias('muebles')}}>
                    <Link to="/categoria" className="p-FotoCategoria" id="p-muebles"  style={{backgroundImage: 'url("./assets/sillas1.jpg")'}}><p className="fontCursive">Muebles</p></Link>
                </div>
                <div className="p-contenedorImg" onClick={() => {filtrarSubcategorias('vajilla')}}>
                    <Link to="/categoria" className="p-FotoCategoria" id="p-vajilla" style={{backgroundImage: 'url("./assets/vajilla.jpg")'}}><p className="fontCursive">Vajilla</p></Link>
                </div>
                <div className="p-contenedorImg" onClick={() => {filtrarSubcategorias('decoracion')}}>
                    <Link to="/categoria" className="p-FotoCategoria" id="p-decoracion"  style={{backgroundImage: 'url("./assets/jardin1.jpg")'}}><p className="fontCursive">Decoración</p></Link>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    fetchearSubcategorias: productosActions.obtenerProductosPorSubcategoria
}

export default connect(null, mapDispatchToProps)(HomeGrillaCategorias) 