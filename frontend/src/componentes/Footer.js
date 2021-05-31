import React, { useState } from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { connect } from 'react-redux';
import mailActions from '../redux/actions/mailActions';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = (props) => {

    const [mail, setMail] = useState({destinatario: '', asunto: '', cuerpo: ''})

    const leerInput = (e, campo) => {
        setMail({
            ...mail, 
            [campo]: e.target.value
        })
    }

    const enviarMail = (e) => {
        e.preventDefault()
        props.mandarMail(mail)
        setMail({destinatario: '', cuerpo: '', asunto: ''})
    }

    return (
        <div className="c-footerContainer">

            <div className="c-footerInfoContainer">
                <div className="c-footerMenu">
                    <span className="c-footerTitle">CONTACTO</span>
                    <div className="c-footerInnerInfoContainer">
                        <input id="c-footerInput" name="destinatario" value={mail.destinatario} placeholder="Correo electronico" onChange={(e)=>leerInput(e, 'destinatario')}></input>
                        <input id="c-footerInput" name="asunto" value={mail.asunto} placeholder="asunto" onChange={(e)=>leerInput(e, 'asunto')}></input>
                        <textarea id="c-footerTextarea" name="cuerpo" value={mail.cuerpo} placeholder="Mensaje" onChange={(e)=>leerInput(e, 'cuerpo')}/>
                        <span id="c-footerSubmit" onClick={enviarMail}>ENVIAR</span>
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
                        <div style={{marginTop: 20}} className="c-footerContactContainer">
                            <FacebookIcon style={{fontSize: 32}} />
                            <InstagramIcon style={{fontSize: 32, marginLeft: 10}} />
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

const mapDispatchToProps = {
    mandarMail: mailActions.mandarMail
}
export default connect(null, mapDispatchToProps)(Footer)