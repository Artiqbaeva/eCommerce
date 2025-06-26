import React from 'react'

const NotFound = () => {
  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-4xl font-bold text-center mt-20'>404 - Page Not Found</h1>
      <p className='text-center mt-4 text-gray-600'>The page you are looking for does not exist.</p>
      
     
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?semt=ais_items_boosted&w=740"
        alt="404 error"
        className="mx-auto mt-8 max-w-full w-[400px]" 
      />

      <div className='flex justify-center mt-8'>
        <a href="/" className='text-blue-500 hover:underline'>Go back to Home</a>
      </div>
    </div>
  )
}

export default NotFound
