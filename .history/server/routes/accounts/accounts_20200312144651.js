const express = require('express')
const router = express.Router()
const conn = require('../../config/database/db')
const uuid =  require('uuid')


router.get('/register', (req, res) => {
    const { user_name, user_contact,user_email,user_password,user_role } = req.body
    let user_id = 
    const userAccount = { 
        user_id, 
        user_name,
        user_contact,
        user_email,
        user_password,
        user_role
    }
    insertUserSql = "INSERT INTO user_account SET?"
    conn.query(insertUserSql, userAccount ,(err, results) => {
        if (err) throw err
        res.send("User created successfuly!");
    })
})

module.exports = router