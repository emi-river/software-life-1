const express = require('express'),
  path = require('path')

const app = express(),
  port = process.env.PORT || 3000

app.get('/movies', (_request, response) => {
  response.send({ name: 'Avatar 2' })
})

app.use(express.static(path.join(path.resolve(), 'public')))

app.listen(3000, () => {
  console.log('http://localhost:3000/ is live!')
})
