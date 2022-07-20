import React, { useState } from "react";
import Axios from "axios";
import "./assets/css/styles.css";
import TopMeu from "./components/TopMeu";
import Search from "./components/Search";
import Time from "./components/Time";
import DayTemperature from "./components/DayTemperature";
import FetchAppContext from "./store/FetchAppContext";

function App() {

    const API_URL = process.env.API_BASE_URL
    const [getWeather, setGetWeather] = useState({})

    const handleLocation = () =>{

        Axios.get(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&hourly=windspeed_120m&hourly=relativehumidity_2m&hourly=cloudcover_mid`)
        .then(response => setGetWeather(response))
        .catch(err => console.log(err, "There is an error"))
        
        }

  return (
  <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-green-500 to-blue-700 h-fit shadow-xl shadow-gray-900">
   <FetchAppContext.Provider value={[getWeather]}>
   <TopMeu/>
   <Search handleLocation={handleLocation}/>
   <Time/>
   <DayTemperature/>
   </FetchAppContext.Provider>
  </div>
  );
}

export default App;

