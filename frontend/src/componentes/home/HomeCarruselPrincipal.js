import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const HomeCarruselPrincipal = () => {

    const contentStyle = {
        height: '80vh',
        width: '110vw',
        color: '#fff',
        textAlign: 'center',
        background: '#C9B687',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500',
        fontFamily: 'Montserrat, sans-serif',
        verticalSwiping: false,
    }

    return (
        <Carousel autoplay  id="pCarruselPrincipal">
            <div className="p-containerTextSlider">
                <div className="p-fotoSlider" style={contentStyle, {backgroundImage: 'url("./assets/sillon.jpg")'}} ></div>
            </div>
            <div className="p-containerTextSlider">
                <div className="p-fotoSlider" style={contentStyle, {backgroundImage: 'url("./assets/port2.jpg")'}}></div>
            </div>
            <div className="p-containerTextSlider">
                <div className="p-fotoSlider" style={contentStyle, {backgroundImage: 'url("./assets/port3.jpg")'}}></div>
            </div>
            <div className="p-containerTextSlider">
                <div className="p-fotoSlider" style={contentStyle, {backgroundImage: 'url("./assets/port.jpeg")'}}></div>
            </div>
        </Carousel>
    )
}
export default HomeCarruselPrincipal