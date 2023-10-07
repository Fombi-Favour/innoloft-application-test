import React from 'react'
import UploadMain from '../components/UploadMain';
import UserInfo from '../components/UserInfo';
import UploadVideo from '../components/UploadVideo';

const Edit = () => {
  return (
    <section className='py-5 pr-3 md:mx-2 lg:-ml-6'>
      {/* sub nav-bar */}
      <h1 className='font-semibold text-[#374151]'>Offer Title</h1>
      <div className='bg-white border-[1px] rounded-xl mt-4 grid grid-row-2 lg:grid-row-1 grid-cols-[auto] lg:grid-cols-[1fr_auto] lg:gap-2'>
        {/* upload image, title and description */}
        <UploadMain />
        {/* user information */}
        <UserInfo />
      </div>
      {/* upload video link */}
      <UploadVideo />
      {/* upload offer details */}
      <div className='flex flex-col p-5 gap-5 bg-white border border-[#E5E7EB] rounded-xl'>
        <h1 className='text-[#374151] font-semibold'>Offer details</h1>
        <span className='text-[#BF1C26] font-semibold text-sm'>This is up to you :{')'} </span>
      </div>
    </section>
  )
}

export default Edit