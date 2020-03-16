const express = require('express')
const router = express.Router()
const conn = require('../../config/database/db')
const { v4: uuidv4 } =  require('uuid')
const Joi = require('@hapi/joi')

const accountsRegistrationValidation = {
    email: Joi.require().string().min(6).email()
}
router.get('/register', (req, res) => {
    const { user_name, user_contact,user_email,user_password,user_role } = req.body
    let user_id = uuidv4();
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