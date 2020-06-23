import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Programme = () => {

  return (
    <ProgrammeContainer>
      <DayContainer>
        <DayHeader>Thursday 29/10</DayHeader> 
        <ProgrammePoint to={`/rexkids`}>
          <PointTitle>15:00 REX at LAVA</PointTitle>
          <PointInfo>Gametrailer, Games and 3D/CG Animation (age 14-25)</PointInfo>
          <VenueLink >Lava</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/memories`}>
          <PointTitle>18:00 Memories</PointTitle>
          <PointInfo>Shortfilm block (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/stopmotions`}>
          <PointTitle>19:30 Stop Motion</PointTitle>
          <PointInfo>Shortfilm block (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/halloween`}>
          <PointTitle>21:00 Halloween</PointTitle>
          <PointInfo>Shortfilm block (15+)</PointInfo>
          <VenueLink>Zita 1</VenueLink>
        </ProgrammePoint>
      </DayContainer>
      <DayContainer>
        <DayHeader>Friday 30/10</DayHeader>
        <ProgrammePoint to={`/rexkids`}>
          <PointTitle >15:00 REX at LAVA</PointTitle>
          <PointInfo>Gametrailer, Games and 3D/CG Animation (age 14-25)</PointInfo>
          <VenueLink>Lava</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/rexkids`}>
          <PointTitle>17:00 REX at LAVA</PointTitle>
          <PointInfo>Meet director, Jenny Jokela (age 14-25)</PointInfo>
          <VenueLink href='https://kulturhusetstadsteatern.se/Bibliotek/Lava_Bibliotek_Verkstad/' target='blank'>Lava</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/realities`}>
          <PointTitle>17:00 Realities</PointTitle>
          <PointInfo>Shortfilm block (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/families`}>
          <PointTitle>19:00 Families</PointTitle>
          <PointInfo>Shortfilm block (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/dependencies`}>
          <PointTitle>20:30 Dependencies</PointTitle>
          <PointInfo>Shortfilm block (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
      </DayContainer>
      <DayContainer>
        <DayHeader>Saturday 31/10</DayHeader>
        <ProgrammePoint to={`/kids`}>
          <PointTitle>11:00 REX for Kids</PointTitle>
          <PointInfo>Shortfilm block (for all ages)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/rexkids`}>
          <PointTitle>11:30 REX for Kids</PointTitle>
          <PointInfo>Zoetrope Workshop (for all ages)</PointInfo>
          <VenueLink>Zita</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/sensibilities`}>
          <PointTitle>12:00 Sensibilities</PointTitle>
          <PointInfo>Shortfilm block (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/guests`}>
          <PointTitle>13:45 TAFF &amp; Tricky Women</PointTitle>
          <PointInfo>Shortfilm guest blocks (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/deadman`}>
          <PointTitle>14:30 A Man is Dead</PointTitle>
          <PointInfo>Feature Film (11+)</PointInfo>
          <VenueLink>Capitol</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/memories`}>
          <PointTitle>16:00 Memories</PointTitle>
          <PointInfo>Shortfilm guest blocks (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/realities`}>
          <PointTitle>17:30 Realities</PointTitle>
          <PointInfo>Shortfilm guest blocks and Q&amp;A (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/bunuel`}>
          <PointTitle>20:00 Buñuel in the Labyrinth of the Turtles</PointTitle>
          <PointInfo>Feature Film (15+)</PointInfo>
          <VenueLink>Zita 1</VenueLink>
        </ProgrammePoint>
      </DayContainer>
      <DayContainer>
        <DayHeader>Sunday 1/11</DayHeader>
        <ProgrammePoint to={`/kids`}>
          <PointTitle>11:00 REX for Kids</PointTitle>
          <PointInfo>Shortfilm block (for all ages)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/rexkids`}>
          <PointTitle>11:30 REX for Kids</PointTitle>
          <PointInfo>Stop Motion Workshop (for all ages)</PointInfo>
          <VenueLink>Zita</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/dependencies`}>
          <PointTitle>12:00 Dependencies</PointTitle>
          <PointInfo>Shortfilm Block and Q&amp;A (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/families`}>
          <PointTitle>15:15 Families</PointTitle>
          <PointInfo>Shortfilm block (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/sensibilities`}>
          <PointTitle>17:00 Sensibilities</PointTitle>
          <PointInfo>Shortfilm block and Q&and;A (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/stopmotions`}>
          <PointTitle>18:15 Stop Motion</PointTitle>
          <PointInfo>Shortfilm block (15+)</PointInfo>
          <VenueLink>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint to={`/awards`}>
          <PointTitle>20:00 REX Animation Student Award</PointTitle>
          <PointInfo>The award nominations and Award Ceremony</PointInfo>
          <VenueLink>Zita 1</VenueLink>
        </ProgrammePoint>
      </DayContainer>
    </ProgrammeContainer>
    
  )
}

const ProgrammeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;

   @media (min-width: 668px) {
    flex-direction: row;
  }
`

const DayContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 98%;

   @media (min-width: 668px) {
     width: 25%;
  }
`
const ProgrammePoint = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  text-decoration: none;
  margin: 0 2% 1% 2%;
  padding: 2%;

  @media (min-width: 668px) {
    margin: 2%;
    padding: 5%;
  }
 
`
const DayHeader = styled.h3`
  display: flex;
  justify-content: center;
`
const PointTitle = styled.h4`
  margin: 0;
`
const PointInfo = styled.p`
 
`
const VenueLink = styled.p`
  color: white;
  text-decoration: none;
  font-weight: bold;
`