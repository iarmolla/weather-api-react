import axios from 'axios'

const getClimate=async(updateClimate)=>{
    const request=await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=de7c7aaff07a2ee5d66d7c967f9fce76')
    updateClimate(request.data)
}
export const getClimateByCountry=async(updateClimate,city)=>{
    const request=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de7c7aaff07a2ee5d66d7c967f9fce76&units=metric`)
    updateClimate(request.data)
}
export default getClimate