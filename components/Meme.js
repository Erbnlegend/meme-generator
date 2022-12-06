import React from 'react'
import memes from '../src/data/memesData'

export default function MemeText () {
  const [memeData, setMemeData] = React.useState({
    url: '',
    name: '',
    topText: '',
    bottomText: ''
  })

  function setImage () {
    const randomIndex = Math.floor(Math.random() * memes.data.memes.length)
    setMemeData(prevState => {
      return {
        ...prevState,
        url: memes.data.memes[randomIndex].url,
        name: memes.data.memes[randomIndex].name
      }
    })
    console.log(memeData)
  }

  return (
    <div>
      <div className='textOptions'>
        <input type='text' placeholder='Top Text'></input>
        <input type='text' placeholder='Bottom Text'></input>
        <button className='newMeme' onClick={setImage}>Get a new meme image</button>
      </div>
      <div className='memeImg'>
        <div className='top'>{memeData.topText}</div>
          <img src={memeData.url} alt={memeData.name} />
        <div className='bottom'>{memeData.bottomText}</div>
      </div>
    </div>
  )
}
