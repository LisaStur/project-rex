import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { moviesReducer } from 'reducers/moviesReducer'

const MOVIES_URL = 'https://rex-database2019.herokuapp.com/movies'

export const Movies = () => {
  const dispatch = useDispatch()
  const movies = useSelector(store => store.reducer.all)

  useEffect(() => {
    if (movies.length > 0) {
      return
    }
    fetch(MOVIES_URL)
      .then(res => res.json())
      .then(json => dispatch(moviesReducer.actions.setMovies(json)))
  }, [dispatch, movies.length])

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
  justify-content: center;
  
  @media (min-width: 668px) {
  flex-flow: row wrap;  
`
const MovieCard = styled.section`
  background-color: black;
  width: 95%;
  height: auto;
  margin: 2%;

  @media (min-width: 668px) {
    width: 40%;
    height: auto; 
    margin: 2%;
  }
`
const MovieInfoLink= styled(Link)`
  Text-decoration: none;
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

