const express = require('express')
const router = express.Router()
const conn = require('../../config/database/db')
const { v4: uuidv4 } =  require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { doctorUserAuth, userUserAuth } = require('./verify_accounts')
//validation imports
const { registrationValidation } = require('./accounts_validation')



router.post('/register', (req, res) => {
    let { user_name, user_contact,user_email,user_password,user_role } = req.body
    //validate user before storage
    const { error } = registrationValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //check if user contact already exists
    conn.query("SELECT COUNT(*) AS emailCount FROM user_account WHERE user_email = ? " , user_email , (err , results) => {
    if(err){
        console.log(err);
    }   
    else{
        if(results[0].emailCount > 0){  
            res.status(400).send('User with entered email address already exist')
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
                res.status(201).send("User created successfuly!");
            })                
        }
    }
    })
})


router.post('/login', (req, res) => {
    let { user_email,user_password } = req.body

    //check if user contact already exists
    conn.query("SELECT * FROM user_account WHERE user_email = ? " , user_email , (err , results) => {
        if(err){
            console.log(err);
        }   
        else{
            if(results.length == 0){  
                res.status(400).send('Email or password is wrong')
            }else{
                //check if password is correct
               let passWordResult = bcrypt.compareSync(req.body.user_password, results[0].user_password)
               if (!passWordResult){
                    res.status(400).send('Email or password is wrong')
               }else{
                   //assign an auth token
                   const token = jwt.sign({user_id:results[0].user_id, user_role:results[0].user_role,user_name:results[0].user_name, user_contact:results[0].user_contact}, process.env.LOGIN_TOKEN_SECRET_KEY)
                   res.header('auth-token',token)
                    res.status(200).send({
                        token,
                        user:{
                            user_id:results[0].user_id,
                            user_contact:results[0].user_email,
                            user_name:results[0].user_name,
                            user_role:results[0].user_role
                        }
                    }) 
               }            
            }
        }
    })
})


router.get('/all', userUserAuth, (req, res) =>{
    res.send(req.user)
})

router.get('/allusers', userUserAuth, (req, res) =>{

    let selectUserSql = "SELECT * FROM user_account"
    conn.query(selectUserSql ,(err, results) => {
        if (err) throw err
        res.status(201).send(results);
    }) 
     
})

module.exports = router