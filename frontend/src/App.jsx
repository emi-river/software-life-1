import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [img, setImg] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetch('/movies')
      .then((response) => response.json())
      .then((result) => {
        setMovies(result)
        console.log(result)
      })
  }, [])

  const addAMovie = (e) => {
    e.preventDefault()
    const values = {
      name,
      genre,
      img,
      rating,
      description
    }
    fetch('/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status)
        }
        return response.json()
      })
      .then((movies) => {
        console.log(movies)
        setMovies(movies)
        setName('')
        setGenre('')
        setImg('')
        setRating('')
        setDescription('')
      })
      .catch((error) => {
        console.log(error)
      })

    setTimeout(() => {
      location.reload()
    }, 100)
  }

  return (
    <>
      <div className="title">
        <h1>Movies</h1>
      </div>
      <div className="container">
        {movies.map((movie) => (
          <div className="movieList" key={movie.id}>
            <h2 className="movieName">{movie.name}</h2>
            <h3 className="rating">
              <img
                className="starRating"
                src="solar_star-line-duotone.png"
                alt="Star icon"
              />
              {movie.rating}
            </h3>
            <img className="img" src={movie.img} alt="Movie picture." />
            <p id="genre">{movie.genre}</p>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>ADD A MOVIE:</h3>
        <form onSubmit={addAMovie} method="POST">
          <input
            type="text"
            placeholder="Movie name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Movie genre"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
          />
          <input
            type="text"
            placeholder="Image link"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          />
          <input
            type="text"
            placeholder="IMDb rating"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
          <input
            type="text"
            placeholder="Movie description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <button type="submit" onClick={addAMovie}>
            Add a movie!!
          </button>
        </form>
      </div>
    </>
  )
}

export default App
