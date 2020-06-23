import React from 'react'
import styled from 'styled-components'
import gifE2 from '../assets/gifE2.gif'

export const RexE = () => { 
  return (

    <Image src= {gifE2} alt='animated E'/>
)
}

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 5%;
`

