import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Menubar from './Menubar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Menubar/>
        <Outlet />
      </div>
    </>
  )
}

export default Layout