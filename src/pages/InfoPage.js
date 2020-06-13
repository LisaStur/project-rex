import React from 'react'
import styled from 'styled-components'
import { RexE } from 'components/RexE'
import { RexR } from 'components/RexR'
import { RexX } from 'components/RexX'

export const InfoPage = () => {

  return (
    <StartContainer>
      <RexR />
      <RexE />
      <RexX />
    </StartContainer>
  )
}

const StartContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5%;
`