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

client.connect()

app.get('/movies', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM movies')
  console.log(rows)

  response.send(rows)
})

app.post('/movies', async (request, response) => {
  const { name, genre, img, rating, description } = request.body
  console.log(request.body)
  await client.query(
    'INSERT INTO movies(name, genre, img, rating, description) VALUES ($1, $2, $3, $4, $5);',
    [name, genre, img, rating, description]
  )

  const { rows } = await client.query('SELECT * FROM movies')

  response.status(500).send(rows)
})

app.use(express.static(path.join(path.resolve(), 'public')))

app.listen(3000, () => {
  console.log(`http://localhost:${port} is live!`)
})
