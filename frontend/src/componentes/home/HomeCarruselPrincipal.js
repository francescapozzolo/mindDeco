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
                <div style={contentStyle, {backgroundImage: 'url("./assets/foto-portada-1.jpg")', width: "110vw", height: "80vh", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} ></div>
            </div>
            <div className="p-containerTextSlider">
                <div style={contentStyle, {backgroundImage: 'url("./assets/foto-portada-2.jpg")', width: "110vw", height: "80vh", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
            </div>
            <div className="p-containerTextSlider">
                <div style={contentStyle, {backgroundImage: 'url("./assets/foto-portada-1.jpg")', width: "110vw", height: "80vh", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
            </div>
        </Carousel>
    )
}
export default HomeCarruselPrincipal