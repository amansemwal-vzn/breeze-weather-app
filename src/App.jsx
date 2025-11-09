import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useWeather } from './hooks/useWeather'
import Home from './pages/Home'

function App() {

  console.log("DODODO weather is:", useWeather(import.meta.env.VITE_OPEN_WEATHER_API_KEY));
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <p className='text-white'>YOOOOOOOOOOOOOOOOOOOOOo!!!</p>
    </>
  )
}

export default App
