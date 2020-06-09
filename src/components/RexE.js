import React from 'react'
import styled from 'styled-components'
import gifE from '../assets/gifE.gif'

export const RexE = () => { 
  return (

    <Image src= {gifE} alt='animated E'/>
)
}

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 5%;
`

