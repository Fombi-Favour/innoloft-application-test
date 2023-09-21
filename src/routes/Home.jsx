import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col justify-center p-2'>
      <h1 className='font-bold'>Home Page</h1>
      <NavLink to='product' className='bg-blue-600 rounded-md p-3 text-white'>Go to the product</NavLink>
    </div>
  )
}

export default Home