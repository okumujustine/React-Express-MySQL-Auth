const express = require('express')
const router = express.Router()


router.get('/reqister', (req, res) => {
    const userAccounts = { user_name, user_contact,user_email,user_password } = req.body

    res.send(userAccounts)
})

module.exports = router