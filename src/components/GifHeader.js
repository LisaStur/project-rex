import React from 'react'
import styled from 'styled-components'
import gifR2 from '../assets/gifR2.gif'
import gifE from '../assets/gifE.gif'
import gifX2 from '../assets/gifX2.gif'

export const GifHeader = () => {
  return (
    <GifContainer>
      <Image src={gifR2} alt='animated R' />
      <BigImage src={gifE} alt='animated E' />
      <Image src={gifX2} alt='animated X' />
    </GifContainer>
    
  )
}

const GifContainer = styled.section`
display: flex;
flex-direction: row;
justify-content: space-evenly;
background-color: black;
`
const Image = styled.img`
  width: 15%;
  height: auto;
`
const BigImage = styled.img`
  width: 30%;
  height: auto;
`