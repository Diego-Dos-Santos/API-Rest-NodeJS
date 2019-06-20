const jwt = require ('jwt-simple');
const moment = require ('moment');
const config = require ('../config')

//Protección de rutas através de middleware
function isAuth (req, res, next) {
    //Permiso de Autorización
    if(!req.headers.authorization){
        return res.status(403).send ({Message:"No tienes autorización"})
    }

    //
    const token = req.headers.authorization.split(' ')[1]
    //
    const payload = jwt.decode(token, config.SECRET_TOKEN)

    //Comprobar si el token caducó 
    if(payload.exp <= moment().unix()) {
        return res.status(401).send({Message:"El token ha expirado"})
    }

    //Nos explica que usuario ha enviado
    req.user = payload.sub
    next()
}

module.exports = isAuth