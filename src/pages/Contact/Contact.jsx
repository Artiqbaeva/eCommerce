import React from 'react'
import contact from "@/assets/contact.svg"
import location from "@/assets/location.png"
import phone from "@/assets/phone.png"
import time from "@/assets/time.png"
const Contact = () => {
  return (
    <div>
       <div>
        <img src={contact} alt="Contact Us" style={{ width: '100%', height: 'auto' }} />
       </div>
       <div className='font-display'>
    
       <div className='text-center py-12 max-w-6xl mt-20 mx-auto container '>
       <h2 className="text-3xl font-bold mb-2 ">Get In Touch With Us</h2>
        <p className="text-sm text-gray-500 mb-6 mt-4">
          For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email.
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
       </div>

      <div className="flex flex-col lg:flex-row px-6 py-12  max-w-6xl mx-auto space-y-10 lg:space-y-0 lg:space-x-16">  
      <div className="space-y-10 lg:w-1/2 mt-10">
        <div> 
         <div className='flex items-center gap-4'>
         <img  src={location} alt="" />
         <h2 className="text-2xl font-semibold">Address</h2>
         </div>
          <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
        </div>

        <div>
         <div className='flex items-center gap-4'>
         <img src={phone} alt="" />
         <h2 className="text-2xl font-semibold">Phone</h2>
         </div>
          <p className="text-gray-600">Mobile: +(84) 546-6789</p>
          <p className="text-gray-600">Hotline: +(84) 456-6789</p>
        </div>

        <div>
          <div className='flex items-center gap-4'>
          <img src={time} alt="" />
          <h2 className="text-2xl font-semibold">Working Time</h2>
          </div>
          <p className="text-gray-600">Monday-Friday: 9:00 – 22:00</p>
          <p className="text-gray-600">Saturday-Sunday: 9:00 – 21:00</p>
        </div>
      </div>

     
      <div className="lg:w-1/2">
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your name</label>
            <input
              type="text"
              placeholder="Abc"
              className="w-full border border-gray-300 rounded-md outline-none indent-1 px-6 py-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email address</label>
            <input
              type="email"
              placeholder="Abc@def.com"
              className="w-full border border-gray-300 rounded-md outline-none indent-1 px-6 py-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="This is an optional"
              className="w-full border border-gray-300 rounded-md outline-none indent-1 px-6 py-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Hi! I'd like to ask about"
              className="w-full border border-gray-300 rounded-md indent-1 outline-none px-6 py-4 min-h-[100px]"
            ></textarea>
          </div>

          <button
            onClick={(e) => e.preventDefault()}
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Contact