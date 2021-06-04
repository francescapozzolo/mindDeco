import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import productosActions from '../../redux/actions/productosActions'

const CrearProducto = (props) => {

    const [nuevoProducto, setNuevoProducto] = useState({
        categoria: '',
        subcategoria: '',
        articulo: '',
        nombre: '', 
        descripcion: '',
        precio: '',
        stock: '',
        dimensiones: '',
        // fotos: '',
    })
    // const [foto, setFoto] = useState()
    const [arraySubcategorias, setArraySubcategorias] = useState([])
    const [arrayArticulos, setArrayArticulos] = useState([])
    const [habilitarSubcategoria, setHabilitarSubcategoria] = useState(false)
    const [habilitarArticulos, setHabilitarArticulos] = useState(false)
    const [fotos, setFotos] = useState({fotos: ''})
    
    const categorias = [
        {categoria: 'living', subcategorias: [
            {subcategoria: 'muebles', articulos: ['sillones', 'mesas centro', 'mesas auxiliares', 'estanterias', 'cabinets', 'consolas', 'espejos', 'muebles TV']}, 
            {subcategoria:'textil', articulos:  ['almohadones', 'puff', 'mantas', 'alfombras']}, 
            {subcategoria:'decoracion', articulos:  ['espejos', 'objetos', 'alfombras']}]
        },
        {categoria:'cocina & comedor', subcategorias: [
            {subcategoria: 'muebles', articulos: ['mesas', 'sillas', 'barras', 'banquetas', 'estanterias', 'cabinets']}, 
            {subcategoria: 'textil', articulos: ['repasadores', 'manteles + servilletas' , 'delantales']}, 
            {subcategoria: 'decoracion', articulos: ['pared', 'objetos']}, 
            {subcategoria: 'vajilla', articulos: ['platos', 'bandejas', 'la hora del té', 'copas y vasos']}]
        }, 
        {categoria:'dormitorio', subcategorias: [
            {subcategoria: 'muebles', articulos: ['escritorio', 'sillas', 'biblioteca', 'comoda', 'respaldares', 'mesa de luz', 'mueble tv']}, 
            {subcategoria: 'textil', articulos: ['puff', 'almohadones', 'mantas', 'alfombras', 'cubre edredon']}, 
            {subcategoria: 'decoracion', articulos: ['pared', 'objetos']}]
        }, 
        {categoria:'baños', subcategorias: [
            {subcategoria: 'textil', articulos: ['cortinas', 'alfombras']}, 
            {subcategoria: 'decoracion', articulos: ['pared', 'objetos']}]
        }, 
        {categoria:'jardin', subcategorias: [
            {subcategoria: 'muebles', articulos: ['mesas comedor', 'sillas', 'barras', 'banquetas', 'camastros', 'mesas centro']}, 
            {subcategoria: 'textil', articulos: ['almohadones', 'puff']}, 
            {subcategoria: 'decoracion', articulos: ['pared', 'objetos', 'plantas']}]}
    ]

    const leerInput = (e)  => {
        setNuevoProducto({
            ...nuevoProducto,
            [e.target.name]: e.target.value
        })
    }
    const acciones = (e, arrayASetear) => {
        leerInput(e) 
        switch(arrayASetear){
            case 'categoria' : 
            seleccionCategoria(e)
            break
            case 'subcategoria':
            seleccionSubcategoria(e)
            break
            default: return null
        }
    }

    const seleccionCategoria = (e) => {
        const arrayFiltradoSubcategorias = categorias.find(categoria => categoria.categoria === e.target.value)
        setArraySubcategorias(arrayFiltradoSubcategorias.subcategorias)
        setHabilitarSubcategoria(true)
    }

    const seleccionSubcategoria = (e) => {
        const arrayFiltradoArticulos = arraySubcategorias.find(subcategoria => subcategoria.subcategoria === e.target.value)
        setArrayArticulos(arrayFiltradoArticulos.articulos)
        setHabilitarArticulos(true)
    }

    // const leerInputFoto = (e) => {
    //     setFoto(e.target.value)
    // }

    // const agregarFoto = (event) => {
    //     event.preventDefault()
    //     if(foto) {setNuevoProducto({
    //         ...nuevoProducto,
    //         fotos: [...nuevoProducto.fotos,foto]
    //     })  
    //     setFoto('')
    //     }
    // }

    const cargarProducto = (event) => {
        event.preventDefault()
        if(Object.values(nuevoProducto).some(value => value === "")){
            toast.info('Debes completar todos los campos')
        } else {
        const formData = new FormData()
        formData.append('categoria', nuevoProducto.categoria) 
        formData.append('subcategoria', nuevoProducto.subcategoria)
        formData.append('articulo', nuevoProducto.articulo)
        formData.append('nombre', nuevoProducto.nombre)
        formData.append('descripcion', nuevoProducto.descripcion)
        formData.append('precio', nuevoProducto.precio)
        formData.append('stock', nuevoProducto.stock)
        formData.append('dimensiones', nuevoProducto.dimensiones)
        formData.append('fotos', fotos.fotos)
        console.log(fotos)
        props.cargarNuevoProducto(formData)
            toast.info('Se ha cargado el nuevo producto')
        }
    }

    const cargarFoto = (e) => {
        setFotos({fotos: e.target.files[0]})
    }

    return (
        <form id='formularioCargaProducto'>
            <div id="selectoresCategorias">
                <select name='categoria' onChange={(e)=>acciones(e, 'categoria')} className="fontTexto">
                    <option name='categoria' selected disabled>Elija la subategoría</option>
                    {categorias.map(categoria => {
                        return(
                            <>
                                <option key={categoria.categoria} value={categoria.categoria}>{categoria.categoria.charAt(0).toUpperCase() + categoria.categoria.slice(1, categoria.categoria.legth)}</option>
                            </>
                        )
                    })}
                </select>
                <select name='subcategoria' disabled={habilitarSubcategoria ? false : true} onChange={(e)=>acciones(e, 'subcategoria')} className="fontTexto">
                    <option name='SUBCATEGORIAS' selected disabled>Elija la categoría</option>
                    {arraySubcategorias.map(subcategoria => {
                        return ( 
                            <>
                                <option value={subcategoria.subcategoria} name={'subcategoria'}>{subcategoria.subcategoria.charAt(0).toUpperCase() + subcategoria.subcategoria.slice(1, subcategoria.subcategoria.legth)}</option>
                            </>
                        )
                    })
                }
                </select>
                <select name='articulo' className="fontTexto" disabled={habilitarArticulos? false : true} onChange={(e) => leerInput(e)}>
                    <option name='subcategorias' selected disabled>Elija el tipo de articulo</option>
                    {arrayArticulos.map(articulo => {
                        return ( 
                            <>
                                <option value={articulo} name={'subcategoria'}>{articulo.charAt(0).toUpperCase() + articulo.slice(1, articulo.legth)}</option>
                            </>
                        )
                    })
                }
                </select>
            </div>
            <div id="contenedorInputsCargaProductos">
                <div id="subcontenedorInputsCargaProductos">
                    <div className="inputCargaProductos fontTitulos">
                        <label for='nombre'>NOMBRE PRODUCTO</label>
                        <input className="fontTexto" type="text" id='nombre' value={nuevoProducto.nombre} name='nombre' onChange={leerInput} placeholder="Ingresá el nombre del producto"></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='descripcion'>DESCRIPCIÓN PRODUCTO</label>
                        <input className="fontTexto" type="text" id='descripcion' value={nuevoProducto.descripcion} name='descripcion' onChange={leerInput} placeholder="Ingresá una descripción"></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='precio'>PRECIO</label>
                        <input className="fontTexto" type="number" id='precio' value={nuevoProducto.precio} name='precio' onChange={leerInput} placeholder="Ingresá el precio del prodcuto"></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='stock'>UNIDADES EN STOCK</label>
                        <input className="fontTexto" type="number" id='stock' value={nuevoProducto.stock} name='stock' onChange={leerInput} placeholder="Ingresá la cantidad de stock"></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='dimensiones'>DIMENSIONES</label>
                        <input className="fontTexto" type="text" id='dimensiones' value={nuevoProducto.dimensiones} name='dimensiones' onChange={leerInput} placeholder="Ingresá las dimensiones del producto"></input>
                    </div>
                    <div className="inputCargaProductos fontTitulos">
                        <label for='descuento'>PORCENTAJE DE DESCUENTO</label>
                        <input className="fontTexto" type="number" id='descuento' value={nuevoProducto.unidadesStock} name='descuento' onChange={leerInput} placeholder="Ingresá el porcentaje de descuento"></input>
                    </div> 
                    <div className="inputCargaProductos fontTitulos">
                        <label for='fotos'>FOTOS</label>
                        <div>
                            <input type="file" accept="image/*" id='fotos'  name='file' onChange={cargarFoto} ></input>
                        </div>
                        <div>
                            <input type="file" accept="image/*" id='fotos'  name='file' onChange={cargarFoto} ></input>
                        </div>
                        <div>
                            <input type="file" accept="image/*" id='fotos'  name='file' onChange={cargarFoto} ></input>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <div className="p-portaFoto" /*style={{backgroundImage: `url(${nuevoProducto.fotos[0]})`}}*/></div>
                    <div className="p-portaFoto" /*style={{backgroundImage: `url(${nuevoProducto.fotos[1]})`}}*/></div>
                    <div className="p-portaFoto" /*style={{backgroundImage: `url(${nuevoProducto.fotos[2]})`}}*/></div>
                </div>
            </div>
            <button className="fontTitulos botonCargaArticulos" onClick={cargarProducto}>CARGAR NUEVO PRODUCTO</button>
        </form>
    )
}

const mapDispatchToProps = {
    cargarNuevoProducto: productosActions.cargarNuevoProducto
}
export default connect(null, mapDispatchToProps)(CrearProducto)