import React from 'react'

const TempCard = ({ temperature=null }) => {
  return (
    <div className="rounded-lg bg-[#24282A] backdrop-blur-xl shadow-md p-10 text-white flex flex-col justify-center items-center gap-10 transition-all duration-450 hover:scale-101 hover:bg-[#24282A]/80 hover:shadow-dark">
      <div className="flex font-body">
        <h1 className="text-xxl leading-none">{temperature}</h1>
        <span className="text-3xl">°C</span>
      </div>
    </div>
  )
}

export default TempCard