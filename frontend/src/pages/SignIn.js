// import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
// import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
// import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
import {useEffect, useState } from "react"
import {connect} from "react-redux"
import authActions from '../redux/actions/authActions'
// import GoogleLogin from 'react-google-login'
 import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import {NavLink} from 'react-router-dom'
// import GoogleButton from 'react-google-button'


const SignIn = (props) => {
    const [user, setUser] = useState({email: '', contraseña: ''})
    // const [eye, setEye] = useState(false)
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
            return toast.error('Fill in the fields')
        }
        const response = await props.logInUser(userGen)
        if(response){
            toast.error(response)
        }else{
            toast.success('Welcome')
            setTimeout(function(){ props.history.push('/') }, 5000);       
        }
    }
    
    // const responseGoogle = (response) => {
    //     if(response.profileObj.email){
    //         sendValueUser(null, {email: response.profileObj.email, password: 'a'+response.profileObj.googleId})
    //     }
    // }

    return(
        <>
            {/* <Header /> */}
            <div>
                <div>
                    {/* <FlightTakeoffIcon className='logoForm'/> */}
                    <h1>Sign in!</h1>
                    <form>
                        <input type="text" placeholder="Please, enter your email adress"
                        onChange={readInputUser} value={user.email} name="email" />
                    
                        <div>
                            <input type="password" /*{eye ? "text" : "password"}*/ placeholder="Por favor, ingrese su contraseña"
                            onChange={readInputUser} value={user.contraseña} name="contraseña" />
                            {/* {eye ? <VisibilityOffOutlinedIcon className='eyeSignUp' onClick={()=>setEye(!eye)} /> : <VisibilityOutlinedIcon className='eyeSignUp' onClick={()=>setEye(!eye)}/>} */}
                        </div>
                        <button onClick={sendValueUser}>Sign in!</button>
                        {/* <GoogleLogin
                            clientId="974935643152-qgv6foimg4iuj8fg4nl7r4id11516f3g.apps.googleusercontent.com"
                            render={renderProps => (
                                <GoogleButton className='btn-google' onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
                            )}
                            buttonText="Sign in with google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        /> */}
                    </form>
                    {/* <ToastContainer /> */}
                    <p>Don't have an account?  <NavLink to='/registro'>Sign up here!</NavLink></p>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

const mapDispatchToProps = {
    logInUser: authActions.logInUser 
}

// export default connect(null ,mapDispatchToProps)(SignIn)
export default SignIn
