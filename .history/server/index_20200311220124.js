
const express = require('express')
const socketio = require('socket.io')(server, { origins: '*:*'})
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
app.use(cors())
//router
const router = require('./router')

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(router)

  
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server running on port ${port}`))