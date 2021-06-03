const GridFrases = () => {
    return(
        <div id="p-granContenedorGridFrases">
        <h2 className="fontTitulos">#DECORÁ TU HOGAR</h2>
        <div id="p-contenedorGrid">
            <div style={{backgroundImage: 'url("https://i.imgur.com/MEIIYyY.jpg-")'}} className="p-fotoConFrase">
                <p className="fontTitulos">Viví tu</p>
                <p className="fontCursive">casa</p>
            </div>
            <div style={{backgroundImage: 'url("https://i.imgur.com/SKe3xvk.jpg-")'}} className="p-fotoConFrase"></div>
            <div style={{backgroundImage: 'url("https://i.imgur.com/YRs1l5D.jpg-")'}} className="p-fotoConFrase">
                <p className="fontCursive">Creá</p>
                <p className="fontTitulos">momentos</p>
            </div>
            <div style={{backgroundImage: 'url("https://i.imgur.com/aYjWdrl.jpg-")'}} className="p-fotoConFrase">
                <p className="fontCursive">Compartila</p>
            </div>
        </div>
        </div>
    )
}

export default GridFrases