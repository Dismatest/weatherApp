import React from 'react'
import useFetchHook from '../hooks/useFetchHook'

const Time = () => {
  const {lati, long} = useFetchHook()
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-3xl font-medium">
                Todays Weather Forecast
            </p>

        </div>
    </div>
  )
}

export default Time