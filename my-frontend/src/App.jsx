import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [addMovie, setAddMovie] = useState({
    name: '',
    genre: '',
    img: '',
    rating: '',
    description: ''
  })

  useEffect(() => {
    fetch('/movies')
      .then((response) => response.json())
      .then((result) => {
        setMovies(result)
      })
  }, [])

  const addAMovie = () => {
    fetch('/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addMovie),
      mode: 'no-cors'
    })
      .then((response) => response.json())
      .then(() => {
        setAddMovie({
          name: '',
          genre: '',
          img: '',
          rating: '',
          description: ''
        })
      })
  }

  function submit() {
    addAMovie()
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
        <div>
          <input
            type="text"
            placeholder="Movie name"
            onChange={(e) => setAddMovie({ ...addMovie, name: e.target.value })}
            value={addMovie.name}
          />
          <input
            type="text"
            placeholder="Movie genre"
            onChange={(e) =>
              setAddMovie({ ...addMovie, genre: e.target.value })
            }
            value={addMovie.genre}
          />
          <input
            type="text"
            placeholder="Image link"
            onChange={(e) => setAddMovie({ ...addMovie, img: e.target.value })}
            value={addMovie.img}
          />
          <input
            type="text"
            placeholder="IMDb rating"
            onChange={(e) =>
              setAddMovie({ ...addMovie, rating: e.target.value })
            }
            value={addMovie.rating}
          />
          <input
            type="text"
            placeholder="Movie description"
            onChange={(e) =>
              setAddMovie({ ...addMovie, description: e.target.value })
            }
            value={addMovie.description}
          />
          <button type="submit" onClick={submit}>
            Add a movie!!
          </button>
        </div>
      </div>
    </>
  )
}

export default App
