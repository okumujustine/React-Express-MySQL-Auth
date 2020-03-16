const express = require('express')
const router = express.Router()
const conn = require('../../config/database/db')


router.get('/register', (req, res) => {
    const { user_id, user_name, user_contact,user_email,user_password,user_role } = req.body
    const userAccount = { 
        user_id, 
        user_name,
        user_contact,
        user_email,
        user_password,
        user_role
    }
    insertUserSql = "INSERT INTO user_account ?"
    conn.query(insertUserSql, userAccount ,(err, results) => {
        if (err) throw err
        console.log("User created successfuly!");
    })
    res.send(userAccount)
})

module.exports = router