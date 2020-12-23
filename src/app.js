const fastify = require('fastify')
const serverless = require('serverless-http')

const app = fastify()

app.get('/main', (req, res) => {
  res.send({
    success: true,
  })
})

exports.api = serverless(app)
