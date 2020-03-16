
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
  password: '0781459239',
  database: 'chat'
});
con.connect((err) => {
  if (err){
    throw err;
    console.log('error during connection')
  } else{
    console.log('Connected!');
  }
});

// app.use(router)
router.get('/', (req, res) => {
  con.query('SELECT * FROM todo', (err,rows) => {
      if(err) throw err;
    
      console.log('Data received from Db:');
      console.log(rows);
    });
})

  
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server running on port ${port}`))