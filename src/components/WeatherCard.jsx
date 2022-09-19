import React from 'react'

function WeatherCard({ weather }) {
    const date = new Date();
    let iconCloud = '';
    if (weather) {
        iconCloud = `https://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`
    }
    return (
        <main className="rounded-md grid grid-cols-1 border-2 border-indigo-500">
            {/* seccion clima titulo icono */}
            <section className="p-3 rounded-md">
                {
                    weather != null ? <div>
                        <h1 className=" text-3xl   ">{weather.name}</h1>
                        <span className=" text-2xl ">{date.toLocaleDateString()}</span>
                        <p className="text-4xl pb-1">{weather.main.temp_max}°C</p>
                        <img src={iconCloud} alt="" />
                    </div> :
                        <h1>no hay clima</h1>
                }
            </section>
            {/* seccion descriptiva del clima */}
            <section className=' rounded-none'>
                {
                    weather != null ? <div className='p-3 grid grid-cols-1 gap-2'>
                        <p>Temperatura maxima: {weather.main.temp_max}°C</p>
                        <p>Temperatura minima: {weather.main.temp_min}°C</p>
                        <p>Humedad: {weather.main.humidity}°C</p>
                    </div> :
                        <p>{'no hay clima'}</p>
                }
            </section>
        </main>
    )
}

export default WeatherCard