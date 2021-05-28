import React from 'react'
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

const Footer = () => {
    return (
        <div className="c-footerContainer">
            <div className="c-footerInfoContainer">
                <div className="c-footerContactoContainer">
                    <span className="c-footerTitle">CONTACTO</span>
                    <input id="c-footerInput" placeholder="Correo electronico"></input>
                    <textarea id="c-footerTextarea" placeholder="Mensaje" />
                    <span id="c-footerSubmit">ENVIAR</span>
                </div>
                <div className="c-footerMenu">
                    <span className="c-footerTitle">PRODUCTOS</span>
                    <span>Más vendidos</span>
                    <span>Últimas novedades</span>
                </div>
                <div className="c-footerMenu">
                    <span className="c-footerTitle">SERVICIO AL CLIENTE</span>
                    <span>Envios</span>
                    <span>Aviso legal</span>
                    <span>Formas de Pago</span>
                    <span>Cambios & devoluciones</span>
                    <span>Como comprar</span>
                </div>
                <div className="c-footerMenu">
                    <span className="c-footerTitle">MIND DECO</span>
                    <span>Quienes somos</span>
                    <span>Tiendas</span>
                </div>
                <div className="c-footerMenu">
                    <span className="c-footerTitle">DETALLE DE CONTACTO</span>
                    <span>Más vendidos</span>
                    <span>Últimas novedades</span>
                </div>
            </div>
        </div>
    )
}
export default Footer