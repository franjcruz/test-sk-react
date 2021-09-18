
import './App.css'
import React, { useState } from 'react'

import { createApi } from 'unsplash-js'
import PhotoList from './components/list'

const unsplash = createApi({ accessKey: 'w3fZVAUR6G3uUITPYA5MhBT7yAvBqCSQmUDK--RdXoM' })

const App = () => {
  const [text, setText] = useState('')
  const [images, setImages] = useState([])
  const [view, setView] = useState('col-sm-2')

  const getPhotos = (text) => {
    unsplash.search.getPhotos({ query: text, perPage: 10 }).then(result => {
      if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0])
      } else {
        const feed = result.response

        // extract total and results array from response
        const { total, results } = feed

        // handle success here
        console.log(`received ${results.length} photos out of ${total}`)
        console.log('first photo: ', results[0])

        setImages(results)
      }
    })
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const changeView = () => {
    setView(view === 'col-sm-2' ? 'col-sm-6' : 'col-sm-2')
  }

  const handleSubmit = (event) => {
    console.log('A name was submitted: ' + text)
    event.preventDefault()

    getPhotos(text)

    console.log(images)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <button onClick={changeView}>Change View</button>

      <PhotoList images={images} view={view}></PhotoList>
    </>
  )
}

export default App
