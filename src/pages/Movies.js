import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MOVIES_URL = 'http://localhost:8080/movies'

export const Movies = () => {
  const [movies, setMovies]= useState([])

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(res => res.json())
      .then(json => {
        setMovies(json)
      })
  }, [])

  return (
    <MoviePage>   
      {movies.map(movie => (
        <MovieCard key={movie.title}>
          <MovieInfoLink to={`/movieinfo/${movie.title}`}>
            <Image src={movie.imageUrl} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieInfoLink>
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
const MovieInfoLink = styled(Link)`
  text-decoration: none;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  `
const MovieTitle = styled.h1`
  color: white;
  font-size: 20px;
  height: 40px;
  text-align: center;
  padding-left: 2%;
  padding-right 2%;
  `

