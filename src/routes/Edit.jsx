import React from 'react'
import { NavLink } from 'react-router-dom'

const Edit = () => {
  return (
    <div className='flex flex-col justify-center p-2 gap-2'>
      <h1 className='font-bold'>Edit Page</h1>
      <NavLink to='/product' className='bg-blue-600 rounded-md p-3 text-white'>Back to the product</NavLink>
      <NavLink to='/' className='bg-blue-600 rounded-md p-3 text-white'>Back to home page</NavLink>
    </div>
  )
}

export default Edit