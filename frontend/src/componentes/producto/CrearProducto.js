import React, { useState } from 'react'

const CrearProducto = () => {

    const [nuevoProducto, setNuevoProducto] = useState({
        categoria: '',
        subcategoria: '',
        articulo: '',
        nombre: '', 
        descripcion: '',
        precio: '',
        stock: '',
        dimensiones: '',
        fotos: '',
    })
    
    const categorias = [
        {categoria: 'living', subcategorias: ['muebles', 'textil', 'decoracion']}, 
        {categoria:'cocina & comedor', subcategorias: ['muebles', 'textil', 'decoracion', 'vajilla']}, 
        {categoria:'dormitorio', subcategorias: ['muebles', 'textil', 'decoracion']}, 
        {categoria:'baños', subcategorias: ['muebles', 'textil', 'decoracion']}, 
        {categoria:'jardin', subcategorias: ['muebles', 'textil', 'decoracion']}
    ]

    const subcategorias = ['muebles', 'textil', 'decoracion', 'vajilla']

    const leerInput = (e)  => {
        setNuevoProducto({
            ...nuevoProducto,
            [e.target.name]: e.target.value
        })
    }

    console.log(nuevoProducto)

    return (
        <form id='formularioCargaProducto'>
            <div id="selectoresCategorias">
                <select name='categoria' onChange={leerInput} className="fontTexto">
                    <option name='CATEGORIAS' selected disabled>Elija la subategoría</option>
                    {categorias.map(categoria => {
                        return(
                            <>
                                <option key={categoria.categoria} value={categoria.categoria} name={'categoria'}>{categoria.categoria}</option>
                            </>
                        )
                    })}
                </select>
                <select name='subcategoria' onChange={leerInput} className="fontTexto">
                    <option name='SUBCATEGORIAS' selected disabled>Elija la categoría</option>
                    {subcategorias.map(subcategoria => {
                        return ( 
                            <>
                                <option value={subcategoria} name={'subcategoria'}>{subcategoria}</option>
                            </>
                        )
                    })
                }
                </select>
                <select name='articulos' className="fontTexto">
                    <option name='SUBCATEGORIAS' selected disabled>Elija el tipo de articulo</option>

                </select>
            </div>
            <div id="contenedorInputsCargaProductos">
                <div id="subcontenedorInputsCargaProductos">
                    <div className="inputCargaProductos fontTitulos">
                        <label for='nombre'>NOMBRE PRODUCTO</label>
                        <input id='nombre' value={nuevoProducto.nombre} name='nombre' onChange={leerInput}></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='descripcion'>DESCRIPCIÓN PRODUCTO</label>
                        <input id='descripcion' value={nuevoProducto.descripcion} name='descripcion' onChange={leerInput}></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='precio'>PRECIO</label>
                        <input id='precio' value={nuevoProducto.precio} name='precio' onChange={leerInput}></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='stock'>UNIDADES EN STOCK</label>
                        <input id='stock' value={nuevoProducto.stock} name='stock' onChange={leerInput}></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='dimensiones'>DIMENSIONES</label>
                        <input id='dimensiones' value={nuevoProducto.dimensiones} name='dimensiones' onChange={leerInput}></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='unidadesStock'>UNIDADES EN STOCK</label>
                        <input id='unidadesStock' value={nuevoProducto.unidadesStock} name='unidadesStock' onChange={leerInput}></input>
                    </div> 
                    <div className="inputCargaProductos fontTitulos">
                        <label for='fotos'>FOTOS</label>
                        <input id='fotos' value={nuevoProducto.fotos} name='fotos' onChange={leerInput} ></input>
                    </div>
                    
                </div>
                <div>
                    <div className="p-portaFoto"></div>
                    <div className="p-portaFoto"></div>
                    <div className="p-portaFoto"></div>
                </div>
            </div>
            <button className="fontTitulos botonCargaArticulos">CARGAR NUEVO PRODUCTO</button>
        </form>
    )
}

export default CrearProducto 