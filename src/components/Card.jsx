import React from 'react'

const Card = ({ title, description, imageUrl }) => {
      return (
            <div className='w-[330px] sm:w-[450px] h-[330px] overflow-hidden relative flex flex-col justify-between'>
                  <div className='transition-all duration-500 hover:scale-110 w-full h-[330px] bg-red-300 bg-cover bg-center' style={{ backgroundImage: `url(${imageUrl})` }}>

                  </div>

                  <div className='absolute z-10 p-5'>
                        <p className='text-3xl'>{title}</p>
                        <div className=''>{description}</div>
                  </div>

            </div >
      )
}

export default Card