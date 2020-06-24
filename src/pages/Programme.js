import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Programme = () => {

  return (
    <ProgrammeContainer>
      <DayContainer>
        <DayHeader>Thursday 29/10</DayHeader> 
        <Workshop>
          <SectionLink to={`/rexkids`}>
          <PointTitle>15:00 REX at LAVA</PointTitle>
          <PointInfo>Workshop Gametrailer, Games and 3D/CG Animation (age 14-25)</PointInfo>
          </SectionLink>
          <VenueLink href='https://kulturhusetstadsteatern.se/Bibliotek/Lava_Bibliotek_Verkstad/Evenemang/2017/Lava-3-animation/' target='blank'>Lava</VenueLink>
        </Workshop>
        <ProgrammePoint> 
          <SectionLink to={`/memories`}>
            <PointTitle>18:00 Memories</PointTitle>
            <PointInfo>Shortfilm block (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint >
          <SectionLink to={`/stopmotions`}>
            <PointTitle>19:30 Stop Motion</PointTitle>
            <PointInfo>Shortfilm block (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint>
          <SectionLink to={`/halloween`}>
            <PointTitle>21:00 Halloween</PointTitle>
            <PointInfo>Shortfilm block (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 1</VenueLink>
        </ProgrammePoint>
      </DayContainer>
      <DayContainer>
        <DayHeader>Friday 30/10</DayHeader>
        <Workshop >
          <SectionLink to={`/rexkids`}>
            <PointTitle >15:00 REX at LAVA</PointTitle>
            <PointInfo>Workshop Gametrailer, Games and 3D/CG Animation (age 14-25)</PointInfo>
          </SectionLink>
          <VenueLink href='https://kulturhusetstadsteatern.se/Bibliotek/Lava_Bibliotek_Verkstad/Evenemang/2017/Lava-3-animation/' target='blank'>Lava</VenueLink>
        </Workshop>
        <Workshop>
          <SectionLink to={`/rexkids`}>
            <PointTitle>17:00 REX at LAVA</PointTitle>
            <PointInfo>Meet director, Jenny Jokela (age 14-25)</PointInfo>
          </SectionLink>
          <VenueLink href='https://kulturhusetstadsteatern.se/Bibliotek/Lava_Bibliotek_Verkstad/' target='blank'>Lava</VenueLink>
        </Workshop>
        <ProgrammePoint>
          <SectionLink to={`/realities`}>
            <PointTitle>17:00 Realities</PointTitle>
            <PointInfo>Shortfilm block (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint>
          <SectionLink to={`/families`}>
            <PointTitle>19:00 Families</PointTitle>
            <PointInfo>Shortfilm block (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint>
          <SectionLink to={`/dependencies`}>
            <PointTitle>20:30 Dependencies</PointTitle>
            <PointInfo>Shortfilm block (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
      </DayContainer>
      <DayContainer>
        <DayHeader>Saturday 31/10</DayHeader>
        <ProgrammePoint>
          <SectionLink to={`/kids`}>
            <PointTitle>11:00 REX for Kids</PointTitle>
            <PointInfo>Shortfilm block (for all ages)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <Workshop>
          <SectionLink to={`/rexkids`}>
            <PointTitle>11:30 REX for Kids</PointTitle>
            <PointInfo>Workshop Zoetrope (for all ages)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita</VenueLink>
        </Workshop>
        <ProgrammePoint>
          <SectionLink to={`/sensibilities`}>
            <PointTitle>12:00 Sensibilities</PointTitle>
            <PointInfo>Shortfilm block (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint >
          <SectionLink to={`/guests`}>
            <PointTitle>13:45 TAFF &amp; Tricky Women</PointTitle>
            <PointInfo>Shortfilm guest blocks (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint>
          <SectionLink to={`/deadman`}>
            <PointTitle>14:30 A Man is Dead</PointTitle>
            <PointInfo>Feature Film (11+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://www.capitolbio.se/' target='blank'>Capitol</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint>
          <SectionLink to={`/memories`}>
            <PointTitle>16:00 Memories</PointTitle>
            <PointInfo>Shortfilm guest blocks (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint>
          <SectionLink to={`/realities`}>
            <PointTitle>17:30 Realities</PointTitle>
            <PointInfo>Shortfilm guest blocks and Q&amp;A (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint>
          <SectionLink to={`/bunuel`}>
            <PointTitle>20:00 Buñuel in the Labyrinth of the Turtles</PointTitle>
            <PointInfo>Feature Film (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 1</VenueLink>
        </ProgrammePoint>
      </DayContainer>
      <DayContainer>
        <DayHeader>Sunday 1/11</DayHeader>
        <ProgrammePoint >
          <SectionLink to={`/kids`}>
            <PointTitle>11:00 REX for Kids</PointTitle>
            <PointInfo>Shortfilm block (for all ages)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <Workshop >
          <SectionLink to={`/rexkids`}>
            <PointTitle>11:30 REX for Kids</PointTitle>
            <PointInfo>Workshop Stop Motion (for all ages)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita </VenueLink>
        </Workshop>
        <ProgrammePoint>
          <SectionLink to={`/dependencies`}>
            <PointTitle>12:00 Dependencies</PointTitle>
            <PointInfo>Shortfilm Block and Q&amp;A (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint >
          <SectionLink to={`/families`}>
            <PointTitle>15:15 Families</PointTitle>
            <PointInfo>Shortfilm block (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint>
          <SectionLink to={`/sensibilities`}>
            <PointTitle>17:00 Sensibilities</PointTitle>
            <PointInfo>Shortfilm block and Q&and;A (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePoint>
          <SectionLink to={`/stopmotions`}>
            <PointTitle>18:15 Stop Motion</PointTitle>
            <PointInfo>Shortfilm block (15+)</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 2</VenueLink>
        </ProgrammePoint>
        <ProgrammePointAward >
          <SectionLink to={`/awards`}>
            <PointTitle>20:00 REX Animation Student Award</PointTitle>
            <PointInfo>The award nominations and Award Ceremony</PointInfo>
          </SectionLink>
          <VenueLink href='https://zita.se/' target='blank'>Zita 1</VenueLink>
        </ProgrammePointAward>
      </DayContainer>
    </ProgrammeContainer>
  )
}

const ProgrammeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;  
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
const ProgrammePoint = styled.section`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  margin: 0 2% 1% 2%;
  padding: 2%;

  @media (min-width: 668px) {
    margin: 2%;
    padding: 5%;
  }
`
const ProgrammePointAward = styled.section`
  display: flex;
  flex-direction: column;
  background-color: black;
  border: 3px solid #d4af37;
  color: white;
  margin: 0 2% 1% 2%;
  padding: 2%;

  @media (min-width: 668px) {
    margin: 2%;
    padding: 5%;
  }
`


const Workshop = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #4b5356;
  color: white;
  margin: 0 2% 1% 2%;
  padding: 2%;

  @media (min-width: 668px) {
    margin: 2%;
    padding: 5%;
  }
`
const SectionLink = styled(Link)`
  color: white;
  text-decoration: none;
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
const VenueLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
`