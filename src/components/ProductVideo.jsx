import React from 'react'

const ProductVideo = () => {
  return (
    <div className='mt-3 flex flex-col p-5 bg-white border border-[#E5E7EB] rounded-xl'>
      <h1 className='text-[#374151] font-semibold'>Video</h1>
      <div className='flex items-center justify-center'>
        <iframe width="715" height="400" 
          src="https://www.youtube.com/embed/6vA4BuJM3_g?si=z5MM7LxJyxkgIYrW" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}

export default ProductVideo