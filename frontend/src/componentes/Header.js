import React, { useEffect, useState } from 'react'
import HeaderCarrusel from './header/HeaderCarrusel'
import HeaderFiltro from './header/HeaderFiltro'
import Navbar from './header/Navbar'
import { Modal, Input } from 'antd';
import { connect } from 'react-redux';
import mailActions from '../redux/actions/mailActions';
import { toast } from 'react-toastify'

const Header = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [mail, setMail] = useState({email: '', nombre: '', asunto: 'newsletter'})
  const [completo, setCompleto] = useState(false)

  useEffect(() => {
    showModal()
  }, [])

  useEffect(()=> {
    if(Object.values(mail).every(value => value !== "")){
        setCompleto(true)
    }
}, [mail])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(true);
    props.mandarMail(mail)
    setIsModalVisible(false);
    toast.success('Gracias por suscribirte a nuestro newsletter!')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const leerInput =(e) => {
    setMail({
        ...mail,
        [e.target.name]: e.target.value
    })
  }



  return (
    <>
        <Modal 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            width={800} 
            bodyStyle={{
                backgroundImage: 'url("https://i.imgur.com/7AbpRmq.png-")',
                height: '60vh', 
                backgroundPosition: 'center',
                backgroundRepeat:'no-repeat',
                backgroundSize: 'cover',
                fontSize: '1.5rem',
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
            okButtonProps={{
                type:'default',
                style:{
                    fontFamily: 'Montserrat, sans-serif'
                },
                disabled: completo ? false : true
            }}
            cancelButtonProps={{
                style:{
                    fontFamily: 'Montserrat, sans-serif',
                }
            }}
            >
                <p className="fontTitulos">SE EL PRIMERO AHORA</p>
                <p className="fontTexto" style={{fontSize: '1rem', marginTop: '1vh', marginBottom: '1vh'}}>Suscríbase para recibir las últimas noticias y tendencias en decoración</p>
                <Input className="fontTexto p-inputNewsletter" name="nombre" value={mail.nombre} onChange={leerInput} type="text" placeholder="Ingresa tu nombre" />
                <Input className="fontTexto p-inputNewsletter" name="email" value={mail.email} onChange={leerInput}type="text" placeholder="tumail@gmail.com" />
        </Modal>
        <HeaderCarrusel />
        <Navbar carrito={props.carrito}/>
        <HeaderFiltro />
    </>
  );
};

const mapDispatchToProps = {
    mandarMail: mailActions.mandarMail
}

export default connect(null, mapDispatchToProps)(Header)