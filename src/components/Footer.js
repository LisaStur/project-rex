import React from  'react'
import styled from 'styled-components'
import eunic from '../assets/eunic.gif' 
import regsthlm from '../assets/regsthlm.gif' 
import sfi from '../assets/sfi.gif' 
import eunicsthlm from '../assets/eunicsthlm.png' 
import portugal from '../assets/portugal.gif' 
import finland from '../assets/finland.png' 
import germany from '../assets/germany.png' 
import france from '../assets/france.png' 
import romania from '../assets/romania.png' 
import poland from '../assets/poland.png' 
import switzerland from '../assets/switzerland.png'
import slovakia from '../assets/slovakia.png'
import spain from '../assets/spain.png'
import ukraine from '../assets/ukraine.png'
import austria from '../assets/austria.png'
import czech from '../assets/czech.jpg'
import greece from '../assets/greece.png'
import lithuania from '../assets/lithuania.jpg'
import wallonia from '../assets/wallonia.gif' 


export const Footer = () => {

  return (
    <SponsorContainer>
      <Image src={eunic} alt='Eunic logo' />
      <Image src={regsthlm} alt='Region Stockholm logo' />
      <Image src={sfi} alt='Swedish Film Institute logo' />
      <Image src={eunicsthlm} alt='Eunic Stockholm logo' />
      <Image src={portugal} alt='Camoes Portugal logo' />
      <Image src={finland} alt='Finland Institute logo' />
      <Image src={germany} alt='Goeteh Germany logo' />
      <Image src={france} alt='French Institute logo' />
      <Image src={romania} alt='Romanian Institute logo' />
      <Image src={poland} alt='Polish Institute logo' />
      <Image src={switzerland} alt='Swiss Institute logo' />
      <Image src={slovakia} alt='Slovak Institute logo' />
      <Image src={spain} alt='Cervantes Spain logo' />
      <Image src={ukraine} alt='Ukraine Institute logo' />
      <Image src={austria} alt='Austrian Embassy logo' />
      <Image src={czech} alt='Czech Center logo' />
      <Image src={greece} alt= 'Greek Embassy logo' />
      <Image src={lithuania} alt='Lithuanian Institute logo' />
      <Image src={wallonia} alt='Wallonia Brussels logo' />
    </SponsorContainer>
   
  )
  
}

const SponsorContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  background-color: black;
  justify-content: center;

`

const Image = styled.img`
  width: auto;
  height: 20px;
  padding: 2%;
`