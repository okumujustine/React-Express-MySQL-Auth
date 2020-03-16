
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
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});
con.connect((err) => {
  if (err){
    // throw err;
    console.log('error during connection')
  } else{
    console.log('Connected!');
  }
});

app.use(router)

  
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server running on port ${port}`))