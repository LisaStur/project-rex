import React from 'react'
import styled from 'styled-components'

export const Burger = () => {

  return (
    <>
    <Bar />
    <Bar />
    <Bar />
    </>
)
}


const Bar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  margin-right: 16px;
  border-radius: 16px;
  
  `