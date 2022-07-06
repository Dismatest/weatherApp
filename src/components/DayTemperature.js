import React from 'react'
import useFetchHook from '../hooks/useFetchHook'

const DayTemperature = () => {
  const {getWeather} = useFetchHook()
  return (
    <div>
        <hr className="my-2"/>
        <div className="flex flex-row items-center justify-between text-white py-3">
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{getWeather.hourly ? getWeather.hourly.time[0] : ''}AM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            {
              getWeather.longitude ?
              <p className="font-medium">{getWeather.hourly ? getWeather.hourly.time[0] : ''}</p>
              :
              <p className="font-medium">10</p>
            }
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">07:00 AM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">08:00 AM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">09:00 AM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

            
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">10:00 AM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>
            
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">11:00 AM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

        </div>

        <hr className="my-2"/>
        <div className="flex flex-row items-center justify-between text-white py-4">
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">12:00 PM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">13:00 PM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">14:00 PM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">15:00 PM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

            
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">16:00 PM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>
            
            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">17:00 PM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

            <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">18:00 PM</p>
            <p className="font-medium">22&deg;</p>
            <p className="font-medium">20 m/s</p>
            <p className="font-medium">10</p>
            </div>

        </div>
    </div>
  )
}

export default DayTemperature