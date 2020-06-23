import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Memories = () => {
  const [memories, setMemories] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/memories')
    .then((res) => {
      return res.json()
    })
    .then(data => {
      setMemories(data)
    })
  },[])

  return (
    <SectionPage>
      <SectionHeader>Memories</SectionHeader>
      <SectionPitch>Grumpy cats sick of life, stuffy metropolitans, film noir pastiche, memories of love and childhood. People being alone together – 5 short animated films that you won’t forget anytime soon.</SectionPitch>
      <SectionSreenings>Thursday 18:00 Zita 2</SectionSreenings>
      <SectionSreenings>Saturday 16:00 Zita 2</SectionSreenings>
      {memories.map(memory => (
        <SectionCard key={memory.title}>
          <Image src={memory.imageUrl} alt={memory.title}/>
          <InfoSection>
            <SectionTitle>{memory.title}</SectionTitle>
            <SectionDirector>{memory.director}</SectionDirector>
            <SectionInfo>{memory.originalTitle}</SectionInfo>
            <SectionInfo>{memory.country} {memory.productionYear}, {memory.duration}min</SectionInfo>
            <SectionSynopsis>{memory.synopsis}</SectionSynopsis>
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
  padding-left: 2%;
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
  margin: 2%;

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
  flex-direction: column;
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