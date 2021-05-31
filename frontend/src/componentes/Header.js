import React from 'react'
import Footer from './Footer'
import HeaderCarrusel from './header/HeaderCarrusel'
import HeaderFiltro from './header/HeaderFiltro'
import Navbar from './header/Navbar'

const Header = ({carrito}) => {

    return (
        <>
            <HeaderCarrusel />
            <Navbar carrito={carrito}/>
            <HeaderFiltro />
        </>
    )
}
export default Header