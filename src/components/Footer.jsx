import React from 'react'

const Footer = () => {
      return (
            <div className='flex flex-col w-full h-full bg-slate-800 p-10 text-white '>
                  <div className='flex flex-row sm:flex-col justify-around items-center'>


                        <div className='flex flex-col sm:flex-row items-center sm:items-baseline space-x-0 sm:space-x-6'>
                              <p className='font-black text-xl'>Booking Online</p>
                              <ul className='flex flex-col sm:flex-row space-x-0 sm:space-x-5 items-center'>
                                    <li><a href="">Booking.com</a></li>
                                    <li><a href="">Expedia</a></li>
                                    <li><a href="">Traveloka</a></li>
                                    <li><a href="">Tiket.com</a></li>
                                    <li><a href="">Agoda</a></li>
                                    <li><a href=""></a></li>
                              </ul>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center sm:items-baseline space-x-0 sm:space-x-6'>
                              <p className='font-black text-xl'>Social Media</p>
                              <ul className='flex flex-col sm:flex-row space-x-0 sm:space-x-5 items-center'>
                                    <li><a href="">Official Website</a></li>
                                    <li><a href="">Facebook</a></li>
                                    <li><a href="">Instagram</a></li>
                                    <li><a href="">Twitter</a></li>
                                    <li><a href="">Thread</a></li>

                              </ul>

                        </div>

                  </div>
                  <div className='flex flex-col items-center w-full mt-5 space-y-2'>
                        <p>Jl. Raya Ciater No. 19 Subang, Jawa Barat</p>
                        <p>Copyright 2023 | Made with Love</p>
                  </div>

            </div>


      )
}

export default Footer