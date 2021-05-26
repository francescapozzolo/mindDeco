const { Strategy } = require("passport")
const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const Usuario = require('../models/Usuario')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY
}, async (payload, done) => {
    try{
        const user = await Usuario.findById(payload._doc._id)
        if(user){
            done (null, user)
        } else {
            done (null, false)
        }
    }
    catch(error){done (error, false)}
}))