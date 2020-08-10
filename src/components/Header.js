import React, { useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Burger } from './Burger'
import { GifHeader } from './GifHeader'
import { Countdown } from './Countdown'

const Navbar = () => {
  return (
    <NavContainer>
      <StyledLink to={'/home'}>REX Animation</StyledLink>
      <StyledLink to={'/movies'}>Movies</StyledLink>
      <StyledLink to={'/programme'}>Programme</StyledLink>
      <StyledLink to={'/rexkids'}>REX Kids</StyledLink>
      <StyledLink to={'/awards'}>Awards</StyledLink>
    </NavContainer>
  )
}

const NavbarBigScreen = () => {

  return (
    <NavContainerBigScreen>
      <StyledLink to={'/home' }>REX Animation</StyledLink>
      <StyledLink to={'/movies'}>Movies</StyledLink>
      <StyledLink to={'/programme'}>Programme</StyledLink>
      <StyledLink to={'/rexkids'}>REX Kids</StyledLink>
      <StyledLink to={'/awards'}>Awards</StyledLink>
    </NavContainerBigScreen>
  )
}

export const Header = () => {
  const [open, setOpen] = useState(false)

  return ( 
    <HeaderContainer>
      <GifHeader />
      <Countdown />
          <Btn onClick={() => setOpen(prev => !prev)}><Burger /></Btn>
          {open && <Navbar />}
          <NavbarBigScreen />
      <Route path='/movieinfo/:title'>
      </Route>
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
    height: 0;
  }
`
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 3%;
  
  @media (min-width: 668px) {
    visibility: hidden;
    height: 0;
  }
`
const NavContainerBigScreen = styled.div `
  display: flex;
  visibility: hidden;
  height: 0;

  @media (min-width: 668px) {
    width: 100%;
    visibility: visible;
    height: 60px;
    justify-content: space-around;
    align-items: flex-end;
  }
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  
  &:hover {
    font-weight: bold;
    transition: 0.3s;
  }
   &.active {
    font-weight: bold;
  }

  @media (min-width: 668px) {
    font-size: 20px;
    padding: 5px;

    &.active {
      font-size: 24px;
    }
  }

  @media (min-width: 1024px) {
    font-size: 30px;
    padding: 5px;

    &.active {
      font-size: 34px;
    }
  }
`
