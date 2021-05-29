import React from 'react'
import { Carousel } from 'antd';

const HeaderCarrusel = () => {
    const contentStyle = {
        height: '5vh',
        color: '#fff',
        textAlign: 'center',
        background: '#C9B687',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '500',
        fontFamily: 'Montserrat, sans-serif'
      };

    return (
        <Carousel autoplay dots={false  }>
            <div className="c-containerTextSlider">
                <span style={contentStyle}>3, 6 Y 12 CUOTAS SIN INTERÉS</span>
            </div>
            <div className="c-containerTextSlider">
                <span style={contentStyle}>-20% TRANSFERENCIA</span>
            </div>
            <div className="c-containerTextSlider">
                <span style={contentStyle}>ENVÍO GRATIS A TODO EL TERRITORIO NACIONAL</span>
            </div>
        </Carousel>
    )
}
export default HeaderCarrusel