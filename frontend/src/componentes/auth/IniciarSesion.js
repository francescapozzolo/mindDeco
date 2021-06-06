import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import React,{useEffect, useState } from "react"
import {connect} from "react-redux"
import authActions from '../../redux/actions/authActions'
import GoogleLogin from 'react-google-login'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {NavLink} from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { withRouter } from 'react-router-dom';

const IniciarSesion = (props) => {
    const [user, setUser] = useState({email: '', password: ''})
    const [eye, setEye] = useState(false)
    useEffect (() =>{
        window.scrollTo(0,0)
    }, [])
    const readInputUser = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
    }

    const sendValueUser = async (e = null, googleUser = null) => {
        e && e.preventDefault()
        let userGen = e ? user : googleUser
        if(Object.values(userGen).some(value => value === "")){
            return toast.error('Hay campos vacios')
        }
        const response = await props.logInUser(userGen)
        if(response.error){
            toast.error(response.error)
        }else{
            toast.success(`Bienvenida/o ${response.respuesta.nombre}`)
            console.log(props)
            setTimeout(function(){ props.history.push('/') }, 3000);       
        }
        // else{
        //     toast.success('Welcome')
        //     setTimeout(function(){ props.history.push('/') }, 5000);       
        // }
    }
    
    const responseGoogle = (response) => {
        if(response.profileObj.email){
            sendValueUser(null, {email: response.profileObj.email, password: 'a'+response.profileObj.googleId})
        }
    }

    return(
        
            <div className='BContainerPrincipal'>
                <div className='BContainerContenido'>
                    <div className="nuevosClientes-cd">
                        <h2>NUEVOS CLIENTES</h2>
                        <p>Al crear una cuenta en nuestra tienda, podrá desplazarse más rápidamente por el proceso de pago, almacenar múltiples direcciones de envío, ver y realizar un seguimiento de sus pedidos en su cuenta y mucho más</p>
                        <NavLink to='/registro'><button className='BButon'>CREA UNA CUENTA</button></NavLink>
                        
                    </div>
                    
                    <form id="formInicioSesion">
                        <h2>INGRESE A SU CUENTA</h2>
                        <div className='BContainerPassword'>
                            <MailOutlineIcon className='BIcon'/>
                            <input type="text" placeholder="Dirección de correo electrónico"
                            onChange={readInputUser} value={user.email} name="email" />
                        </div>
                        <div className='BContainerPassword'>
                            <VpnKeyIcon className='BIcon'/>
                            <input type= {eye ? "text" : "password"} placeholder="Contraseña"
                            onChange={readInputUser} value={user.password} name="password" />
                            {eye ? <VisibilityOffOutlinedIcon className='BEye' onClick={()=>setEye(!eye)} /> : <VisibilityOutlinedIcon className='BEye' onClick={()=>setEye(!eye)}/>}
                        </div>
                       <div className="botones-cd">
                       <button className='BButon BButonRegistro BMarginGoogle' onClick={sendValueUser}>INGRESAR</button>
                        <GoogleLogin
                            clientId="687710738267-u7vhsurru0vso24f0vclhghbvro81mfa.apps.googleusercontent.com"
                            render={renderProps => (
                                <GoogleButton className='btn-google' onClick={renderProps.onClick} disabled={renderProps.disabled} label="Ingresa con Google">Ingresa con Google</GoogleButton>
                            )}
                            buttonText="Ingresa con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className='BBotonGoogle'
                        />
                       </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        
    )
}

const mapDispatchToProps = {
    logInUser: authActions.logInUser 
}

export default withRouter(connect(null ,mapDispatchToProps)(IniciarSesion))
