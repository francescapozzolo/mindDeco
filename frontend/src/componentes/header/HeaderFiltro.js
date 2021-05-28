import React from 'react'
import Categoria from './Categoria'

const HeaderFiltro = () => {

    const categorias = ['LIVING', 'COCINA & COMEDOR', 'DORMITORIO', 'BAÑOS', 'JARDIN']

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
export default HeaderFiltro