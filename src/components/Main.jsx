import React from 'react'
import Card from './Card'
import Landscape from './Landscape'

const Main = () => {
      return (
            <div>
                  <div className='h-[10000px]'>
                        <div className='container flex justify-center my-10'>
                              <h1 className='text-5xl'>Room Type</h1>
                        </div>
                        <div className='flex space-x-9 justify-center'>
                              <Card />
                              <Card />
                        </div>
                        <div className='container flex justify-center my-10'>
                              <h1 className='text-5xl'>Meeting</h1>

                        </div>
                        <div> <Landscape /></div>
                  </div>
            </div>
      )
}

export default Main