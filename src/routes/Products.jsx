import React from 'react'
import { NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <div className='flex flex-col justify-center p-2 gap-2'>
      <h1 className='font-bold'>Product Page</h1>
      <NavLink to='edit' className='bg-blue-600 rounded-md p-3 text-white'>Edit the product</NavLink>
      <NavLink to='/' className='bg-blue-600 rounded-md p-3 text-white'>Back to home page</NavLink>
    </div>
  )
}

export default Products