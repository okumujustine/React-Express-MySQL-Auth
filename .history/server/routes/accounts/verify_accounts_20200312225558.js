const jwt = require('jsonwebtoken')

function doctorUserAuth (req, res, next) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send("Access Denied , Login please")

    try{
        const veryfied = jwt.verify(token, process.env.LOGIN_TOKEN_SECRET_KEY)
        req.user = veryfied
        if(req.user.user_role != 'doctor') return res.status(400).send("Doctors area only")
        next()

    }catch(err){
        res.status(400).send("Invalid Token")
    }
}

function userUserAuth (req, res, next) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send("Access Denied , Login please")
    const veryfied = jwt.verify(token, process.env.LOGIN_TOKEN_SECRET_KEY)
    req.user = veryfied
    next()

    try{
        const veryfied = jwt.verify(token, process.env.LOGIN_TOKEN_SECRET_KEY)
        req.user = veryfied
    }catch(err){
        res.status(400).send("Invalid Token")
    }
}

module.exports = {doctorUserAuth, userUserAuth}