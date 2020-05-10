
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const env = require('dotenv')
env.config()

const app = express()

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

app.use(router)
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`server running on port ${port}`))