const Usuario = require('../models/Usuario')

const usuariosControllers = {
    registrarUsuario:async (req, res) => {
        let {firstName, lastName, email, password, userImage, country, google, itinerariesLiked} = req.body
        const mailExist = await Usuario.findOne({email})

        let error;
        
        password = bcryptjs.hashSync(password, 10)
        if(!mailExist){
            try{
                var userToRecord = new Usuario({firstName, lastName, email, password, userImage, country, google, itinerariesLiked})       
                await userToRecord.save()
                var respuesta = jwt.sign({...userToRecord}, process.env.SECRET_OR_KEY)
                respuesta = token  
            }catch{
                error = "There was an error in the user engraving. Retry"
            }
        } else {
            error = 'The mail is already in use'
        }
        if(error){
            return res.json({success: false, errores: {'controllers':error}})
        }
        res.json({
            success: true,
            respuesta: {token: respuesta, userImage: userToRecord.userImage, firstName: userToRecord.firstName, lastName: userToRecord.lastName, itinerariesLiked: userToRecord.itinerariesLiked, email: userToRecord.email}
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