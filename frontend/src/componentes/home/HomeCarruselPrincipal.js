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
                <div className="p-fotoSlider" style={{contentStyle, backgroundImage: 'url("https://i.imgur.com/FBYXjNl.jpg-")'}} ></div>
            </div>
            <div className="p-containerTextSlider">
                <div className="p-fotoSlider" style={{contentStyle, backgroundImage: 'url("https://i.imgur.com/OXX1FwM.jpg")'}}></div>
            </div>
            <div className="p-containerTextSlider">
                <div className="p-fotoSlider" style={{contentStyle, backgroundImage: 'url("https://i.imgur.com/VMXPXI9.png-")'}}></div>
            </div>
            <div className="p-containerTextSlider">
                <div className="p-fotoSlider" style={{contentStyle, backgroundImage: 'url("https://i.imgur.com/USHCIXY.jpg-")'}}></div>
            </div>
        </Carousel>
    )
}
export default HomeCarruselPrincipal