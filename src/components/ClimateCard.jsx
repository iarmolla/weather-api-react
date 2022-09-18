import React from 'react'

function ClimateCard( {climate} ) {
    const date = new Date();
    let iconCloud = '';
    if (climate) {
      iconCloud = `https://api.openweathermap.org/img/w/${climate.weather[0].icon}.png`
    }
    return (
        <div>
            <main className="rounded-md m-10  max-h-screen grid grid-cols-1 h-80  border-2 border-indigo-500 mt-32">
                {/* seccion clima titulo icono */}
                <section className="p-3 rounded-md">
                    {
                        climate != null ? <div>
                            <h1 className=" text-3xl   ">{climate.name}</h1>
                            <span className=" text-2xl ">{date.toLocaleDateString()}</span>
                            <p className="text-4xl pb-1">{climate.main.temp_max}°C</p>
                            <img src={iconCloud} alt="" />
                        </div> :
                            <h1>no hay clima</h1>
                    }
                </section>
                {/* seccion descriptiva del clima */}
                <section className=' rounded-none'>
                    {
                        climate != null ? <div className='p-3 grid grid-cols-1 gap-2'>
                            <p>Temperatura maxima: {climate.main.temp_max}°C</p>
                            <p>Temperatura minima: {climate.main.temp_min}°C</p>
                            <p>Humedad: {climate.main.humidity}°C</p>
                        </div> :
                            <p>{'no hay clima'}</p>
                    }
                </section>

            </main>
        </div>
    )
}

export default ClimateCard