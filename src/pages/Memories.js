import React, { useState, useEffect } from 'react'

export const Memories = () => {
  const [memories, setMemories] = useState([])

  useEffect(() => {
    fetch('https://rex-database2019.herokuapp.com/section/memories')
    .then((res) => {
      return res.json()
    })
    .then(data => {
      setMemories(data)
    })
  },[])

  return (
    <div>
      {memories.map(memory => (
        <div key={memory.title}>
          <img src={memory.imageUrl} alt={memory.title}/>
          <h5>{memory.title}</h5>
          <p>{memory.director}</p>
        </div>
      ))}
    </div>
  )
}