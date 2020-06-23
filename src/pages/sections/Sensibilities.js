import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Sensibilities = () => {
  const [sensibilities, setSensibilities] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/sensibilities')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setSensibilities(data)
      })
  }, [])

  return (
    <SectionPage>
      <HeaderSection>
        <SectionHeader>Sensibilities</SectionHeader>
        <SectionPitch>5 short animated films that are free flowing and thought provoking, with a common sensibility and stunning visual style. Experience urban tales, climate angst, mothers with Alzheimer’s and groovy pink apes!</SectionPitch>
        <SectionSreenings>Saturday 12:00 Zita 2</SectionSreenings>
        <SectionSreenings>Saturday 16:00 Zita 2</SectionSreenings>
      </HeaderSection>
      {sensibilities.map(sensibility => (
        <SectionCard key={sensibility.title}>
          <Image src={sensibility.imageUrl} alt={sensibility.title} />
          <InfoSection>
            <SectionTitle>{sensibility.title}</SectionTitle>
            <SectionDirector>{sensibility.director}</SectionDirector>
            <SectionInfo>{sensibility.originalTitle}</SectionInfo>
            <SectionInfo>{sensibility.country} {sensibility.productionYear}, {sensibility.duration}min</SectionInfo>
            <SectionSynopsis>{sensibility.synopsis}</SectionSynopsis>
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