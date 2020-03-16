
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
//router
const router = require('./router')

app.use(bodyParser.json())
app.use(router)

  
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server running on port ${port}`))