import React from 'react'
import hero from '@/assets/hero-img.svg'

import dining from '@/assets/dining.svg'
import living from '@/assets/living.svg'
import bedroom from '@/assets/bedroom.svg'  
const Home = () => {
  return (
    <>
    {/* Hero Section */}
    <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <img
        src={hero}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 " />

      {/* Text Block */}
      <div className="absolute right-50 top-1/2 -translate-y-1/2 bg-white opacity-70 p-8 rounded-md shadow-lg max-[443px]">
        <p className="text-sm tracking-wider text-gray-500 mb-2 uppercase">New Arrival</p>
        <h1 className="text-4xl font-bold text-yellow-600 mb-4 leading-tight">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded font-semibold">
          BUY NOW
        </button>
      </div>
    </section>
    {/* Browse The Range */}

    <section className="container mx-auto py-16 px-4"></section>
      <h2 className="text-3xl font-bold text-center mb-2">Browse The Range</h2>
      <p className="text-center text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         <div>
          <img src={dining} alt="" />
         </div>
         <div>
          <img src={living} alt="" />
         </div>
         <div>
          <img src={bedroom} alt="" />
         </div>
      </div>
    </>
  )
}

export default Home