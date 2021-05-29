import React from 'react'
import Footer from './Footer'
import HeaderCarrusel from './header/HeaderCarrusel'
import HeaderFiltro from './header/HeaderFiltro'
import Navbar from './header/Navbar'

const Header = () => {
    return (
        <>
            <HeaderCarrusel />
            <Navbar />
            <HeaderFiltro />
        </>
    )
}
export default Header