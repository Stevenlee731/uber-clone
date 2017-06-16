const express = require('express')
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const app = express() //takes in incoming http requests
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise
// alternates between test environment and drevlopemnt
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/uber-clone')
}

app.use(bodyParser.json())
routes(app)

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message }) // sends error 422 back to requester
})

module.exports = app
