import React, { useState, useEffect } from 'react'

const Whatsapp = () => {
      const [scrolling, setScrolling] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > 300) {
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

            <div className={`fixed bottom-5 z-10 transition-all duration-500 ${scrolling ? 'right-5' : '-right-20'}`}>
                  <button className='bg-green-500 w-16 h-16 rounded-full text-white'></button>
            </div>

      )
}

export default Whatsapp