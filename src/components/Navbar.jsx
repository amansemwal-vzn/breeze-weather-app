import Reat, { useState, useEffect } from 'react';
import { Home, Compass, Menu, X, Wind } from "lucide-react";
import { NavLink } from 'react-router-dom';
import Sidemenu from './Sidemenu';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <nav className={`fixed px-6 py-4 text-white flex justify-between items-center h-17 z-50 backdrop-blur-sm rounded-full shadow-xl transition-all duration-300
            ${isScrolled
              ? 'top-0 left-0 right-0 rounded-none bg-[#24282A]/20'
              : 'top-6 left-6 right-6 rounded-xl bg-[#24282A]'
            }
        `}>
            <a href='/home' className='font-logo text-2xl flex gap-1 items-center'>
            <Wind size={24} />
              <span>Breeze</span>
            </a>

            <div className='relative flex justify-around items-center gap-4'>
                <NavLink to="/home">
                  {({ isActive }) => (
                    <div
                      className={`relative flex items-center overflow-hidden rounded-full p-3 transition-all duration-300 
                        after:h-full after:w-full after:-z-10 after:rounded-full after:absolute 
                        after:bg-white/50 after:content-[""] after:inset-0 after:top-full hover:after:top-0 
                        after:transition-all
                        ${isActive ? "bg-white text-black gap-2" : "bg-white/30 text-white gap-0"}`}
                    >
                      <Home size={22} />
                      <span className={`text-sm font-medium transition-all duration-300 ${isActive ? "max-w-[100px] opacity-100 translate-x-0" : "max-w-0 opacity-0 -translate-x-3"}`}>
                        Home
                      </span>
                    </div>
                  )}
                </NavLink>
              
                <NavLink to="/explore">
                  {({ isActive }) => (
                    <div
                      className={`relative flex items-center overflow-hidden rounded-full p-3 transition-all duration-300 
                        after:h-full after:w-full after:-z-10 after:rounded-full after:absolute 
                        after:bg-white/50 after:content-[""] after:inset-0 after:top-full hover:after:top-0 
                        after:transition-all
                        ${isActive ? "bg-white text-black gap-2" : "bg-white/30 text-white gap-0"}`}
                    >
                      <Compass size={22} />
                      <span className={`text-sm font-medium transition-all duration-300 ${isActive ? "max-w-[100px] opacity-100 translate-x-0" : "max-w-0 opacity-0 -translate-x-3"}`}>
                        Explore
                      </span> 
                    </div>
                  )}
                </NavLink>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`relative z-110 transition-transform duration-300`}
            >
              <div className={`transform transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
        </nav>
        {menuOpen && <Sidemenu />}
    </>
  )
}

export default Navbar