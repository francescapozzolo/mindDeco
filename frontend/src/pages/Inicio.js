import React from 'react'
import HomeCarruselPrincipal from '../componentes/home/HomeCarruselPrincipal'
import HomeFiltroGrilla from '../componentes/home/HomeFiltroGrilla'
import HomeGrillaCategorias from '../componentes/home/HomeGrillaCategorias'

const Inicio = () => {
    return (
        <div id="pContenedorInicio">
            <HomeCarruselPrincipal />
            <HomeGrillaCategorias />
            <div id="p-parallax" className="fontTexto" style={{backgroundImage: 'url("./assets/sillon1.jpg")'}}>
                <h2>12 CUOTAS SIN INTERÉS</h2>
            </div>
            <HomeFiltroGrilla />
        </div>
    )
}
export default Inicio