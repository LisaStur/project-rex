import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Realities = () => {
  const [realities, setRealities] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/realities')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setRealities(data)
      })
  }, [])

  return (
    <SectionPage>
      <HeaderSection>
        <SectionHeader>Realities</SectionHeader>
        <SectionPitch>Are you ready to face reality? Check out our selection of 6 animated documentary shorts on everything from crime and blurred lines between game and reality, to handling life without the ability to recognize anyone’s face.</SectionPitch>
        <SectionSreenings>Friday 17:00 Zita 2</SectionSreenings>
        <SectionSreenings>Saturday 17:30 Zita 2</SectionSreenings>
      </HeaderSection>
      {realities.map(reality => (
        <SectionCard key={reality.title}>
          <Image src={reality.imageUrl} alt={reality.title} />
          <InfoSection>
            <SectionTitle>{reality.title}</SectionTitle>
            <SectionDirector>{reality.director}</SectionDirector>
            <SectionInfo>{reality.originalTitle}</SectionInfo>
            <SectionInfo>{reality.country} {reality.productionYear}, {reality.duration}min</SectionInfo>
            <SectionSynopsis>{reality.synopsis}</SectionSynopsis>
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