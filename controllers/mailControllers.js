const mailControllers = {
    enviarMail: (req, res) => {
        try{
   
        }
        catch(error){
            console.log(error)
            res.json({success:false, respuesta: 'Algo salió mal, intente nuevamente'})
        }
    },
}


module.exports = mailControllers