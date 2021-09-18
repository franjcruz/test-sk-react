import React from 'react'

const CityWeather = ({ weather }) => {
  const icon = 'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '.png'

  return (
    <>
      <p>City: {weather.name}</p>
      <p>Temp: {weather.main.temp}</p>
      <img alt="icon" src={icon} />
    </>
  )
}

export default CityWeather