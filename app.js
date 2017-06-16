const express = require('express')
const routes = require('./routes/routes')
const app = express() //takes in incoming http requests

routes(app)

module.exports = app
