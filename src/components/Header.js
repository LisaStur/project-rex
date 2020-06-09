import React, { useState } from 'react'
import { Link }from 'react-router-dom'
import styled from 'styled-components'
import { Burger } from './Burger'

const Navbar = () => {
  return (
    <NavContainer>
      <StyledLink to={'/'}>REX Animation</StyledLink>
      <StyledLink to={'/movies'}>Movies</StyledLink>
      <StyledLink to={'/programme'}>Programme</StyledLink>
      <StyledLink to={'/venues'}>Venues</StyledLink>
      <StyledLink to={'/skolbio'}>Skolbio</StyledLink>
      <StyledLink to={'/awards'}>Awards</StyledLink>
      <StyledLink to={'/aboutpage'}>About Rex</StyledLink>
    </NavContainer>
  )
}

const NavbarBigScreen = () => {

  return (
    <NavContainerBigScreen>
      <StyledLink to={'/'}>REX Animation</StyledLink>
      <StyledLink to={'/movies'}>Movies</StyledLink>
      <StyledLink to={'/programme'}>Programme</StyledLink>
      <StyledLink to={'/venues'}>Venues</StyledLink>
      <StyledLink to={'/skolbio'}>Skolbio</StyledLink>
      <StyledLink to={'/awards'}>Awards</StyledLink>
      <StyledLink to={'/aboutpage'}>About Rex</StyledLink>
    </NavContainerBigScreen>
  )

}

export const Header = () => {
  const [open, setOpen] = useState(false)

  return ( 
    <HeaderContainer>
      <Btn onClick={() => setOpen(prev => !prev) }><Burger /></Btn>
      {open && <Navbar />}
      <NavbarBigScreen />
    </HeaderContainer> 
  )
} 

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 668px) {
    align-items: center;
  }
`

const Btn = styled.button`
  background-color: transparent;
  border: none;
  padding-top: 3%;

  &:focus {
    outline: none;
  }

  @media (min-width: 668px) {
    visibility: hidden;
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 3%;
  
  @media (min-width: 668px) {
    visibility: hidden;
  }
`

const NavContainerBigScreen = styled.div `
  visibility: hidden;

  @media (min-width: 668px) {
    visibility: visible;
  }

`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  fonst-size: 12px;
  

  &:hover {
    color: black;
  }

 @media (min-width: 668px) {
  font-size: 18px;
  padding-right: 16px;
  }


`
