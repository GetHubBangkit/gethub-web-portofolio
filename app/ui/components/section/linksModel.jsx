'use client';

import Link from 'next/link';
import React from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';


// Functions to scroll the slider
const sliderLeft = () => {
    var slider = document.getElementById('sliderLink');
    slider.scrollLeft -= 200;
};
  
const sliderRight = () => {
    var slider = document.getElementById('sliderLink');
    slider.scrollLeft += 200;
};

// buttonlink component horizontal
const ButtonLinkHorizontal = ({ sosmedLink }) => (
  <a href={ sosmedLink.link }>
    <button className='w-[144px] h-[52px] rounded-3xl flex justify-center items-center shadow'>
      <img src={
        sosmedLink.category === 'tiktok' ? 'tiktok.png' :
        sosmedLink.category === 'tokopedia' ? 'tokped.png' :
        sosmedLink.category === 'shopee' ? 'shopee.png' :
        'tiktok.png'
      }  className='' />
    </button>
  </a>
);

// buttonlink component vertical
const ButtonLinkVertical = ({ sosmedLink, color }) => (
  <a href={ sosmedLink.link }>
    <button style={{ backgroundColor: color }} className="w-[344px] h-[52px] rounded-3xl flex justify-center items-center shadow">
      <img src={
        sosmedLink.category === 'tiktok' ? 'tiktok.png' :
        sosmedLink.category === 'tokopedia' ? 'tokped.png' :
        sosmedLink.category === 'shopee' ? 'shopee.png' :
        'tiktok.png'
      }  className='' />
    </button>
  </a>
);

// buttonlink component grid
const ButtonLinkGrid = ({ sosmedLink }) => (
    <a href={ sosmedLink.link }>
      <button className='bg-white text-white w-[60px] h-[35px] rounded-md flex justify-center items-center shadow-lg'>
        <img src={
          sosmedLink.category === 'tiktok' ? '/card4/tiktok.png' :
          sosmedLink.category === 'tokopedia' ? '/card4/tokped.png' :
          sosmedLink.category === 'shopee' ? '/card4/shopee.png' :
          '/card4/shopee.png'
        }  className='' />
      </button>
    </a>
  );
  
// link model 1 
const linksModel1 = (data) => {
    const links = data.links;
    return(
    
    <div className='flex justify-start flex-col items-start w-full pb-6 '>
    <div className='flex w-full items-center pb-4 justify-start'>
      <img src="card1/gethub.png" alt="" className='h-[30px] w-[30px]'/>
      <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
        Get <span className='text-black text-xl' style={{color: '#0D6375'}}> Hub Link </span>
      </div>
    </div>
    <div className='flex relative items-center h-auto w-full'>
      <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100' />
        <div id="sliderLink" className=' flex overflow-x-scroll w-full h-full whitespace-nowrap scroll scroll-smooth scrollbar-hide gap-2'>
          {links.map((link, index) => (
            <ButtonLinkHorizontal key={index} sosmedLink={link} />
          ))}
        </div>
      <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100'/>
    </div>
    </div>

    );
}


// link model 2
const linksModel2 = (data) => {
    const links = data.links;
  return (
        <div className='flex justify-start flex-col items-start w-full pb-6'>
        <div className='flex w-full items-center pb-2 justify-start'>
          <img src="card2/gethub.png" alt="" className='h-[30px] w-[30px]'/>
          <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
          Get <span className='text-black text-xl' style={{color: '#4B7328'}}> Hub Link </span>
          </div>
        </div>
        <div className='flex relative items-center h-auto w-full'>
          <div id="sliderLink" className='flex flex-col justify-center items-center gap-6 w-full'>
            {links.map((link, index) => (
              <ButtonLinkVertical color= '' key={index} sosmedLink={link} />
            ))}
          </div>
        </div>
        </div>
  )
}

