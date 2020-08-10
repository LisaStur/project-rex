import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BackLink } from 'components/BackLink'

export const Guests = () => {
  const [guests, setGuests] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/guest')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setGuests(data)
      })
  }, [])

  return (
    <SectionPage>
      <HeaderSection>
        <BackLink to='/programme' >
          ⬅ Back to Programme
        </BackLink>
        <SectionHeader>Guest selection: TAFF &amp; Tricky Women</SectionHeader>
        <SectionPitch>
          TAFF – Finnish Animation Today, presented by Kimmo Sillanmikko, Festival Director of Turku Animated Film Festival. Tricky Women, Austrian animation festival with movies by women and trans/inter only.</SectionPitch>
        <SectionSreenings>Saturday 13:45 Zita 2</SectionSreenings>
      </HeaderSection>
      {guests.map(guest => (
        <SectionCard key={guest.title}>
          <Image src={guest.imageUrl} alt={guest.title} />
          <InfoSection>
            <SectionTitle>{guest.title}</SectionTitle>
            <SectionDirector>{guest.director}</SectionDirector>
            <SectionInfo>{guest.originalTitle}</SectionInfo>
            <SectionInfo>{guest.country} {guest.productionYear}, {guest.duration}min</SectionInfo>
            <SectionSynopsis>{guest.synopsis}</SectionSynopsis>
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