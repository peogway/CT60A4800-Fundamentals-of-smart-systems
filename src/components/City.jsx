import { useState } from 'react'

const City = ({ city }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <br />
      <img
        src={`${city.flagUrl}`}
        width='100px'
        height='50px'
        style={{ margin: '10px' }}
      />
      <h2>{city.cityName}</h2>
      <div style={{ marginLeft: '40px' }}>
        <h4>{city.des}</h4>
        <img src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`} />
      </div>

      <p>
        <span id='temperature'>Temperature: </span> {city.temp}°C
      </p>
      <p>
        <span id='wind-speed'>Wind Speed: </span> {city.windSpeed}
        m/s
      </p>
      <p>
        <span id='humidity'>Humidity: </span> {city.humidity}%
      </p>
    </div>
  )
}

export default City

