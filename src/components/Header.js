import React from 'react'
import { Link }from 'react-router-dom'

export const Header = () => {
  return (
    <ul>
      <li><Link to={'/'}>REX Animation</Link></li>
      <li><Link to={'/movies'}>Movies</Link></li>
      <li><Link to={'/programme'}>Programme</Link></li>
      <li><Link to={'/venues'}>Venues</Link></li>
      <li><Link to={'/skolbio'}>Skolbio</Link></li>
      <li><Link to={'/awards'}>Awards</Link></li>
      <li><Link to={'/aboutpage'}>About Rex</Link></li>
    </ul>
  )
}