// link model 3
const linksModel3 = (data) => {
    const links = data.links;
  return (
    <div className='flex justify-start flex-col items-start w-full pb-6 '>
    <div className='flex w-full items-center pb-4 justify-start'>
        <img src="card3/gethub.png" alt="" className='h-[30px] w-[30px]'/>
        <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
        Get <span className='text-black text-xl' style={{color: '#6207E4'}}> Hub Link </span>
        </div>
    </div>
    <div className='flex relative items-center h-auto w-full'>
      <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100' />
        <div id="sliderLink" className=' flex overflow-x-scroll w-full h-full whitespace-nowrap scroll scroll-smooth scrollbar-hide gap-2'>
          {links.map((link, index) => (
            <ButtonLinkHorizontal key={index} sosmedLink={link} />
          ))}
        </div>
      <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100'/>
    </div>
    </div>
  )
}

// link model 4
const linksModel4 = (data ) => {
    const links = data.links;
    return (
        <div className='flex justify-center flex-col items-center w-full pb-10 mt-[-100px] mt-[-150px]'>
        <div id="sliderLink" className='grid grid-flow-row grid-cols-4  w-[full] h-full gap-4'>
          {links.map((link, index) => (
            <ButtonLinkGrid key={index} sosmedLink={link} />
          ))}
        </div>
      </div>
    )
  }

// link model 5
const linksModel5 = (data) => {
    const links = data.links;
  return (
        <div className='flex justify-start flex-col items-start w-full pb-6'>
        <div className='flex w-full items-center pb-2 justify-start'>
            <img src="card5/gethub.png" alt="" className='h-[30px] w-[30px]'/>
            <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
            Get <span className='text-black text-xl' style={{color: '#F08A8A'}}> Hub Link </span>
            </div>
        </div>
        <div className='flex relative items-center h-auto w-full'>
          <div id="sliderLink" className='flex flex-col justify-center items-center gap-6 w-full'>
            {links.map((link, index) => (
              <ButtonLinkVertical color= '#FFD7D7' key={index} sosmedLink={link} />
            ))}
          </div>
        </div>
        </div>
  )
}

// link model 6
const linksModel6 = (data) => {
    const links = data.links;
    return (
          <div className='flex justify-start flex-col items-start w-full pb-6'>
          <div className='flex w-full items-center pb-2 justify-start'>
              <img src="card6/gethub.png" alt="" className='h-[30px] w-[30px]'/>
              <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
              Get <span className='text-black text-xl' style={{color: '#357DEC'}}> Hub Link </span>
              </div>
          </div>
          <div className='flex relative items-center h-auto w-full'>
            <div id="sliderLink" className='flex flex-col justify-center items-center gap-6 w-full'>
              {links.map((link, index) => (
                <ButtonLinkVertical color= '#D2EEFC' key={index} sosmedLink={link} />
              ))}
            </div>
          </div>
          </div>
    )
}




// link prem here 

// link premium model 1
const premLinksModel1 = (data) => {
  const links = data.links;
  return (
        <div className='flex justify-start flex-col items-start w-full pb-6'>
        <div className='flex w-full items-center pb-2 justify-start'>
            <img src="premium/premCard1/gethub.png" alt="" className='h-[30px] w-[30px]'/>
            <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
            Get <span className='text-black text-xl' style={{color: '#B67352'}}> Hub Link </span>
            </div>
        </div>
        <div className='flex relative items-center h-auto w-full'>
          <div id="sliderLink" className='flex flex-col justify-center items-center gap-6 w-full'>
            {links.map((link, index) => (
              <ButtonLinkVertical color= '#F4D09B' key={index} sosmedLink={link} />
            ))}
          </div>
        </div>
        </div>
  )
}

// Export semua komponen dalam satu objek
const LinksComponents = {
    linksModel1,
    linksModel2,
    linksModel3,
    linksModel4,
    linksModel5,
    linksModel6,
    premLinksModel1

  };
export default LinksComponents;