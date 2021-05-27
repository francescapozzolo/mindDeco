import React from 'react'
import { useState } from 'react'
import  GoogleLogin  from 'react-google-login';
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions';

const Registro = () => {
   
    const [nuevoUsuario,setNuevoUsuario] = useState ({nombre:"",apellido:"",email:"",contraseña:""})
    const [errores, setErrores] = useState ([])
    
    
    const readInput= e => {
        const campo = e.target.name
        const valor = e.target.value
        setNuevoUsuario({
            ...newUser,
            [campo]:valor
        })
    }

    const send = async (e = null , googleUser = null) => { 
        e && e.preventDefault()
         var usuario = e ? newUser : googleUser
        const respuesta = await props.crearUsuario(usuario)
        if (respuesta){
            setErrores(respuesta)
        }
       
    }
    const responseGoogle = (response) => {
       const {givenName,familyName,email,googleId} = response.profileObj
       send({nombre: givenName, apellido: familyName , email: email ,contraseña: googleId }) 
    }

   
   
    return (
        <div>
            <div  className="registro" style={{backgroundImage:`url()`}} >
                <form className="formulario-signUp">
                <h1 className="titulo-registro">Create una cuenta:</h1>
                <input type="text" placeholder="Complete con su nombre" name="nombre" value={nuevoUsuario.nombre} onChange={readInput}/>
                <input type="text" placeholder="Complete con su Apellido" name="apellido"  value={nuevoUsuario.apellido}  onChange={readInput}/>
                <input type="email" placeholder="Direccion de correo electronico" name="email"  value={nuevoUsuario.email} onChange={readInput}/>
                <input type="password" placeholder="Contraseña" name="contraseña"  value={nuevoUsuario.contraseña} onChange={readInput}/>
                
                <button onClick={send}>Enviar</button>
                <GoogleLogin
                    clientId="51994203609-6pfr06m9b9vn7tcr4lrad0nrgm1i42b8.apps.googleusercontent.com"
                    buttonText="Sign Up with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />,          
            </form>
            <div>
                {errores.map(error => <h1>{error}</h1>)}
            </div>
            </div>
 
    

            
        </div>
    )
}
const mapDispatchToProps ={
    crearUsuario: userActions.crearUsuario
   }
   
   
   export default connect (null , mapDispatchToProps)(Registro)
