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

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    )
  })

  return (
    <CountdownStyling>
      {timerComponents.length ? timerComponents : <span>Welcome to REX!</span>}
    </CountdownStyling>
  )
}

const CountdownStyling = styled.div`
  color: white;
  font-size: 18px;
  `