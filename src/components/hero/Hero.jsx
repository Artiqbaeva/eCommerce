import hero from "@/assets/hero-img.svg"
import React from 'react'
import { useNavigate } from "react-router-dom"
import dining from '@/assets/dining.svg'
import living from '@/assets/living.svg'
import bedroom from '@/assets/bedroom.svg'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
     <section className="relative w-full h-[80vh]">
    <img
      src={hero}
      alt="Hero Background"
      className="w-full h-full object-cover"
    />
       <div className="
        absolute top-1/2
        left-1/2 sm:left-[60%]
        md:-translate-x-[50%]
        -translate-x-1/2 
        -translate-y-1/2 
        bg-white/80 p-4 md:p-8
        rounded-md shadow-lg
        w-[90%] md:w-[643px]
        h-auto md:h-[350px]
        text-center md:text-left
       ">
        <p className="text-sm tracking-wider text-gray-500 mb-2 uppercase">
          New Arrival
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-yellow-600 mb-4 leading-tight">
          Discover Our <br className="hidden md:block" /> New Collection
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 cursor-pointer rounded font-semibold text-sm md:text-base"
        >
          BUY NOW
        </button>
      </div>
         </section>
        <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Browse The Range</h2>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: dining, title: 'Dining' },
            { img: living, title: 'Living' },
            { img: bedroom, title: 'Bedroom' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col justify-center items-center">
              <img src={item.img} alt={item.title} className="w-[100%] max-w-[380px]" />
              <span className="mt-6 font-display font-semibold text-xl md:text-2xl">{item.title}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero