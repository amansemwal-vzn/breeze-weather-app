import React from 'react'

const Background = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen min-h-screen bg-[#111111] overflow-hidden -z-10 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] before:bg-[size:4px_4px] before:opacity-30">
    </div>
  )
}

export default Background