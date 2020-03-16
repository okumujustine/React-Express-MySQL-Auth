const express = require('express')
const router = express.Router()
const conn = require('./config/database/db')

router.get('/', (req, res) => {
    con.query('SELECT * FROM todo', (err,rows) => {
        if(err) throw err;
        res.send(rows);
    });
})

module.exports = router