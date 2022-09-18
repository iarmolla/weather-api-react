import React, { useState, useEffect } from 'react'
import { getClimateByCountry } from '../services/climate.js'
import ClimateCard from './ClimateCard'
import 'boxicons'

function Climate() {
  const [climate, updateClimate] = useState()
  const [city, updateCity] = useState()
  const [test,updateTest]=useState([])
  useEffect(() => {
    getClimateByCountry(updateClimate, 'argentina')
    updateTest(climate)
  }, [])
  let climates=climate
  const handleChange =()  => {
    getClimateByCountry(updateClimate, city)
    console.log(test)
    console.log(first)
    updateTest(climates)
  }
  if(climates!=null)console.log(climates)
  return (
    <>
      <header>
        <nav className="bg-white flex flex-row justify-between items-center drop-shadow-xl ">
          <div>
            <h1 className="p-3 text-center text-3xl tracking-wider">climate api</h1>
          </div>
          <div className='flex flex-row items-center  content-center justify-center border-2 p-2 rounded-md'>
            <input className="outline-none rounded-md  " type="search" placeholder='search...' onChange={(e) => {
              updateCity(e.target.value)
            }} />
            <box-icon name='search-alt-2' onClick={handleChange}></box-icon>
          </div>
          <div>

          </div>
        </nav>
      </header>
      <div className="grid place-items-center">
        <ClimateCard climate={climate}></ClimateCard>
      </div>
    </>
  )
}

export default Climate