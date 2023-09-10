import React from 'react'
import Card from './Card'
import Landscape from './Landscape'
import cardsData from './Data'
import Ambience from './Ambience'


const Main = () => {
      return (
            <div>
                  <Ambience />

                  <div className='flex justify-center my-10 w-full'>
                        <h1 className='text-5xl'>Room Type</h1>
                  </div>

                  <div className='flex justify-center'>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-5 md:px-10">
                              {cardsData.map((card,) => (
                                    <Card
                                          key={card.id}
                                          title={card.title}
                                          description={card.description}
                                          imageUrl={card.imageUrl}
                                    />
                              ))}
                        </div>
                  </div>



                  <div className='flex justify-center my-10 w-full'>
                        <h1 className='text-5xl'>Meeting</h1>

                  </div>
                  <div> <Landscape /></div>
            </div>
      )
}

export default Main