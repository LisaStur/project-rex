import React, { useState, useEffect } from 'react'
import styled from 'styled-components'



export const Movies = () => {
  const URL_MOVIES = 'http://localhost:8080/movies'
 const [movies, setMovies]= useState([])

  useEffect(() => {
    fetch(URL_MOVIES)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setMovies(data)
      })
  }, [])

  return (
    <MoviePage>   
      {movies.map(movie => (
        <MovieCard key={movie._id}>
          <h2>{movie.title}</h2>
          <Image src={movie.imageUrl } />
        </MovieCard>
      ))}
    </MoviePage>
  )
}

const MoviePage = styled.section`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`

const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 668px) {
    width: 90%;
    height: auto;
  `
const MovieCard = styled.section`
    background-color: black;
  width: 100%;
  height: auto;

  @media (min-width: 668px) {
    width: 45%;
    height: auto; 
`