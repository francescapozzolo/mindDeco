import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

const Footer = () => {
    return (
        <div className="c-footerContainer">

            <div className="c-footerInfoContainer">
                <div className="c-footerMenu">
                    <span className="c-footerTitle">CONTACTO</span>
                    <div className="c-footerInnerInfoContainer">
                        <input id="c-footerInput" placeholder="Correo electronico"></input>
                        <textarea id="c-footerTextarea" placeholder="Mensaje" />
                        <span id="c-footerSubmit">ENVIAR</span>
                    </div>
                </div>
                <div className="c-footerMenu">
                    <span className="c-footerTitle">PRODUCTOS</span>
                    <div className="c-footerInnerInfoContainer">
                        <span>Más vendidos</span>
                        <span>Últimas novedades</span>
                    </div>
                </div>
                <div className="c-footerMenu">
                    <span className="c-footerTitle">SERVICIO AL CLIENTE</span>
                    <div className="c-footerInnerInfoContainer">
                        <span>Envios</span>
                        <span>Aviso legal</span>
                        <span>Formas de Pago</span>
                        <span>Cambios & devoluciones</span>
                        <span>Como comprar</span>
                    </div>
                </div>
                <div className="c-footerMenu">
                    <span className="c-footerTitle">MIND DECO</span>
                    <div className="c-footerInnerInfoContainer">
                        <span>Quienes somos</span>
                        <span>Tiendas</span>
                    </div>
                </div>
                <div className="c-footerMenu">
                    <span className="c-footerTitle">DETALLE DE CONTACTO</span>
                    <div className="c-footerInnerInfoContainer">
                        <span>Av. Rafael Castillo 3616, CP1405, Ciudad Autonoma de Buenos Aires, Argentina.</span>
                        <div className="c-footerContactContainer">
                            <MailOutlineIcon />
                            <span>info@minddeco.com.ar</span>

                        </div>
                        <div className="c-footerContactContainer">
                            <PhoneOutlinedIcon />
                            <span>+54 11 4055 8500</span>

                        </div>
                    </div>
                </div>
            </div>

            <div className="c-footerFooterContainer">
                <div className="c-footerImageLogo">
                </div>
            </div>
        </div>
    )
}
export default Footer