import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import MemeText from '../components/Meme'

import './assets/Troll-Face.svg'

export default function App () {
  return (
    <div>
      <Header />
      <div className='container'>
        <Main/>
        <MemeText />
      </div>
    </div>
  )
}
