module.exports = (app) => {
  app.post('/resgister', (req, res) => {
    res.send({
      message: (`Hello ${req.body.email}! You have been registered have fun!`)
    })
  })
}
