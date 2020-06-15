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
      <BigScreenContainer>
      <Image src={info.imageUrl} alt={info.title} />  
      <MainTextContainer>
          <InfoTitle>{info.title}</InfoTitle>
          <MainInfo>{info.director}</MainInfo>
          <ProdInfo>{info.originalTitle} </ProdInfo> 
          <ProdInfo>{info.country} {info.productionYear}, {info.duration}min</ProdInfo>
      </MainTextContainer>
      </BigScreenContainer> 
        <Synopsis>{info.synopsis}</Synopsis>
    </InfoContainer>
  )
}

const InfoContainer= styled.section`
  display: flex;
  flex-direction: column;
  margin: 2%;
  background-color: black; 
  padding 2%;
`
const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 1024px) {
    width: auto;
    height: 300px;
  }
  `
const BigScreenContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
const MainTextContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const InfoTitle = styled.h1`
  color: white;
  font-size: 36px;
  padding-top: 5%;
  margin: 0;

  @media (min-width: 1024px) {
    padding-left: 5%;
    padding-top: 0;
  }
  `
const MainInfo = styled.h2`
  color: white;
  font-size: 24px;
  margin: 0;

  @media (min-width: 1024px) {
    padding-left: 5%;
    padding-top: 0;
  }
  `
const ProdInfo = styled.h2`
  color: white;
  font-size: 20px;
  margin: 0;

  @media (min-width: 1024px) {
    padding-left: 5%;
    padding-top: 0;
  }
  `
  const Synopsis = styled.p`
  color: white;
  font-size: 20px;
  padding-top: 2%;
  margin: 0;
  `