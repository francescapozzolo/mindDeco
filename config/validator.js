const joi = require('joi')

const validator = (req, res, next) => {
    
    const schema = joi.object({
        
        nombre: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            "string.base": "Tu nombre solo tiene que contener letras",
            "string.empty": "Tu nombre es un campo requerido",
            "any.required": "Tu nombre es un campo requerido",
            "string.min": "Tu nombre debe contener al menos 2 letras",
            "string.max": "Tu nombre debe contener hasta 20 letras",
            "string.trim": "Tu nombre contiene espacios inecesarios",
            "string.pattern.base":"Tu nombre solo debe contener letras"
        }),
        apellido: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            "string.base": "Tu apellido solo debe contener letras",
            "string.empty": "Tu apellido es un campo requerido",
            "any.required": "Tu apellido es un campo requerido",
            "string.min": "Tu apellido debe contener al menos 2 letras",
            "string.max": "Tu apellido debe contener hasta 20 letras",
            "string.trim": "Tu apellido contiene espacios inecesarios",
            "string.pattern.base":"Tu apellido solo debe contener letras"
        }),
        email: joi.string().required().trim().email().messages({
            "string.base": "Su correo electrónico debe tener un tipo de texto",
            "string.empty": "Tu email es un campo requerido",
            "string.email": "Por favor, escriba un email valido",
            "any.required": "Tu email es un campo requerido",
            "string.trim": "Tu email contiene espacios inecesarios"
        }),
        // "/(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/" full password (in regexp)
        contraseña: joi.string().min(5).trim().required().pattern(/(?=.*\d)(?=.*[A-z])/).messages({
            "string.empty": "Tu contraseña es un campo requerido",
            "string.pattern.base": "Tu contraseña debe contener letras y numeros",
            "string.min": "Tu contraseña debe contener al menos 5 caracteres",
            "any.required": "Tu contraseña es un campo requerido",
        }),
        foto: joi.string().required().trim().messages({
            "string.empty": "La dirección de tu imagen es requerida",
            "any.required": "La dirección de tu imagen es requerida",
            "string.trim": "La dirección de tu imagen contiene espacios inecesarios"
        }),
        provincia: joi.string().required().trim().messages({
            "string.empty": "Su provincia es un campo requerido",
            "any.required": "Su provincia es un campo requerido"
        }),
        administrador: joi.boolean(),
        google: joi.boolean()
    })
    const validation = schema.validate(req.body, {abortEarly: false})
   
    if (validation.error) {
        return res.json({success: false, errores: validation.error.details})
    }
    next()
}

module.exports = validator