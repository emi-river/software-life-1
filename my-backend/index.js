const express = require('express'),
  path = require('path')

const app = express(),
  port = process.env.PORT || 3000

app.use(express.json())

const dotenv = require('dotenv'),
  { Client, Connection } = require('pg')

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI
})

const connect = new Connection({
  connectionString: process.env.PGURI
})

client.connect()

app.get('/movies', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM movies')

  response.send(rows)
})

app.post('/movies', async (request, response) => {
  const data = [
    request.body.name,
    request.body.genre,
    request.body.img,
    request.body.rating,
    request.body.description
  ]
  const insertMovie =
    'INSERT INTO movies (name, genre, img, rating, description) VALUES (?,?,?,?,?)'

  client.query(insertMovie, data, (error) => {
    if (error) {
      return response.status(500).json({
        success: false,
        error: error.message
      })
    } else {
      return response.send(data)
    }
  })
})

app.use(express.static(path.join(path.resolve(), 'public')))

app.listen(3000, () => {
  console.log(`http://localhost:${port} is live!`)
})
