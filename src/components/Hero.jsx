import React from 'react';

const Hero = () => {

      return (
            <div>
                  <div className='bg-cover bg-center h-screen sm:bg-fixed bg-local' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
                        <div className='flex px-10 justify-center items-center h-screen'>
                              <p className='font-play font-bold text-slate-900 italic text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Serenity in Nature Meet Culture</p>
                        </div>
                  </div>
            </div>
      )
}

export default Hero