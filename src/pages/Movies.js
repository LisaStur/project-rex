import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



export const Movies = () => {
  const [movies, setMovies]= useState([])

  useEffect(() => {
    fetch('http://localhost:8080/movies')
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
        <MovieCard key={movie.movieId}>
          <Link to={`/movieinfo/${movie.movieId}`}>
            <Image src={movie.imageUrl} />
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        </MovieCard>
      ))}
    </MoviePage>
  )
}

const MoviePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 668px) {
  flex-flow: row wrap;  
`

const Image = styled.img`
  width: 100%;
  height: auto;
  `

const MovieCard = styled.section`
  background-color: black;
  width: 90%;
  height: auto;
  margin: 5%;

  @media (min-width: 668px) {
    width: 40%;
    height: auto; 
    margin: 2%;
`

const MovieTitle = styled.h1`
  color: white;
  text-align: center;
  padding-left: 2%;
  padding-right 2%;
  `

