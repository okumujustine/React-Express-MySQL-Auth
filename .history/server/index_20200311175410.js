
const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const mysql = require('mysql');

//router
const router = require('./router')

//database conn and settings


// app.use(router)
app.get('/', (req, res) => {
  con.query('SELECT * FROM todo', (err,rows) => {
      if(err) throw err;
      res.send(rows);
    });
})

  
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server running on port ${port}`))