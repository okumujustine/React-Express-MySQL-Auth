const express = require('express')
const router = express.Router()


router.get('/register', (req, res) => {
    const userAccounts = req.body

    res.send(userAccounts)
})

module.exports = router