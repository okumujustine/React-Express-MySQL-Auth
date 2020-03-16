
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
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database name'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(router)

  
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server running on port ${port}`))