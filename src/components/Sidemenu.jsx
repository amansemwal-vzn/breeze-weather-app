import React from 'react'

const Sidemenu = () => {
  return (
    <div className="fixed inset-0 z-100 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"></div>

      {/* Sliding Panel */}
      <div
        className="relative h-full w-3/5 sm:w-2/5 md:w-1/4 bg-white text-black shadow-2xl animate-slide-in-right p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Menu</h2>
        <a href="/home#weather" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="/explore" className="hover:text-blue-500 transition-colors">Explore</a>
        <a href="/about" className="hover:text-blue-500 transition-colors">About</a>
      </div>
    </div>
  )
}

export default Sidemenu
