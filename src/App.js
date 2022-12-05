import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

export default function App () {
  const getDate = new Date()
  const hour = getDate.getHours()
  const minute = getDate.getMinutes()
  return (
    <div>
      <Navbar />
      <Main
        name="Hello"
        date={`${hour}:${minute}`}
        />
      <Main
      name="Baby"
      date={`${hour}:${minute}`}
      />
    </div>
  )
}
