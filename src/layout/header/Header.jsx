import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import LoginModal from '@/pages/login/LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center font-display">
        
        <div className="flex items-center gap-2">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="w-12 h-12" />
          </NavLink>
          <NavLink to={"/"}>
            <h2 className="font-semibold text-3xl">Furniro</h2>
          </NavLink>
        </div>

        
        <nav className="hidden lg:flex gap-12 text-lg">
          <NavLink to={"/"} className="hover:text-yellow-600">Home</NavLink>
          <NavLink to={"/shop"} className="hover:text-yellow-600">Shop</NavLink>
          <NavLink to={"/about"} className="hover:text-yellow-600">About</NavLink>
          <NavLink to={"/contact"} className="hover:text-yellow-600">Contact</NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-4 text-xl">
          <NavLink to={"/search"}><i className="fa-solid fa-magnifying-glass"></i></NavLink>
          <NavLink to={"/cart"} className="relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
          </NavLink>
          <NavLink to={"/wishlist"} className="relative">
            <i className="fa-regular fa-heart"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
          </NavLink>
          <NavLink to={"/login"}>
            <i className="fa-regular fa-user"></i>
          </NavLink>
        </div>

      
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-4 text-lg font-medium">
            <NavLink to={"/"} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to={"/shop"} onClick={() => setIsMenuOpen(false)}>Shop</NavLink>
            <NavLink to={"/about"} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to={"/contact"} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            <div className="flex gap-4 mt-4 text-xl">
              <NavLink to={"/search"}><i className="fa-solid fa-magnifying-glass"></i></NavLink>
              <NavLink to={"/cart"} className="relative">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
              </NavLink>
              <NavLink to={"/wishlist"} className="relative">
                <i className="fa-regular fa-heart"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
              </NavLink>
              <NavLink to={"/login"}><i onClick={ ()=> LoginModal} className="fa-regular fa-user"></i></NavLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
