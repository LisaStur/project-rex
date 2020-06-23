import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Families = () => {
  const [families, setFamilies] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/families')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setFamilies(data)
      })
  }, [])

  return (
    <SectionPage>
      <HeaderSection>
        <SectionHeader>Families</SectionHeader>
        <SectionPitch>Explore childhood with a selection of 6 very different short movies. A dad walks around the globe and a mother and son forget to cut the cord. Trans themed coming of age stories, criminal parents and the things we don’t talk about. The best and the worst, the light and the heavy, Families contains the lot.</SectionPitch>
        <SectionSreenings>Friday 19:00 Zita 2</SectionSreenings>
        <SectionSreenings>Sunday 15:15 Zita 2</SectionSreenings>
      </HeaderSection>
      {families.map(family => (
        <SectionCard key={family.title}>
          <Image src={family.imageUrl} alt={family.title} />
          <InfoSection>
            <SectionTitle>{family.title}</SectionTitle>
            <SectionDirector>{family.director}</SectionDirector>
            <SectionInfo>{family.originalTitle}</SectionInfo>
            <SectionInfo>{family.country} {family.productionYear}, {family.duration}min</SectionInfo>
            <SectionSynopsis>{family.synopsis}</SectionSynopsis>
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