import React from 'react'
import useFetchHook from '../hooks/useFetchHook'

const Time = () => {
  
  const {getWeather} = useFetchHook()
  console.log(getWeather)
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-3xl font-medium">
            Daily Weather
            </p>

        </div>
    </div>
  )
}

export default Time