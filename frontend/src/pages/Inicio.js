import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GridFrases from '../componentes/home/GridFrases'
import HomeCarruselPrincipal from '../componentes/home/HomeCarruselPrincipal'
import HomeFiltroGrilla from '../componentes/home/HomeFiltroGrilla'
import HomeGrillaCategorias from '../componentes/home/HomeGrillaCategorias'

const Inicio = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    var fotoW = "https://i.imgur.com/sStQFQV.png"
    var url= "https://wa.link/p58nd1"
    return (
        <div id="pContenedorInicio">
            <div className="wtsp">
            <Link to={{pathname: url}} target="_blank" > 
                <div style={{backgroundImage:`url(${fotoW})`, width:"4vw",height:"8vh",margin:"4vh",backgroundSize:"cover",zIndex:1000}} ></div>
            </Link>
        
            </div>
            <HomeCarruselPrincipal />
            <HomeGrillaCategorias />
            <div id="p-parallax" className="fontTexto" style={{backgroundImage: 'url("./assets/sillon1.jpg")'}}>
                <h2>12 CUOTAS SIN INTERÉS</h2>
            </div>
            <HomeFiltroGrilla />
            <GridFrases />
        </div>
    )
}
export default Inicio