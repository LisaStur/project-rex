import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Dependencies = () => {
  const [dependencies, setDependencies] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/dependencies')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setDependencies(data)
      })
  }, [])

  return (
    <SectionPage>
      <HeaderSection>
        <SectionHeader>Dependencies</SectionHeader>
        <SectionPitch>It depends… 6 short films about relationships between couples, individuals and groups, and still and moving images. </SectionPitch>
        <SectionSreenings>Friday 20:30 Zita 2</SectionSreenings>
        <SectionSreenings>Sunday 12:00 Zita 2</SectionSreenings>
      </HeaderSection>
      {dependencies.map(dependency => (
        <SectionCard key={dependency.title}>
          <Image src={dependency.imageUrl} alt={dependency.title} />
          <InfoSection>
            <SectionTitle>{dependency.title}</SectionTitle>
            <SectionDirector>{dependency.director}</SectionDirector>
            <SectionInfo>{dependency.originalTitle}</SectionInfo>
            <SectionInfo>{dependency.country} {dependency.productionYear}, {dependency.duration}min</SectionInfo>
            <SectionSynopsis>{dependency.synopsis}</SectionSynopsis>
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