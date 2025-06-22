import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200 mt-14">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
     
      <div>
        <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
        <p className="text-sm text-gray-500">
          400 University Drive Suite 200 Coral Gables,<br />
          FL 33134 USA
        </p>
      </div>

     
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">Links</h3>
        <ul className="space-y-4 text-sm font-medium">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/shop" className="hover:underline">Shop</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>

      
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">Help</h3>
        <ul className="space-y-4 text-sm font-medium">
          <li><a href="#" className="hover:underline">Payment Options</a></li>
          <li><a href="#" className="hover:underline">Returns</a></li>
          <li><a href="#" className="hover:underline">Privacy Policies</a></li>
        </ul>
      </div>

  
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-4">Newsletter</h3>
        <form className="flex items-center border-b border-gray-300">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-grow px-2 py-1 text-sm outline-none"
          />
          <button
            type="submit"
            className="text-sm font-semibold text-black hover:underline ml-2"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>

    <hr className="my-8 border-gray-200" />

    {/* Copyright */}
    <div className="text-center text-sm text-gray-500">
      © 2023 Funiro. All rights reserved
    </div>
  </footer>
  )
}

export default React.memo(Footer)