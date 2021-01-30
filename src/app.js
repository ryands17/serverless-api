const fastify = require('fastify')
const serverless = require('serverless-http')
const { PrismaClient } = require('@prisma/client')

const app = fastify()
const prisma = new PrismaClient()

app.get('/main', (req, res) => {
  res.send({
    success: true,
  })
})

app.get('/date', (req, res) => {
  res.send({
    todaysDate: new Date().toDateString(),
  })
})

app.get('/user', async (req, res) => {
  try {
    const users = await prisma.user.findMany({ include: { posts: true } })
    res.send({
      data: { users },
    })
  } catch (error) {
    console.log('e', error)
    res.status(500).send({
      error: 'Cannot fetch users!',
    })
  }
})

exports.api = serverless(app, {
  request(request, event, context) {
    context.callbackWaitsForEmptyEventLoop = false
  },
})
