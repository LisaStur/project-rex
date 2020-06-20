import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Programme = () => {

  return (
      <ProgrammeContainer>
        <DayContainer>
        <h3>Thursday</h3>
        <Link to={`/programmeinfo/:section`}>Link to Sections</Link>
      </DayContainer>
      <DayContainer>
        <h3>Friday</h3>
      </DayContainer>
      <DayContainer>
        <h3>Saturday</h3>
      </DayContainer>
      <DayContainer>
        <h3>Sunday</h3>
      </DayContainer>
    </ProgrammeContainer>
    
  )
}

const ProgrammeContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const DayContainer = styled.section`
  display: flex;
  flex-direction: column;
`