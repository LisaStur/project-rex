import React, { useState, useEffect } from 'react'



export const Movies = () => {
  const URL_MOVIES = 'http://localhost:8080/movies'
 const [movies, setMovies]= useState([])

  useEffect(() => {
    fetch(URL_MOVIES)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setMovies(data)
      })
  }, [])

  return (
    <div>   
      {movies.map(movie => (
        <section key={movie._id}>
          <h1> {movie.title}</h1>
          <h3>{movie.originalTitle}</h3>
          <h2>{movie.director}</h2>
          <h3>{movie.country} {movie.productionYear} {movie.duration}min {movie.language}</h3>
          <p>{movie.synopsis}</p>
        </section>
      ))}
    </div>
  )
}