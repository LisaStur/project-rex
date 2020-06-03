import React from 'react'
import { Link }from 'react-router-dom'
import styled from 'styled-components'

export const Header = () => {

  return (
    <div>
      <Navbar>
        <StyledLink to={'/'}>REX Animation</StyledLink>
        <StyledLink to={'/movies'}>Movies</StyledLink>
        <StyledLink to={'/programme'}>Programme</StyledLink>
        <StyledLink to={'/venues'}>Venues</StyledLink>
        <StyledLink to={'/skolbio'}>Skolbio</StyledLink>
        <StyledLink to={'/awards'}>Awards</StyledLink>
        <StyledLink to={'/aboutpage'}>About Rex</StyledLink>
      </Navbar>
    </div>
  )
}

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  @media (min-width: 668px) {
    flex-flow: row wrap;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding-right: 16px;

  &:hover {
    color: red;
  }
`
