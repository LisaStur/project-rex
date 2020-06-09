import React from 'react'
import styled from 'styled-components'
import gifR from '../assets/gifR.gif'

export const RexR = () => {
  return (
    <Image src={gifR} alt='animated R' />
  )
}

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 5%;
`