import Products from '@/components/products/Products';
import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value)
  console.log(wishlist);
  
  return (
    <div>
        <h1 className='text-2xl font-bold text-center my-5'>Wishlist</h1>
      {
        wishlist.length ?
        <Products data={wishlist}/>
        :
        <div className='flex flex-col items-center justify-center h-screen'>
          <h2 className='text-2xl font-bold text-gray-600'>Your wishlist is empty</h2>
          <p className='text-gray-500'>Add products to your wishlist to see them here.</p>
          <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
        </div>
      }
    </div>
  )
}

export default Wishlist