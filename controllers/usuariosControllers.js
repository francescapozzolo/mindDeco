const Usuario = require('../models/Usuario')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const usuariosControllers = {
    registrarUsuario:async (req, res) => {
        let {nombre, apellido, email, password, google} = req.body
        let foto = 'dasdsa'
        let provincia = 'adsadsads'
        const mailExist = await Usuario.findOne({email})

        let error;
        
        password = bcryptjs.hashSync(password, 10)
        if(!mailExist){
            try{
                var userToRecord = new Usuario({nombre, apellido, email, password, google, foto, provincia })       
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
            respuesta: {token , nombre: userToRecord.nombre, apellido: userToRecord.apellido, email: userToRecord.email}
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
                error = userExist.google ? 'You have to login with google' : 'Incorrect username and/or password'                
            }
        } else {
            error = 'Incorrect username and/or password'
        }

        res.json({
            success: !error ? true : false,
            respuesta: !error && {token: respuesta, userImage: userExist.userImage, firstName: userExist.firstName, lastName: userExist.lastName, itinerariesLiked: userExist.itinerariesLiked, email: userExist.email},
            error: error
        })
      
    },

    loginForzado: async (req, res) => {
        res.json({success: true, respuesta: {userImage: req.user.userImage, firstName: req.user.firstName, lastName: req.user.lastName, itinerariesLiked: req.user.itinerariesLiked, email: req.user.email}})
    }
}


module.exports = usuariosControllers