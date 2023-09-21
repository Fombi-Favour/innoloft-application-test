import React from "react";
import { IoChevronDown, IoNotificationsOutline, IoSearchOutline, IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import Logo from "../assets/logo.svg";
import Profile from '../assets/profil 1.png';

const Navbar = () => {
  return (
    <nav className="bg-[#272E71] p-3 px-5 md:p-2 md:px-2 flex md:justify-around">
      <img src={Logo} alt="logo" />
      <div className='hidden md:flex md:items-center gap-20 lg:gap-48'>
        <div className="w-[380px] lg:w-[500px] h-[27px] rounded-sm bg-white flex items-center gap-1 px-3">
          <input
            type="text"
            placeholder="Enter interest, keyword, company name, etc."
            className="w-full outline-none"
          />
          <IoSearchOutline className='rotate-90' />
        </div>
        <div className="flex items-center gap-2">
          <IoChatbubbleEllipsesOutline color="#fff" />
          <div className='bg-transparent text-white flex items-center gap-1'>
            <span>EN</span>
            <IoChevronDown />
          </div>
          <IoNotificationsOutline color="#fff" />
          <div className='flex items-center gap-1'>
            <img src={Profile} alt="profile-pic" className='w-8 rounded-full' />
            <IoChevronDown color="#fff" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
