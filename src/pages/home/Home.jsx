import { useProduct } from '@/api/hooks/useProduct'
import Hero from '@/components/hero/Hero'
import Products from '@/components/products/Products'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const {getProduct} = useProduct()
  const {data, isLoading} = getProduct({limit: 8})
  const navigate = useNavigate();
  return (
    <div>
      <Hero/>
      <Products data={data?.data?.products} loading={isLoading} count={8}/>
      <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/shop")}
            className="border border-yellow-600 hover:bg-yellow-700 hover:text-white text-yellow-600 px-6 py-3 rounded font-semibold transition duration-300 text-sm md:text-base"
          >
            Show More
          </button>
        </div>
    </div>
  )
}

export default Home