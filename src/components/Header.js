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
    <div>
      <Btn onClick={() => setOpen(prev => !prev) }><Burger /></Btn>
      {open && <Navbar />}
      <NavbarBigScreen />
      
    </div> 
  )
} 

const Btn = styled.button`
  background-color: white;
  border: none;

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
  padding-right: 16px;

  &:hover {
    color: red;
  }

  &:active {
    color: grey;
  }
`
