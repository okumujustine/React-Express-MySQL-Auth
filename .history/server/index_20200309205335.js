
const express = require('express')
const app = express()
const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 })


const port = 3000
app.listen(port, () => console.log(`server running on port ${port}`))