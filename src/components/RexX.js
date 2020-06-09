import React from 'react'
import styled from 'styled-components'
import gifX from '../assets/gifX.gif'

export const RexX = () => {
  return (

    <Image src={gifX} alt='animated X' />
  )
}

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 5%;
`