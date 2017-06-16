module.exports = (app) => {
  //Watch for incoming requiest fo method GET
  // to the route http://localhost:3050/api
  app.get('/api', (req, res) => {
    res.send({ hi: 'there' })
  })
}
