import React from 'react'
import styled from 'styled-components'
import gifR3 from 'assets/gifR3.gif'
import gifE3 from 'assets/gifE3.gif'
import gifX3 from 'assets/gifX3.gif'

export const RexKids = () => {

  return (
    <KidsInfoContainer>
      <TextContainer>
        <KidsHeader>REX Kids and School Events</KidsHeader>
        <KidsInfo>
          During autumn 2020 we offer film screenings and animation workshops to junior highschool and highschool students in Stockholm. The workshops, led by students at Animationsakademien, are taking place at the youth library Lava. REX is also planning to host ”school cinema” at Klarabiografen and Zita Folkets Bio, screening the very best of European animation.<br /><br />
        Information on films and tickets will be released in May. If you are a teacher interested in a school screening or workshop, please get in touch on info@rexanimation.se. The main festival, offering an extensive film programme for families and adults, can be visited at Zita Folkets Bio during the autumn break 29.10 – 1.11.
    </KidsInfo>
      </TextContainer>
    <RexGifs>
        <Image src={gifR3} />
        <Image src={gifE3} />
        <Image src={gifX3} />
    </RexGifs>
  </KidsInfoContainer>
  )  
}

const KidsInfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 5%;
`
const TextContainer = styled.div`
  display:flex;
  flex-direction: column;
`
const KidsHeader = styled.h1`
  color: white;
  font-size: 36px;
`
const KidsInfo = styled.p`
  color: white;  
  font-size: 20px;
  padding-right: 5%;
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