import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronForward } from 'react-icons/io5'
import ProductMain from '../components/ProductMain';
import ProductDetails from '../components/ProductDetails';
import ProductVideo from '../components/ProductVideo';
import UserInfo from '../components/UserInfo';

import Home from '../assets/inno_home.svg';

const Products = () => {
  return (
    <main className='py-5 pr-3 md:mx-2 lg:-ml-6'>
      {/* sub nav-bar */}
      <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-0'>
        <div className='flex items-center gap-1 text-[#6B7280] text-[14px]'>
          <img src={Home} alt="home" />
          <IoChevronForward />
          <span>Offers</span>
          <IoChevronForward />
          <span className='font-semibold truncate'>Intelligent Finite Elements in Structural mechanics</span>
        </div>
        <NavLink to='edit' className='bg-[#272E71] w-11 text-center rounded-md p-1 text-white'>Edit</NavLink>
      </div>
      <div className='grid grid-row-2 lg:grid-row-1 grid-cols-[auto] lg:grid-cols-[1fr_auto] lg:gap-2'>
        {/* main and user-info sections */}
        <ProductMain />
        <UserInfo />
      </div>
    </main>
  )
}

export default Products