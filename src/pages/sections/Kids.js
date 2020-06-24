import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Kids = () => {
  const [kids, setKids] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/kids')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setKids(data)
      })
  }, [])

  return (
    <SectionPage>
      <HeaderSection>
        <SectionHeader>REX for Kids</SectionHeader>
        <SectionPitch>To our youngest audience (age 4 and up) we offer six films showcasing a variety of techniques and stories. In this block, toys come alive and sporty animals are up for competition. After loss and winter, there will always be a spring. Join a bird with an urge to dance or team up with a dachshund whose limbs are disagreeing over the way forward.</SectionPitch>
        <SectionSreenings>Saturday 11:00 Zita 2</SectionSreenings>
        <SectionSreenings>Sunday 11:00 Zita 2</SectionSreenings>
      </HeaderSection>
      {kids.map(kid => (
        <SectionCard key={kid.title}>
          <Image src={kid.imageUrl} alt={kid.title} />
          <InfoSection>
            <SectionTitle>{kid.title}</SectionTitle>
            <SectionDirector>{kid.director}</SectionDirector>
            <SectionInfo>{kid.originalTitle}</SectionInfo>
            <SectionInfo>{kid.country} {kid.productionYear}, {kid.duration}min</SectionInfo>
            <SectionSynopsis>{kid.synopsis}</SectionSynopsis>
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