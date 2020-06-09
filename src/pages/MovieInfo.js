import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const URL_MOVIEINFO = `http://localhost:8080/movies/${title}`
/*
export const MovieInfo = () => {
  const [info, setInfo] = useState()

  useEffect(() => {
    fetch(URL_MOVIEINFO)
      .then(res => {
        return res.json()
      })
      .then(json => setInfo(json))
  }, [])

  return (
    <InfoSection>
      <h4>{info.originalTitle}</h4>
      <h3>{info.director}</h3>
      <h4>{info.country} {info.productionYear} {info.duration}min {info.language}</h4>
      <p>{info.synopsis}</p>
    </InfoSection>
  )
}
const InfoSection = styled.section`
  background-color: pink;
`*/