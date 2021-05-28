import React, { useState } from 'react'

const Categoria = (props) => {
    const [categoria, setCategoria] = useState(props.categoria)

    console.log(categoria)
    return (
        <div>
            <span className="fontTexto c-categoriaSpan">{categoria}</span>
        </div>
    )
}
export default Categoria