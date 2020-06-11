import React, { useState, useEffect } from 'react'

export const Detail = (props) => {
  const [details, setDetails] = useState()

  useEffect(() => {
    fetch(props.url)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      setDetails(json)
    })
  }, [props])
  
  return (
    <div>
      <h1>{props.name}</h1>

    </div>
  )
}