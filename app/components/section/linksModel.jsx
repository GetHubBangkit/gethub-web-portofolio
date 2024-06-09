'use client';
import React from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { sliderLeft, sliderRight,ButtonLinkHorizontal, ButtonLinkVertical, ButtonLinkGrid } from '../utils/linkUtils';

const notFilled = {
  dash: 'Silahkan Tambahkan Link untuk memperbagus digital portofolio kamu _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _'
}

const Header = ({ icon, sectionColor }) => (
  <div className='flex justify-start flex-col items-start w-full'>
    <div className='flex w-full items-center pb-4 justify-start'>
      <img src={icon} alt="" className='h-[30px] w-[30px]'/>
      <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
        Get <span className='text-black text-xl' style={{color: sectionColor}}> Hub Link </span>
      </div>
    </div>
  </div>
);

const linksModel1 = ({data, sectionColor}) => {
    const links = data.links;
    if(!data || links.length === 0) {
      return (
        <>
          <Header icon={data?.background_card?.icon} sectionColor={sectionColor} />
          <p className="text-black text-xs pb-6"> { notFilled.dash }</p>
        </>
      );
    }
    return(
      <>
        <Header icon={data.background_card.icon} sectionColor={sectionColor} />
        <div className='flex relative items-center h-auto w-full pb-6'>
          <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100' />
          <div id="sliderLink" className=' flex overflow-x-scroll w-full h-full whitespace-nowrap scroll scroll-smooth scrollbar-hide gap-2'>
            {links.map((link, index) => (
              <ButtonLinkHorizontal key={index} sosmedLink={link} />
            ))}
          </div>
          <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100'/>
        </div>
      </>
    );
}

const linksModel2 = ({data, sectionColor, buttonColor}) => {
  const links = data.links;
  if(!data || links.length === 0) {
    return (
      <>
        <Header icon={data?.background_card?.icon} sectionColor={sectionColor} />
        <p className="text-black text-xs pb-6">{ notFilled.dash }</p>
      </>
    );
  }
  return (
      <>
        <Header icon={data.background_card.icon} sectionColor={sectionColor} />
        <div className='flex relative items-center h-auto pb-6 w-full'>
          <div id="sliderLink" className='flex flex-col justify-center items-center gap-6 w-full'>
            {links.map((link, index) => (
              <ButtonLinkVertical color = {buttonColor}  key={index} sosmedLink={link} />
            ))}
          </div>
        </div>
      </>
  )
}

const linksModel3 = (data) => {
  const links = data.links;
  if(!data || links.length === 0) {
    return (
      <>
        <p className="text-black text-xs pb-6 mt-[-150px]">{ notFilled.dash }</p>
      </>
    );
  }
  return (
      <div className='flex justify-center flex-col items-center w-full pb-6 mt-[-150px]'>
          <div id="sliderLink" className='flex justify-center w-[full] h-full gap-4 flex-wrap'>
              {links.map((link, index) => (
                  <ButtonLinkGrid key={index} sosmedLink={link} />
              ))}
          </div>
      </div>
  )
}
const LinksComponents = {
    linksModel1,
    linksModel2,
    linksModel3,
  };
export default LinksComponents;