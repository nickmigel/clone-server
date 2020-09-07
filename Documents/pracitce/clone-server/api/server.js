const express = require('express')
const helmet = require('helmet');
const cors = require('cors')

const authRouter = require('./auth/auth-router')

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/api', authRouter)

app.get('/', (req, res) => {
    res.send('welcome to a crappy api')
})

module.exports = app