import React from 'react'
import HomeCarruselPrincipal from '../componentes/home/HomeCarruselPrincipal'
import HomeFiltroGrilla from '../componentes/home/HomeFiltroGrilla'
import HomeGrillaCategorias from '../componentes/home/HomeGrillaCategorias'

const Inicio = () => {
    var fotoW = "https://i.imgur.com/sStQFQV.png"
    const activarLink = () => {
        "https://wa.link/p58nd1"}
    return (
        <div id="pContenedorInicio">
            
            <div className="wtsp">
            <div  style = {{backgroundImage:`url(${fotoW})`,width:"5vw",height:"10vh",margin:"1vh",backgroundSize:"cover",zIndex:1000}}  onClick={()=>activarLink()} > 
            </div>
            </div>
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