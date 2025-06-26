import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import SearchModal from '@/pages/searchModal/SearchModal';
import LoginModal from '@/pages/login/LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
    className={`w-full  border-gray-200 sticky top-0 bg-white z-50 shadow-md ${
      isScrolled ? "shadow-sm py-[1px]" : "py-3"
    }`}
  >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center font-display">
        <div className="flex items-center gap-2 cursor-pointer">
          <NavLink to={'/'}>
            <img src={logo} alt="logo" className="w-12 h-12" />
          </NavLink>
          <NavLink to={'/'}>
            <h2 className="font-semibold text-3xl">Furniro</h2>
          </NavLink>
        </div>
        <nav className="hidden lg:flex gap-12 text-lg cursor-pointer ">
          <NavLink to={'/'} className="hover:text-yellow-600">Home</NavLink>
          <NavLink to={'/shop'} className="hover:text-yellow-600">Shop</NavLink>
          <NavLink to={'/about'} className="hover:text-yellow-600">About</NavLink>
          <NavLink to={'/contact'} className="hover:text-yellow-600">Contact</NavLink>
        </nav>
        <div className="hidden lg:flex items-center gap-4 text-xl cursor-pointer">
          <button onClick={() => setIsSearchOpen(true)}>
            <i className="fa-solid fa-magnifying-glass hover:text-yellow-600"></i>
          </button>
          <NavLink to={'/cart'}>
            <i className="fa-solid fa-cart-shopping hover:text-yellow-600"></i>
          </NavLink>
          <NavLink to={'/wishlist'}>
            <i className="fa-regular fa-heart hover:text-yellow-600"></i>
          </NavLink>
          <button onClick={() => setIsLoginOpen(true)}>
            <i className="fa-regular fa-user hover:text-yellow-600"></i>
          </button>
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
            <NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to={'/shop'} onClick={() => setIsMenuOpen(false)}>Shop</NavLink>
            <NavLink to={'/about'} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to={'/contact'} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </nav>
          <div className="flex items-center gap-4 mt-2 text-xl">
            <button onClick={() => setIsSearchOpen(true)}>
              <i className="fa-solid fa-magnifying-glass hover:text-yellow-600"></i>
            </button>
            <NavLink to={'/cart'}>
              <i className="fa-solid fa-cart-shopping hover:text-yellow-600"></i>
            </NavLink>
            <NavLink to={'/wishlist'}>
              <i className="fa-regular fa-heart hover:text-yellow-600"></i>
            </NavLink>
            <button onClick={() => setIsLoginOpen(true)}>
              <i className="fa-regular fa-user hover:text-yellow-600"></i>
            </button>
          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};

export default React.memo(Header);  