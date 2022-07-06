import React from "react";
import "./assets/css/styles.css";
import TopMeu from "./components/TopMeu";
import Search from "./components/Search";
import Time from "./components/Time";
import DayTemperature from "./components/DayTemperature";

function App() {

  return (
  <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-green-500 to-blue-700 h-fit shadow-xl shadow-gray-900">
   <TopMeu/>
   <Search/>
   <Time/>
   <DayTemperature/>
  </div>
  );
}

export default App;

