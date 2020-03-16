
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
app.use(cors())
app.options('*', cors());
//router
const router = require('./router')

app.use(morgan('tiny'))
app.use(bodyParser.json())

// socket io
io.on('connection', function (socket) {
  socket.emit('chat-message', {hello:'you are welcome'})

  socket.on('disconnect', () => {
    console.log('User had left')
  })
});
app.use(router)
const port = process.env.PORT || 4000
server.listen(port, () => console.log(`server running on port ${port}`))