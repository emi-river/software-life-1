import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/movies')
      .then((response) => response.json())
      .then((result) => {
        setMovies(result)
      })
  }, [])

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
    </>
  )
}

export default App
