import React from 'react'
import memes from '../src/data/memesData'

export default function MemeText () {
  const [memeData, setMemeData] = React.useState({
    url: '',
    name: '',
    topText: '',
    bottomText: ''
  })

  const setImage = () => {
    const randomIndex = Math.floor(Math.random() * memes.data.memes.length)
    setMemeData(prevState => {
      return {
        ...prevState,
        url: memes.data.memes[randomIndex].url,
        name: memes.data.memes[randomIndex].name
      }
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setMemeData(prevState => {
      return {
        ...prevState,
        [name]: [value]
      }
    })
  }

  return (
    <div>
      <div className='textOptions'>
        <input
          onChange={handleChange}
          type='text'
          placeholder='Top Text'
          name='topText'
          value={memeData.topText}
        />
        <input
          onChange={handleChange}
          type='text'
          placeholder='Bottom Text'
          name='bottomText'
          value={memeData.bottomText}

        />
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
