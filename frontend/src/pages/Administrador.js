import { useEffect } from "react"
import CrearProducto from "../componentes/producto/CrearProducto"

const Administrador = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <CrearProducto />
    )
}

export default Administrador