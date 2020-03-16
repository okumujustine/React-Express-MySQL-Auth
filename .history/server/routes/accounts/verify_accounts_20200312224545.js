const jwt = require('jsonwebtoken')

function doctorUserAuth (req, res, next) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send("Access Denied , Login please")

    try{
        const veryfied = jwt.verify(token, process.env.LOGIN_TOKEN_SECRET_KEY)

        req.user = veryfied
        // next()
        res.status(400).send(req.user)
    }catch(err){
        res.status(400).send("Invalid Token")
    }
}

function userUserAuth (req, res, next) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send("Access Denied , Login please")

    try{
        const veryfied = jwt.verify(token, process.env.LOGIN_TOKEN_SECRET_KEY)
        req.user = veryfied
    }catch(err){
        res.status(400).send("Invalid Token")
    }
}

module.exports = {doctorUserAuth, userUserAuth}