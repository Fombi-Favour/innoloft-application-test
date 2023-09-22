import React from 'react'
import { SlBadge } from 'react-icons/sl';
import Main from '../assets/main.png';

const ProductMain = () => {
  return (
    <main className='border-r-[1px]'>
      <div className='flex flex-col items-stretch'>
        <img src={Main} alt="main" />
        <div className='flex items-center gap-3 absolute bg-white border-t-[#E5E7EB] border-l-[#E5E7EB] rounded-br-md rounded-tl-md pr-2 -mt-1'>
          <div className='bg-[#272E71] w-12 h-10 flex items-center justify-center rounded-br-xl rounded-tl-md'>
            <SlBadge className='text-white text-xl' />
          </div>
          <span className='text-[#374151] font-semibold'>Patent</span>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <h2 className='text-[#374151] font-semibold'>Intelligent Finite Elements in Structural mechanics</h2>
        <span className='text-[#6B7280] leading-6'>In structural mechanics, the Finite Element Method is used to 
          simulate structural deformations and loads, e.g. for the design of components in mechanical or civil 
          engineering. The more complex the structural deformations are, the longer simulation times associated 
          with convergence problems can last. This is where the present invention comes in, by combining the 
          classical Finite Element Method with artificial intelligence. This is the first method in the literature 
          that significantly improves simulation times and convergence properties in this way. <br /><br /> Further 
          information you can find in the attached technology offer.
        </span>
      </div>
    </main>
  )
}

export default ProductMain