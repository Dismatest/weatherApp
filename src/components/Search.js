import React, { useRef, useState } from 'react'


const Search = ({handleLocation})=>{

  const [inputField, setInputField] = useState({ longitudeInput: "", latitudeInput: "" })
  const [long, setLongitude] = useState("")
  const [lati, setLatitude] = useState("")
  const inputRef = useRef()

  // console.log(getWeather.hourly ? getWeather.hourly.time[0] : '')

  const handleInput = (e) => {
    setInputField({...inputField, [e.target.name]: e.target.value})
    console.log(e.target.value, e.target.name) 
  }

  const handleOnClick = async () =>{
    const getLatLon = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    setLatitude(latitude.toFixed(4));
    setLongitude(longitude.toFixed(4));
    }
    await navigator.geolocation.getCurrentPosition(getLatLon)

    
  }

  return(
     <div className="flex flex-row justify-center my-6">
    
            <div className="flex flex-row w-1/4 items-center justify-center">
            
              {
                long && lati ?
                <button onClick={handleLocation} name="metric" className="text-ms font-light p-3 m-2 rounded bg-blue-100 text-blue-800 w-64">
                Get Weather
                </button>
                :
                <button onClick={handleOnClick} name="metric" className="text-ms font-light p-3 m-2 rounded bg-blue-800 text-white w-64">
                  Get Location
                </button>
              }  
            </div>
            <div className="flex flex-row w-3/4 items-center space-x-4">
                <input ref={inputRef} value={long} onChange={handleInput} name="longitude" type="text" placeholder="longitude" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase text-black"/>
                <input ref={inputRef} value={lati} onChange={handleInput} name="latitude" type="text" placeholder="latitude" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase"/>
            </div>
         
        </div>
  )
}
export default Search