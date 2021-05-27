
const CrearProducto = () => {

    const categorias = [
        {categoria: 'living', subcategorias: ['muebles', 'textil', 'decoracion']}, 
        {categoria:'cocina & comedor', subcategorias: ['muebles', 'textil', 'decoracion', 'vajilla']}, 
        {categoria:'dormitorio', subcategorias: ['muebles', 'textil', 'decoracion']}, 
        {categoria:'baños', subcategorias: ['muebles', 'textil', 'decoracion']}, 
        {categoria:'jardin', subcategorias: ['muebles', 'textil', 'decoracion']}
    ]

    return (
        <form>
            <select name='categorias' onChange={}>
                {categorias.map(categoria => {
                    return(
                        <>
                            <option key={categoria.categoria} value={categoria.categoria}>{categoria.categoria}</option>
                        </>
                    )
                })}
            </select>
            <select name='subcategoria' onChange={}>
                {categorias.subcategorias.map(subcategoria => {
                    return(
                        <>
                            <option key={subcategoria} value={subcategoria}>{subcategoria}</option>
                        </>
                    )
                })}

            </select>
        </form>
    )
}

export default CrearProducto 