import React from 'react'
import  { IoLocationOutline } from 'react-icons/io5';
import Map from  '../assets/map.png';
import Profile from '../assets/profil 1.png';

const UserInfo = () => {
  return (
    <div className='flex flex-col gap-4 p-2'>
      <span className='text-[#374151] font-semibold'>Offered By</span>
      <img src="https://img.innoloft.com/logo.svg" alt="logo" className='w-40' />
      {/* User */}
      <div className='flex items-center gap-3'>
        <img src={Profile} alt="profile-pic" className='rounded-full' />
        <div className='flex flex-col text-[#374151]'>
          <span className='text-[18px] font-semibold'>Sven Pietsch</span>
          <span className='text-[14px]'>Innoloft GmbH</span>
        </div>
      </div>
      {/* address */}
      <div className='flex gap-3'>
        <IoLocationOutline />
        <div className='text-[#6B7280] leading-5 flex flex-col'>
          <span>Jülicher Straße 72a,</span>
          <span>52070 Aachen, Germany</span>
        </div>
      </div>
      <img src={Map} alt="map" />
    </div>
  )
}

export default UserInfo