import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const HomeCarruselPrincipal = () => {

    const contentStyle = {
        height: '70vh',
        width: '100%',
        color: '#fff',
        textAlign: 'center',
        background: '#C9B687',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500',
        fontFamily: 'Montserrat, sans-serif',
        verticalSwiping: false,
        vertical: true
    }

    return (
        <Carousel autoplay >
            <div className="p-containerTextSlider" styles={{backgroundImage: 'url("/assets/foto-portada-1.jpg")', width: '100px', height: '100'}}>
                <div styles={{backgroundImage: 'url("./assets/foto-portada-1.jpg")', width: '100px', height: '100'}} style={contentStyle} ></div>
            </div>
            <div className="p-containerTextSlider">
                <span style={contentStyle}>-20% TRANSFERENCIA</span>
            </div>
            <div className="p-containerTextSlider">
                <span style={contentStyle}>ENVÍO GRATIS A TODO EL TERRITORIO NACIONAL</span>
            </div>
        </Carousel>
    )
}
export default HomeCarruselPrincipal