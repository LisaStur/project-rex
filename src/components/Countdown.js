import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2020-10-29') - +new Date();
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, i) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span key={i}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })

  return (
    <CountdownContainer>
      {timerComponents.length ? timerComponents : <span>Welcome to REX!</span>}
    </CountdownContainer>
  )
}

const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: white;
  background-color: black;
  font-size: 18px;
  padding-top: 2%;
  padding-bottom: 2%;
  
  @media (min-width: 668px) {
     font-size: 30px;
  }
    @media (min-width: 1024px) {
     font-size: 36px;
  }
`