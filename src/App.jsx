import City from './components/City'
import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const API_KEY = '90bd7f03ed39d5afb5ba810abfbefe7a'
  const [name, setName] = useState('')
  const [city, setCity] = useState(null)

  const handleFind = async (e) => {
    const GEOLOCATION_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${API_KEY}`
    const geo_res = await axios.get(GEOLOCATION_API_URL)
    const lat = geo_res.data[0].lat
    const lon = geo_res.data[0].lon
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    const weather_res = await axios.get(WEATHER_API_URL)
    const countryCode = weather_res.data.sys.country
    const country_res = await axios.get(
      `https://restcountries.com/v3/alpha/${countryCode.toLowerCase()}`
    )
    const flagUrl = country_res.data[0].flags[1]
    const cityName = weather_res.data.name
    const des = weather_res.data.weather[0].description
    const icon = weather_res.data.weather[0].icon
    const windSpeed = weather_res.data.wind.speed
    const temp = (parseFloat(weather_res.data.main.temp) - 273.15).toFixed(2)
    const humidity = weather_res.data.main.humidity
    setCity({ flagUrl, cityName, des, icon, windSpeed, temp, humidity })
  }

  return (
    <div>
      <h1>Weather Application</h1>
      <input
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleFind}>Find</button>

      {city ? <City city={city} /> : <div></div>}
    </div>
  )
}

export default App

