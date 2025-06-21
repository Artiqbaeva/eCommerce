import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/logo.svg'
const Header = () => {
  return (
    <header className='container mx-auto flex justify-between items-center p-4 font-display'>
      <div className='flex items-center gap-2'>
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className='w-12 h-12' />
       </NavLink>
       <NavLink to={"/"}>
        <h2 className='font-semibold text-3xl'>Furniro</h2>
        </NavLink>
      </div>
       <div className='flex gap-20 text-lg '>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/shop"}>Shop</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink> 
      </div>   
      <div className='flex items-center gap-4 text-xl'>
        <NavLink to={"/search"} className="ml-4">
        <i class="fa-solid fa-magnifying-glass"></i>
        </NavLink>

        <NavLink to={"/cart"} className="relative">
        <i class="fa-solid fa-cart-shopping"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
        </NavLink> 

        <NavLink to={"/wishlist"} className="relative ml-4">
        <i class="fa-regular fa-heart "></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span> 
        </NavLink>
         
          <NavLink to={"/login"} className="ml-4">
          <i class="fa-regular fa-user"></i>
          </NavLink>
    
        
      </div>
    </header>
  )
}

export default React.memo(Header)