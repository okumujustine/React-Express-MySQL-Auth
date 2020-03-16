
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const env = require('dotenv')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
app.use(env)
app.use(cors())
app.options('*', cors());
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

  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  });

  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', {message, name: users[socket.id]})
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
});
app.use(router)
const port = process.env.PORT || 4000
server.listen(port, () => console.log(`server running on port ${port}`))