
const express = require('express')
const app = express()
const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8080 })

ws.on('connection', ws => {
    ws.on('message', message => {
      console.log(`Received message => ${message}`)
    })
    ws.send('ho!')
})
  
const port = 3000
app.listen(port, () => console.log(`server running on port ${port}`))