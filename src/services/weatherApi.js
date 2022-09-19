import axios from 'axios'

const getWeather=async(updateWeather)=>{
    const request=await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=de7c7aaff07a2ee5d66d7c967f9fce76')
    updateWeather(request.data)
}
export const getWeatherByCountry=async(updateWeather,country)=>{
    const request=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=de7c7aaff07a2ee5d66d7c967f9fce76&units=metric`)
    updateWeather(request.data)
}
export default getWeather