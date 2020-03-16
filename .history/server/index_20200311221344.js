
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
  console.log('we have a new connection')
  socket.on('disconnect', () => {
    console.log('User had left')
  })
});
// app.use(router)
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server running on port ${port}`))