import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Programme = () => {

  return (
    <ProgrammeContainer>
      <DayContainer>
        <h3>Thursday</h3>
        <SectionLink to={`/programmeinfo/kids`}>
          Link to Sections
        </SectionLink>
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

const SectionLink = styled(Link)`
  display: flex;
  text-decoration: none;
  height: 50px;
  background-color: black;
  color: white;
  padding: 10px;
`