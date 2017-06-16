const DriversController = require('../controllers/drivers_controller')

module.exports = (app) => {
  //Watch for incoming requiest fo method GET
  // to the route http://localhost:3050/api
  app.get('/api', DriversController.greeting)
  //Watch for incoming requiest fo method POST
  // to the route http://localhost:3050/api/drivers
  app.post('/api/drivers', DriversController.create)
}
