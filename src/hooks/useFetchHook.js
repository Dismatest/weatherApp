import {useState} from 'react';
import Axios from 'axios';

  
const useFetchHook = () => {
    const API_URL = process.env.API_BASE_URL
    const [long, setLongitude] = useState("")
    const [lati, setLatitude] = useState("")
    const [getWeather, setGetWeather] = useState({})

    const handleOnClick = () =>{
        const getLatLon = (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        setLatitude(latitude.toFixed(4));
        setLongitude(longitude.toFixed(4));
        }
        navigator.geolocation.getCurrentPosition(getLatLon);
}

    const handleLocation = () =>{
        // `${API_URL}?latitude=${lati}&longitude=${long}&hourly=temperature_2m`
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&hourly=windspeed_120m&hourly=relativehumidity_2m&hourly=cloudcover_mid`)
        .then(response => response.json())
        .then(data => setGetWeather(data))
        // console.log(getWeather.hourly ? getWeather.hourly.time[0] : '')
        // console.log(getWeather.longitude);
        
        // Axios.get(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&hourly=windspeed_120m&hourly=relativehumidity_2m&hourly=cloudcover_mid`)
        // .then(response => setGetWeather(response))
        // .catch(err => console.log(err, "There is an error"))
        // console.log(getWeather)
    }
return {handleOnClick, handleLocation, lati, long, getWeather}
}


export default useFetchHook