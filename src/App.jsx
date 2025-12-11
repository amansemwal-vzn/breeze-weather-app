import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Explore from './pages/Explore'
import NotFound from './pages/NotFound'
import Forecast from './pages/Forecast'
import Background from './micros/Background'
import Navbar from './components/Navbar'
import useLenis from './hooks/useLenis'

function App() {
  useLenis();
  return (
    <div className='w-full p-6 font-body'>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
