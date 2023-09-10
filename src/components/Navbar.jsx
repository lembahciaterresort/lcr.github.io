import React, { useEffect, useState } from 'react';
import Hamburger from './Hamburger';

function Navbar() {
      const [scrolling, setScrolling] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > 150) {
                        setScrolling(true);
                  } else {
                        setScrolling(false);
                  }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);

      return (
            <nav className={`fixed w-full z-20 transition-all duration-100 ${scrolling ? 'bg-[#29B99D] text-white slide-in' : 'bg-transparent text-black'}`}>
                  <div className="px-5 sm:px-12 py-5">
                        <div className="flex justify-between items-center">
                              <div className="text-xl font-bold">Lembah Ciater Resort</div>
                              <div className='flex items-center justify-between'>
                                    <div>
                                          <ul className="flex space-x-5 font-black">
                                                <li className="hidden md:block hover:font-bold"><a href="">Home</a></li>
                                                <li className="hidden md:block hover:font-bold"><a href="">About</a></li>
                                                <li className="hidden md:block hover:font-bold"><a href="">Services</a></li>
                                                <li className="hidden md:block hover:font-bold"><a href="">Contact</a></li>
                                          </ul>
                                    </div>
                                    <Hamburger />
                              </div>

                        </div>
                  </div>
            </nav>
      );
}

export default Navbar;