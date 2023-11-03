import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movie, setMovie] = useState('')

  useEffect(() => {
    fetch('/movies')
      .then((response) => response.json())
      .then((result) => {
        setMovie(result)
      })
  }, [])

  return (
    <>
      <div>
        <h1>Movies</h1>
        <h2>{movie.name}</h2>
      </div>
    </>
  )
}

export default App
