import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
//import { BackIcon } from '../components/BackIcon'
//import '../style/movieInfo.css'

export const MovieInfo = () => {
  const { title } = useParams()
  const history = useHistory()
  const [info, setInfo] = useState()
  const [statusCode, setStatusCode] = useState(200)

  useEffect(() => {
    fetch(`http://localhost:8080/movies/${title}`)
      .then(res => {
        setStatusCode(res.status)
        return res.json()
      })
      .then(json => setInfo(json))
  }, [title])

  useEffect(() => {
    if (statusCode !== 200) {
      history.push('/')
    }
  }, [history, statusCode])

  if (!info) {
    return <></>;
  }

  return (
    <InfoContainer>
      <Image src={info.imageUrl} alt={info.title} />  
      <InfoTextContainer>
        <InfoTitle>{info.title}</InfoTitle>
        <MainInfo>{info.director}</MainInfo>
        <MainInfo>{info.originalTitle}, {info.country} {info.productionYear}, {info.duration}min</MainInfo>
        <Synopsis>{info.synopsis}</Synopsis>
      </InfoTextContainer>
    </InfoContainer>
  )
}

const InfoContainer= styled.section`
  display: flex;
  flex-direction: column;
  margin: 5%;
  background-color: black;

  @media (min-width: 668px) {
    flex-direction: row;    
`

const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 668px) {
    width: auto;
    height: 300px;
  `

const InfoTextContainer = styled.section`
  display: flex;
  flex-direction: column;
`

const InfoTitle = styled.h1`
  color: white;
  font-size: 36px;
  padding: 5%;
  margin: 0;
  `
const MainInfo = styled.h2`
  color: white;
  font-size: 24px;
  padding-left: 5%;
  margin: 0;
 
  `

  const Synopsis = styled.p`
  color: white;
  font-size: 20px;
  padding: 5%;
  margin: 0;
  `