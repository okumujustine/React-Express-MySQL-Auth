const express = require('express')
const router = express.Router()


router.get('/register', (req, res) => {
    const { user_id, user_name, user_contact,user_email,user_password } = req.body
    const userAccount = { 
        user_id, 
        user_name,
        user_contact,
        user_email,
        user_password 
    }
    res.send(userAccount)
})

module.exports = router