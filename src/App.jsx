
import './App.css'
import React, { useState } from 'react'

import PhotoList from './components/list'
import getPhotos from './services/getPhotos'
import getWeather from './services/getWeather'
import CityWeather from './components/city-weather'

const App = () => {
  const [text, setText] = useState('')
  const [number, setNumber] = useState(10)
  const [orientation, setOrientation] = useState('portrait')
  const [images, setImages] = useState([])
  const [weather, setWeather] = useState()
  const [view, setView] = useState('col-sm-3')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const changeView = () => {
    setView(view === 'col-sm-3' ? 'col-sm-6' : 'col-sm-3')
  }

  const handleGetWeather = async (city) => {
    try {
      const res = await getWeather(city)
      setWeather(res)
      handleGetPhotos({ text: res.weather[0].description, number: 10 })
    } catch {
      setWeather()
      alert('City not found')
    }
  }

  const handleGetPhotos = async ({ text, number }) => {
    const res = await getPhotos({ text, number, orientation })
    setImages(res)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setNumber(10)

    handleGetWeather(text)
  }

  const handleShowMore = () => {
    setNumber(number + 10)

    handleGetPhotos({ text: weather.weather[0].description, number: number + 10 })
  }

  return (
    <div className="container theme">
      <form onSubmit={handleSubmit}>
        <label>
          Search city:
          <input type="text" className="form-control" value={text} onChange={handleChange} />
        </label>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {weather && (
        <CityWeather weather={weather}></CityWeather>
      )}

      <div className="row">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className={orientation === 'portrait' ? "btn btn-secondary active" : "btn btn-secondary"}>
            <input type="radio" name="options" id="option1" onClick={() => setOrientation('portrait')} /> Portrait
          </label>
          <label className={orientation === 'landscape' ? "btn btn-secondary active" : "btn btn-secondary"}>
            <input type="radio" name="options" id="option2" onClick={() => setOrientation('landscape')} /> Landscape
          </label>
        </div>
      </div>

      <div className="row">
        <button type="button" className="btn btn-outline-primary" onClick={changeView}>Change View</button>
      </div>

      <PhotoList images={images} view={view} showMore={handleShowMore}></PhotoList>
    </div>
  )
}

export default App
