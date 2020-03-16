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
    res.send('body')
})

module.exports = router