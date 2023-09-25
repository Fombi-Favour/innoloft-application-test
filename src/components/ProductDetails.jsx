import React from 'react'
import Tech from '../assets/inno_dev-4.svg';
import TRL from '../assets/inno_clock.svg';
import Business from '../assets/inno_strategy.svg';
import Cost from '../assets/inno_investor.svg';

const ProductDetails = () => {
  return (
    <div className='flex flex-col p-5 gap-5 bg-white border border-[#E5E7EB] rounded-xl'>
      <h1 className='text-[#374151] font-semibold'>Offer details</h1>
      <ul className='text-[#6B7280] flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 gap-5 lg:gap-x-8 rounded-md'>
        {/* Technology */}
        <li className='flex items-start gap-3'>
          <img src={Tech} alt="technology" />
          <div className='flex flex-col gap-1'>
            <span>Technology</span>
            <div className='flex gap-3'>
              <span className='bg-[#E5E7EB] rounded-3xl px-3 py-1'>Label 1</span>
              <span className='bg-[#E5E7EB] rounded-3xl px-3 py-1'>Label 2</span>
              <span className='bg-[#E5E7EB] rounded-3xl px-3 py-1'>Label 3</span>
            </div>
          </div>
        </li>
        {/* Business Model */}
        <li className='flex items-start gap-3'>
          <img src={Business} alt="technology" />
          <div className='flex flex-col gap-1'>
            <span>Business Model</span>
            <div className='flex gap-3'>
              <span className='bg-[#E5E7EB] rounded-3xl px-3 py-1'>Label 1</span>
              <span className='bg-[#E5E7EB] rounded-3xl px-3 py-1'>Label 2</span>
              <span className='bg-[#E5E7EB] rounded-3xl px-3 py-1'>Label 3</span>
            </div>
          </div>
        </li>
        {/* TRL */}
        <li className='flex items-start gap-3'>
          <img src={TRL} alt="technology" />
          <div className='flex flex-col gap-1'>
            <span>TRL</span>
            <div className='flex'>
              <span className='bg-[#E5E7EB] md:text-sm rounded-3xl px-3 py-1'>TRL 9 – Actual system proven in operational environment</span>
            </div>
          </div>
        </li>
        {/* Costs */}
        <li className='flex items-start gap-3'>
          <img src={Tech} alt="technology" />
          <div className='flex flex-col gap-1'>
            <span>Costs</span>
            <div className='flex'>
              <span className='bg-[#E5E7EB] rounded-3xl px-3 py-1'> {'<'} 1000 €</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProductDetails