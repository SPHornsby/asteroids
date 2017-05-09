const express = require('express')
const http = require('http')

// app
const app = express()
app.use(express.static('public'))

// server
const port = process.env.PORT || 8000
const server = http.createServer(app)
server.listen(port)