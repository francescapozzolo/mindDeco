const Usuario = require('../models/Usuario')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const usuariosControllers = {
    botonGoogle: async (req, res) => {
        console.log('usuarios controllers ln:7', req.body)
        let {nombre, apellido, email, password, google, provincia} = req.body
        const mailExist = await Usuario.findOne({email})
        var token 
        if(!mailExist){
            password = bcryptjs.hashSync(password, 10)
            try{
                var userToRecord = new Usuario({nombre, apellido, email, password, google, provincia})       
                await userToRecord.save()
                token = jwt.sign({...userToRecord}, process.env.SECRET_OR_KEY)
            }catch(error){
                console.log(error)
            }
        }else{
            const passwordEqual = bcryptjs.compareSync(password, mailExist.password)
            if(passwordEqual){
                token = jwt.sign({...mailExist}, process.env.SECRET_OR_KEY)
            }
        }
        res.json({
            success: true,
            respuesta: {token , nombre, apellido, email, carrito: mailExist ? mailExist.carrito : []}
        })   
    },
    registrarUsuario:async (req, res) => {
        let {nombre, apellido, email, password, google, provincia} = req.body
        const mailExist = await Usuario.findOne({email})
        
        let error;
        password = bcryptjs.hashSync(password, 10)
        if(!mailExist){
            try{
                var userToRecord = new Usuario({nombre, apellido, email, password, google, provincia})       
                await userToRecord.save()
                var token = jwt.sign({...userToRecord}, process.env.SECRET_OR_KEY)
            }catch{
                error = "Ocurrio un problema, vuela a intentarlo mas tarde"
            }
        } else {
            error = 'El correo ya esta en uso'
        }
        if(error){
            return res.json({success: false, errores: {'controllers':error}})
        }
        res.json({
            success: true,
            respuesta: {token , nombre: userToRecord.nombre, apellido: userToRecord.apellido, email: userToRecord.email, carrito: userToRecord.carrito}
        })       
    },


    loguearUsuario: async (req, res) => {
        const {email, password} = req.body
        
        let error;
        
        const userExist = await Usuario.findOne({email})
        
        if(userExist){
            const passwordEqual = bcryptjs.compareSync(password, userExist.password)
            if(passwordEqual){
                var respuesta = jwt.sign({...userExist}, process.env.SECRET_OR_KEY)
            }else{
                error = userExist.google ? 'Usted tiene que iniciar seción con google' : 'Correo y/o contraseña incorrecta'                
            }
        } else {
            error = 'Correo y/o contraseña incorrecta'
        }

        res.json({
            success: !error ? true : false,
            respuesta: !error && {token: respuesta, nombre: userExist.nombre, apellido: userExist.apellido, email: userExist.email, carrito: userExist.carrito, administrador: userExist.administrador},
            error: error
        })
      
    },

    loginForzado: async (req, res) => {
        res.json({success: true, respuesta: { nombre: req.user.nombre, apellido: req.user.apellido, email: req.user.email, carrito: req.user.carrito, administrador: req.user.administrador}})
    }
}


module.exports = usuariosControllers