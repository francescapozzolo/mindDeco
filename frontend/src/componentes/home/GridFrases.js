const GridFrases = () => {
    return(
        <div id="p-contenedorGrid">
            <div style={{backgroundImage: 'url("/assets/hogar2.jpg")'}} className="p-fotoConFrase">
                <p className="fontTitulos">Viví tu</p>
                <p className="fontCursive">casa</p>
            </div>
            <div style={{backgroundImage: 'url("/assets/hogar4.jpg")'}} className="p-fotoConFrase"></div>
            <div style={{backgroundImage: 'url("/assets/hogar5.jpg")'}} className="p-fotoConFrase">
                <p className="fontCursive">Creá</p>
                <p className="fontTitulos">momentos</p>
            </div>
            <div style={{backgroundImage: 'url("/assets/hogar3.jpg")'}} className="p-fotoConFrase">
                <p className="fontCursive">Compartila</p>
            </div>
        </div>
    )
}

export default GridFrases