import React from 'react'

const TopMeu = () => {
  const date = new Date();
  const day = date.toLocaleString("en-US", {weekday: 'long', month: 'long', year: 'numeric'});
  return (
    <div className="flex items-center justify-around my-4">
      <p className="text-white text-lg font-medium">{day}</p>
    </div>
  )
}

export default TopMeu