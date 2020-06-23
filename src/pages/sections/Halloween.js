import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Halloween = () => {
  const [halloweens, setHalloweens] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/halloween')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setHalloweens(data)
      })
  }, [])

  return (
    <SectionPage>
      <HeaderSection>
        <SectionHeader>Halloween Night</SectionHeader>
        <SectionPitch>A block of spooky shorts so good it’s scary! Tales of comedy horror, warped realities and creepy creatures that play tricks on our minds. A mix of stop motion, CG and cel animation. REX is the go to place for the spooky and the weird so celebrate Halloween Night with us. Trick or treat candy bags for all, included in ticket!</SectionPitch>
        <SectionSreenings>Thursday 21:00 Zita 1</SectionSreenings>
      </HeaderSection>
      {halloweens.map(halloween => (
        <SectionCard key={halloween.title}>
          <Image src={halloween.imageUrl} alt={halloween.title} />
          <InfoSection>
            <SectionTitle>{halloween.title}</SectionTitle>
            <SectionDirector>{halloween.director}</SectionDirector>
            <SectionInfo>{halloween.originalTitle}</SectionInfo>
            <SectionInfo>{halloween.country} {halloween.productionYear}, {halloween.duration}min</SectionInfo>
            <SectionSynopsis>{halloween.synopsis}</SectionSynopsis>
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