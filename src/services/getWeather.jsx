import axios from 'axios'

const getWeather = async (city) => {
  const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=98b73e7a861215795153d6fba89968c0&units=metric')

  return res.data
}

export default getWeather