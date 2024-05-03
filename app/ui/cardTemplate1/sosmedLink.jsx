
'use client';

import React from 'react'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

// buttonlink component
const ButtonLink = ({ sosmedLink }) => (
  <a href={ sosmedLink.link }>
    <button className='     w-[144px] h-[52px] rounded-3xl flex justify-center items-center shadow'>
      <img src={
        sosmedLink.category === 'tiktok' ? 'tiktok.png' :
        sosmedLink.category === 'tokopedia' ? 'tokped.png' :
        sosmedLink.category === 'shopee' ? 'shopee.png' :
        'ig.png'
      } alt={sosmedLink.category} className='' />
    </button>
  </a>
);


// data sosmed
const sosmedLink = ({ links }) => {
  

  // function to scroll the slider
  const sliderLeft = () => {
    var slider = document.getElementById('sliderLink');
    slider.scrollLeft = slider.scrollLeft - 200;
  }
  const sliderRight = () => {
    var slider = document.getElementById('sliderLink');
    slider.scrollLeft = slider.scrollLeft + 200;
  }

  
  return (
    <div className='flex justify-start flex-col items-start w-full pb-6 '>
        <div className='flex w-full items-center pb-4 justify-start'>
          <img src="card1/gethub.png" alt="" className='h-[30px] w-[30px]'/>
          <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
            Get <span className='text-black text-xl' style={{color: '#0D6375'}}> Hub Link </span>
          </div>
        </div>
        <div className='flex relative items-center h-auto w-full  py-4'>
          <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100' />
            <div id="sliderLink" className=' flex overflow-x-scroll w-full h-full whitespace-nowrap scroll scroll-smooth scrollbar-hide gap-2'>
              {links.map((link, index) => (
                <ButtonLink key={index} sosmedLink={link} />
              ))}
            </div>
          <MdChevronRight onClick={sliderRight} size={40} color='black' className='opacity-50 cursor-pointer hover:opacity-100'/>
        </div>
    </div>

  )
}

export default sosmedLink