const express = require('express')
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const app = express() //takes in incoming http requests
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/uber-clone')

app.use(bodyParser.json())
routes(app)

module.exports = app
