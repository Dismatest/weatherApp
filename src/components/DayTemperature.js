import React, { useContext } from 'react'
import FetchAppContext from '../store/FetchAppContext'


const DayTemperature = () => {
 const [getWeather] = useContext(FetchAppContext)
 
  return (
    <div>
        <hr className="my-2"/>
        <div className="flex flex-row items-center justify-between text-white py-3">
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">06:00 AM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[0] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[0] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[0] : ''}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">07:00 AM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[1] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[1] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[1] : ''}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">08:00 AM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[2] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[2] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[2] : ''}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">09:00 AM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[3] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[3] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[3] : ''}</p>
            </div>

            
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">10:00 AM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[4] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[4] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[4] : ''}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">11:00 AM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[5] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[5] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[5] : ''}</p>
            </div>

        </div>

        <hr className="my-2"/>
        <div className="flex flex-row items-center justify-between text-white py-4">
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">12:00 PM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[6] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[6] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[6] : ''}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">13:00 PM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[7] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[7] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[7] : ''}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">14:00 PM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[8] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[8] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[8] : ''}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">15:00 PM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[9] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[9] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[9] : ''}</p>
            </div>

            
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">16:00 PM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[10] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[10] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[10] : ''}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">17:00 PM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[11] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[11] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[11] : ''}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">18:00 PM</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.temperature_2m[12] : ''}&deg;</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.windspeed_120m[12] : ''} m/s</p>
            <p className="font-medium">{getWeather.data ? getWeather.data.hourly.relativehumidity_2m[12] : ''}</p>
            </div>

        </div>
    </div>
  )
}

export default DayTemperature