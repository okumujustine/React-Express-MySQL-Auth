const express = require('express')
const router = express.Router()
const conn = require('../../config/database/db')
const { v4: uuidv4 } =  require('uuid')
const bcrypt = require('bcryptjs')
//validation imports
const { registrationValidation } = require('./accounts_validation')

router.get('/register', (req, res) => {
    let { user_name, user_contact,user_email,user_password,user_role } = req.body
    //validate user before storage
    const { error } = registrationValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //check if user contact already exists
    conn.query("SELECT COUNT(*) AS contactCount FROM user_account WHERE user_contact = ? " , user_contact , (err , results) => {
    if(err){
        console.log(err);
    }   
    else{
        if(results[0].contactCount > 0){  
            res.send('User with entered contact already exist')
        }else{
            //hash password before saving
            const salt = bcrypt.genSaltSync(10)
            let hashedPassword = bcrypt.hashSync(req.body.user_password, salt)

            //save user to database
            let user_id = uuidv4();
            const userAccount = { 
                user_id, 
                user_name,
                user_contact,
                user_email,
                user_password:hashedPassword,
                user_role
            }
            insertUserSql = "INSERT INTO user_account SET?"
            conn.query(insertUserSql, userAccount ,(err, results) => {
                if (err) throw err
                res.send("User created successfuly!");
            })                
        }
    }
    })
})


router.post('/login', (req, res) => {
    res.send('logged in')
})
module.exports = router