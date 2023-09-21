import React from 'react'
import { IoChevronDown } from 'react-icons/io5';
import Profile from '../assets/profil 1.png';
import Home from '../assets/inno_home.svg';
import Members from '../assets/inno_group.svg';
import Organise from '../assets/inno_organizations.svg';

const Menubar = () => {
  return (
    <main className='hidden md:flex md:w-[400px] md:p-5 md:pl-36'>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-3'>
          <img src={Profile} alt="profile-pic" className='rounded-full' />
          <div className='flex flex-col text-[#374151]'>
            <span className='text-[18px] font-semibold'>Sven Pietsch</span>
            <span className='text-[14px]'>Innoloft GmbH</span>
          </div>
        </div>
        <ul className='flex flex-col gap-3'>
          <li className='flex items-center gap-3'>
            <img src={Home} alt="home" />
            <span>Home</span>
          </li>
          <li className='flex items-center gap-3'>
            <img src={Members} alt="members" />
            <span>Members</span>
          </li>
          <li className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
            <img src={Organise} alt="organisation" />
            <span>Organizations</span>
            </div>
            <IoChevronDown />
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Menubar