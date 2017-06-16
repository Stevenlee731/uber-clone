const express = require('express')
const app = express() //takes in incoming http requests

//Watch for incoming requiest fo method GET
// to the route http://localhost:3050/api
app.get('/api', (req, res) => {
  res.send({ hi: 'there' })
})

module.exports = app
