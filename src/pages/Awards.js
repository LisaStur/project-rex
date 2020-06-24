import React from 'react'
import styled from 'styled-components'
import aud20 from '../assets/aud20.gif'
import stud20 from '../assets/stud20.gif'
import aud19 from '../assets/aud19.gif'
import CatDaysAwWin19 from '../assets/CatDaysAwWin19.jpg' 
import stud19 from '../assets/stud19.gif'
import penumbraStudWin19 from '../assets/penumbraStudWin19.jpg' 
import aud18 from '../assets/aud18.gif'
import UglyAwWin18 from '../assets/UglyAwWin18.jpg' 
import stud18 from '../assets/stud18.gif'
import KatthatStudWin18 from '../assets/KatthatStudWin18.png' 


export const Awards = () => {

  return (
    <AwardContainer>
      <Year>
        <AwardCard>
          <WinnerLogo src={aud20} alt='Rex Animation Audience Award Logo 2020' />
          <WinnerInfo>REX Animation Audience Award 2020</WinnerInfo>
          <AwardInfo>At the end of each film block, we want you to vote for your favorite film. You do this with your phone – no app download required. The winner of REX Animation Audience Award 2020 is announced Sunday night, November 1 and online after the festival.</AwardInfo>
        </AwardCard>
        <AwardCard>
          <WinnerLogo src={stud20} alt='Rex Animation Student Award Logo 2020' />
          <WinnerInfo>REX Animation Student Award 2020</WinnerInfo>
          <AwardInfo>
            For the 5th year in a row, REX presents the award for best animated Swedish student production. The nominations are screened Sunday, November 1st. The winner is announced by the jury at the end of the screening. There will be a prize ceremony and a glass of bubbly for all!
          </AwardInfo>
        </AwardCard>
      </Year>
      <Year>
        <AwardCard>
          <WinnerLogo src={aud19} alt='Rex Animation Audience Award Logo 2019' />
          <WinnerImage src={CatDaysAwWin19} alt='Cat Days' />
          <WinnerInfo>Cat days by Jon Frickey</WinnerInfo>
        </AwardCard>
        <AwardCard>
          <WinnerLogo src={stud19} alt='Rex Animation Student Award Logo 2019' />
          <WinnerImage src={penumbraStudWin19} alt='Penumbra' />
          <WinnerInfo>Penumbra by Wilma Harju</WinnerInfo>
        </AwardCard>
      </Year>
      <Year>
        <AwardCard>
          <WinnerLogo src={aud18} alt='Rex Animation Audience Award Logo 2018' />
          <WinnerImage src={UglyAwWin18} alt='Cat Days' />
          <WinnerInfo>Ugly by Nikita Diakur</WinnerInfo>
        </AwardCard>
        <AwardCard>
          <WinnerLogo src={stud18} alt='Rex Animation Student Award Logo 2018' />
          <WinnerImage src={KatthatStudWin18} alt='Katthat' />
          <WinnerInfo>Katthat by Ola Angelman</WinnerInfo>
        </AwardCard>
      </Year>
    </AwardContainer>
  )
}

const AwardContainer = styled.section`
  display: flex;
  flex-direction: column;
  `
const AwardCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 2%;

  @media (min-width: 668px) {
    width: 48%;
  }
`
const Year = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    display: flex;
    flex-direction: row;
  }
`
const WinnerLogo = styled.img`
  width: 98%;
  height: auto;
`
const WinnerImage = styled.img`
  width: 98%;
  height: auto;
`
const AwardInfo = styled.div`
  background-color: black;
  color: white;
  font-size: 18px;
  width: 88%;
  padding: 5%;
`
const WinnerInfo = styled.h1`
  background-color: black;
  width: 88%;
  margin: 0;
  color: white;
  font-size: 20px;
  height: auto;
  text-align: center;
  padding: 3% 5% 2% 5%;
`