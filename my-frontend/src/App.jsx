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
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
        </div>
      ))}
    </>
  )
}

export default App
