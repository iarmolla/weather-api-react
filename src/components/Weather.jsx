import React, { useState, useEffect } from 'react'
import { getWeatherByCountry } from '../services/weatherApi.js'
import 'boxicons'
import WeatherCard from './WeatherCard'

function Weather() {
  const [weather, updateWeather] = useState({ "coord": { "lon": -64, "lat": -34 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 10.86, "feels_like": 10.06, "temp_min": 10.86, "temp_max": 10.86, "pressure": 1014, "humidity": 79, "sea_level": 1014, "grnd_level": 992 }, "visibility": 10000, "wind": { "speed": 8.13, "deg": 233, "gust": 11.22 }, "clouds": { "all": 78 }, "dt": 1663540542, "sys": { "type": 2, "id": 2040186, "country": "AR", "sunrise": 1663495868, "sunset": 1663538959 }, "timezone": -10800, "id": 3865483, "name": "Argentina", "cod": 200 })
  const [country, updateCountry] = useState('')
  const [test, updateTest] = useState([])
  useEffect(() => {
    updateTest([...test, weather])
  }, [weather])
  const handleChange = async() => {
    getWeatherByCountry(updateWeather, country)
  }
  return (
    <>
      <header>
        <nav className="bg-white md:flex md:flex-row md:justify-between md:items-center md:drop-shadow-xl ">
          <div>
            <h1 className="p-3 text-center text-3xl tracking-wider uppercase">climate api</h1>
          </div>
          <div className='flex flex-row items-center  content-center justify-center border-2 p-2 rounded-md'>
            <input className="outline-none rounded-md  " type="search" placeholder='search...' onChange={(e) => {
              updateCountry(e.target.value)
            }} />
            <box-icon name='search-alt-2' onClick={() => {
              handleChange()
            }}></box-icon>
          </div>
          <div>

          </div>
        </nav>
      </header>
      <div className="flex justify-center content-center">
        <div className="grid grid-cols-1 gap-4 mt-5 md:grid md:grid-cols-3 md:gap-5 md:mt-8 md:mx-4 max-w-4xl ">
          {
            test.map((weather) => {
              return <div key={weather.id}>
                <WeatherCard weather={weather}></WeatherCard>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Weather