
const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

  
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server running on port ${port}`))