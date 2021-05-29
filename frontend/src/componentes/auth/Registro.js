import React from 'react'
import { useState } from 'react'
import  GoogleLogin  from 'react-google-login';
import { connect } from 'react-redux'
import authActions from '../../redux/actions/authActions'


const Registro = (props) => {
   
    const [nuevoUsuario,setNuevoUsuario] = useState ({nombre:"",apellido:"",email:"",contraseña:""})
    const [errores, setErrores] = useState ([])
    
    
    const readInput= e => {
        const campo = e.target.name
        const valor = e.target.value
        setNuevoUsuario({
            ...nuevoUsuario,
            [campo]:valor
        })
    }

    const send = async (e = null , googleUser = null) => { 
        e && e.preventDefault()
         var usuario = e ? nuevoUsuario : googleUser
        const respuesta = await props.createUser(usuario)
        if (respuesta){
            console.log(respuesta)
            // setErrores(respuesta)
        }
       
    }
    const responseGoogle = (response) => {
       const {givenName,familyName,email,googleId} = response.profileObj
       send(null,{nombre: givenName, apellido: familyName , email: email ,password:'a'+googleId, google: true }) 
    }

   
   
    return (
        <div>
            <div className="page-registro-c" >
                <form  id="registro-c" >
                    <h1 className="titulo-registro">Create una cuenta:</h1>
                    <input type="text" placeholder="Complete con su nombre" name="nombre" value={nuevoUsuario.nombre} onChange={readInput} className="input-c"/>
                    <input type="text" placeholder="Complete con su Apellido" name="apellido"  value={nuevoUsuario.apellido}  onChange={readInput} className="input-c"/>
                    <input type="email" placeholder="Direccion de correo electronico" name="email"  value={nuevoUsuario.email} onChange={readInput} className="input-c"/>
                    <input type="password" placeholder="Contraseña" name="contraseña"  value={nuevoUsuario.contraseña} onChange={readInput} className="input-c"/>
                    
                    <div className="botones-c">
                        <button onClick={send} className="boton-c">Enviar formulario</button>
                        <GoogleLogin
                            clientId="687710738267-6envati0vqengfok9k0eqgbo9k5jf9j9.apps.googleusercontent.com"
                            buttonText="Registrar con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="boton-c"
                        />,          
                    </div>
                  
                </form>
                <div>
                    <img src="https://i.pinimg.com/originals/88/bb/b4/88bbb465eaa3069b572ef96a1134f9ed.jpg" alt=" " className="d-imagen"/>

                </div>
            <div>
                {/* {errores.map(error => <h1>{error}</h1>)} */}
            </div>
            </div>
 
    

            
        </div>
    )
}
const mapDispatchToProps ={
 
    createUser: authActions.createUser 
 
   }
   
   
   export default connect (null , mapDispatchToProps)(Registro)
