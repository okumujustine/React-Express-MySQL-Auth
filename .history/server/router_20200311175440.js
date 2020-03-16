const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    app.get('/', (req, res) => {
        con.query('SELECT * FROM todo', (err,rows) => {
            if(err) throw err;
            res.send(rows);
          });
      })
})

module.exports = router