import React from 'react'
import styled from 'styled-components'
import gifR from 'assets/gifR.gif'
import gifE2 from 'assets/gifE2.gif'
import gifX from 'assets/gifX.gif'
//import { RexX } from 'components/RexX'

export const StartPage = () => {

  return (
    <StartContainer>
      <HeaderContainer>
        <WelcomeHeader>REX is back for its 6th year! </WelcomeHeader>
        <WelcomeDates>Stockholm 29th of Octber - 1st of November 2020</WelcomeDates>
      </HeaderContainer>
      <WelcomeContainer>
        <WelcomeText>
          As usual we will continue to bring the most exciting European animation to Stockholm. Dates for the main festival are October 29-November 1 and our main venue will again be beautiful Zita Folkets Bio! The festival presents animated shorts and feature films from Europe and also includes a rich program of workshops, talks, and the Rex Animation Student Award, an annual award for Swedish student productions. And yes, we also have a section dedicated to kids!
          <br /><br />REX is currently working hard on the programme for 2020. As usual we will bring you the very best of new European animation! The programme for this years festival will be released early October.
          <br /><br />REX Animation Audience Award 2020 - At the end of each film block, we want you to vote for your favorite film. You do this with your phone – no app download required. The winner of REX Animation Audience Award 2020 is announced Sunday night, November 1 and online after the festival.
          <br /><br /> For the 5th year in a row, REX presents the award for best animated Swedish student production. The nominations are screened Sunday, November 1st. The winner is announced by the jury at the end of the screening. There will be a prize ceremony and a glass of bubbly for all!
        </WelcomeText>
        <RexGifs>
          <Image src={gifR} alt='Animated R' />
          <Image src={gifE2} alt='Animated E' />
          <Image src={gifX} alt='Animated X' />
        </RexGifs>
      </WelcomeContainer>
    </StartContainer>
  )
}

const StartContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5%;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;  
`
const WelcomeHeader = styled.h1`
  font-size: 36px;
  color: white;
  margin: 0;    
`
const WelcomeDates = styled.h2`
  font-size:20px;
  color: white;
`
const WelcomeContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    flex-direction: row;
`
const WelcomeText = styled.p`
  display: flex;
  font-size: 20px;
  color: white;
  padding-right: 10%; 

  @media (min-width: 668px) {
    flex-direction: row;
`
const RexGifs = styled.section`
  display: flex;
  flex-direction: column;  
  visibility: hidden;
  

  @media (min-width: 668px) {
    display: flex;
    justify-content: space-around;
    visibility: visible;
    background-color: black;
    height: auto;

`
const Image = styled.img`
  width: 0;
  height: 0;

  @media (min-width: 668px) {
    width: 100%;
    height: auto;
`