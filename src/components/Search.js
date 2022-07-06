import React, { useRef, useState } from 'react'
import useFetchHook from '../hooks/useFetchHook'

const Search = ()=>{

  const [inputOne, setInputOne] = useState("")
  const inputRef = useRef()

  const {handleOnClick, handleLocation, lati, long, getWeather} = useFetchHook()
  // console.log(getWeather.hourly ? getWeather.hourly.time[0] : '')

  return(
     <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-1/4 items-center justify-center">
              {
                long && lati ?
                <button onClick={handleLocation} name="metric" className="text-ms font-light p-3 m-2 rounded bg-blue-100 text-blue-800 w-64">
                Get weather
                </button>
                :
                <button onClick={handleOnClick} name="metric" className="text-ms font-light p-3 m-2 rounded bg-blue-800 text-white w-64">
                Get location
                </button>
              }  
            </div>
            <div className="flex flex-row w-3/4 items-center space-x-4">
                <input ref={inputRef} value={long} onChange={(e) =>setInputOne(e.target.value)} type="text" placeholder="longitude" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase"/>
                <input ref={inputRef} value={lati} onChange={(e) =>setInputOne(e.target.value)} type="text" placeholder="latitude" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase"/>
            </div>
        </div>
  )
}
export default Search