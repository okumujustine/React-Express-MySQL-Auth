
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const env = require('dotenv')
env.config()

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(cors())
// app.options('*', cors());
//router
const accounts = require('./routes/accounts/accounts')
const router = require('./router')

app.use(morgan('tiny'))
app.use(bodyParser.json())

// routes
app.use(router)
app.use('/api/v1/accounts', accounts)
// socket io
const users = {}
io.on('connection', function (socket) {

  console.log(`user connected ${socket.id}`)

  socket.on('user_connected', function(username){
    users[username] = socket.id

    io.emit("user_connected", username)
  })

   socket.on('send_message', function(data){
     let socketId = user[data.reciever]
     io.to(socketId).emit('new_message', data)
   })

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
});

app.use(router)
const port = process.env.PORT || 4000
server.listen(port, () => console.log(`server running on port ${port}`))