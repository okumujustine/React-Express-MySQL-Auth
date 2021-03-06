const express = require('express')
const router = express.Router()
const conn = require('./config/database/db')

router.get('/', (req, res) => {
    conn.query('SELECT * FROM todo', (err,rows) => {
        if(err) throw err;
        res.send(rows);
    });
})

router.post('/add', (req, res) => {
    const { todo, completed } = req.body
    let todoTask = {"task":todo, "complete":completed}
    conn.query('INSERT INTO todo SET ?', todoTask ,(err, rows) => {
        if(err) throw err;
        res.send(res.insertId)
    })
})

module.exports = router