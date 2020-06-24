import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const StopMotions = () => {
  const [stopMotions, setStopMotions] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/stopmotion')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setStopMotions(data)
      })
  }, [])

  return (
    <SectionPage>
      <HeaderSection>
        <SectionHeader>Stop Motion</SectionHeader>
        <SectionPitch>REX highlights the beauty and variety of stop motion with 6 short films. From dark comedy to experimental, from the conditions for people in a totalitarian state to beach life dilemmas. Realistic stop motion, dreamy stop motion, the common theme is a celebration of all types of stories that can be told with this animation technique.</SectionPitch>
        <SectionSreenings>Thursday 19:30 Zita 2</SectionSreenings>
        <SectionSreenings>Sunday 18:15 Zita 2</SectionSreenings>
      </HeaderSection>
      {stopMotions.map(stopMotion => (
        <SectionCard key={stopMotion.title}>
          <Image src={stopMotion.imageUrl} alt={stopMotion.title} />
          <InfoSection>
            <SectionTitle>{stopMotion.title}</SectionTitle>
            <SectionDirector>{stopMotion.director}</SectionDirector>
            <SectionInfo>{stopMotion.originalTitle}</SectionInfo>
            <SectionInfo>{stopMotion.country} {stopMotion.productionYear}, {stopMotion.duration}min</SectionInfo>
            <SectionSynopsis>{stopMotion.synopsis}</SectionSynopsis>
          </InfoSection>
        </SectionCard>
      ))}
    </SectionPage>
  )
}

const SectionPage = styled.section`
  display: flex;
  flex-direction: column;
`
const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
`
const SectionHeader = styled.h1`
  color: white;
  font-size: 32px;
  padding-left: 2%;
  padding-top: 2%;
  margin: 0;
`
const SectionPitch = styled.p`
  color: white;
  font-size: 20px;
  padding: 0 2% 0 2%;
`
const SectionSreenings = styled.p`
  color: white;
  font-size: 20px;
  padding-left: 2%;
  margin: 0;
`
const SectionCard = styled.section`
  display: flex;
  flex-direction: column;
  background-color: black;
  margin: 0 2% 2% 2%;

  @media (min-width: 668px) {
    flex-direction: row;
  }
`
const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 668px) {
    width: 50%;
    height: auto;
  }
`
const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 2%;
`
const SectionTitle = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;

  @media (min-width: 668px) {
    padding-left: 2%;
    padding-top: 0;
  }
`
const SectionDirector = styled.h2`
  color: white;
  font-size: 20px;
  margin: 0;

  @media (min-width: 668px) {
    padding-left: 2%;
    padding-top: 0;
  }
`
const SectionInfo = styled.h2`
  color: white;
  font-size: 18px;
  margin: 0;

  @media (min-width: 668px) {
    padding-left: 2%;
    padding-top: 0;
  }
`
const SectionSynopsis = styled.p`
  color: white;
  font-size: 16px;
  padding-top: 2%;
  margin: 0;

   @media (min-width: 668px) {
    padding-left: 2%;
  }
`