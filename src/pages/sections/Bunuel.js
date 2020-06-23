import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Bunuel = () => {
  const [bunuels, setBunuels] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/featurebunuel')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setBunuels(data)
      })
  }, [])

  return (
    <SectionPage>
      <HeaderSection>
        <SectionHeader>Buñuel in the Labyrinth of the Turtles</SectionHeader>
        <SectionPitch>Awardwinning animated feature, biography on Buñuel and his making of Land Wihthout Bread.</SectionPitch>
        <SectionSreenings>Saturday 14:30 Capitol</SectionSreenings>
      </HeaderSection>
      {bunuels.map(bunuel => (
        <SectionCard key={bunuel.title}>
          <Image src={bunuel.imageUrl} alt={bunuel.title} />
          <InfoSection>
            <SectionTitle>{bunuel.title}</SectionTitle>
            <SectionDirector>{bunuel.director}</SectionDirector>
            <SectionInfo>{bunuel.originalTitle}</SectionInfo>
            <SectionInfo>{bunuel.country} {bunuel.productionYear}, {bunuel.duration}min</SectionInfo>
            <SectionSynopsis>{bunuel.synopsis}</SectionSynopsis>
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