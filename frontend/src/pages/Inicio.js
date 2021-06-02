import React from 'react'
import GridFrases from '../componentes/home/GridFrases'
import HomeCarruselPrincipal from '../componentes/home/HomeCarruselPrincipal'
import HomeFiltroGrilla from '../componentes/home/HomeFiltroGrilla'
import HomeGrillaCategorias from '../componentes/home/HomeGrillaCategorias'

const Inicio = () => {
    var fotoW = "https://i.imgur.com/sStQFQV.png"
    var url= "https://wa.link/p58nd1"
    return (
        <div id="pContenedorInicio">
            
            <div className="wtsp">
            
            <a href={url} target="_blank"> 
            <div  style = {{backgroundImage:`url(${fotoW})`,width:"4vw",height:"8vh",margin:"1vh",backgroundSize:"cover",zIndex:1000}} ></div>
            </a> 
        
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