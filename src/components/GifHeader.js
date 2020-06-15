import React from 'react'
import styled from 'styled-components'
import gifR2 from '../assets/gifR2.gif'
import gifE2 from '../assets/gifE2.gif'
import gifX2 from '../assets/gifX2.gif'

export const GifHeader = () => {
  return (
    <GifContainer>
      <Image src={gifR2} alt='animated R' />
      <BigImage src={gifE2} alt='animated E' />
      <Image src={gifX2} alt='animated X' />
    </GifContainer>
    
  )
}

const GifContainer = styled.section`
display: flex;
flex-direction: row;
`
const Image = styled.img`
  width: 25%;
  height: auto;
`
const BigImage = styled.img`
  width: 50%;
  height: auto;
`