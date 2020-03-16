
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
io.set('origins', '*:*');
//router
const router = require('./router')

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(router)

// socket io
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server running on port ${port}`))