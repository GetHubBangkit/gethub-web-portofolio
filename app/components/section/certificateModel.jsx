'use client';
import React from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { sliderLeftCertificate, sliderRightCertificate } from '../utils/certificateUtils';
import certificateUtils from '../utils/certificateUtils';

const Header = ({ icon, sectionColor }) => (
  <div className='flex justify-start flex-col items-start w-full'>
    <div className='flex w-full items-center pb-4 justify-start'>
      <img src={icon} alt="" className='h-[30px] w-[30px]' />
      <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full ' style={{ color: sectionColor }}>
        Certifications
      </div>
    </div>
  </div>
);

const certificateModel1 = ({data, sectionColor}) => {
  const   certifications = data.certifications;
  if(!data || certifications.length === 0) {
    return (
      <>
        <Header icon={data?.backgroundCard?.icon} sectionColor={sectionColor} />
        <p className="text-red-500 text-xs pb-6">Belum ada Certification yang dimasukan, silahkan lengkapi profile 
          terlebih dahulu pada aplikasi GetHub.</p>
      </>
    );
  }
  return (
    <>
    <Header icon={data?.backgroundCard?.icon} sectionColor={sectionColor} />
      <div className='flex relative items-center  h-auto w-full'>
      <MdChevronLeft onClick={sliderLeftCertificate} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
        <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
          {certifications.map((certificate, index) => <certificateUtils.certificateCard key={index} certificate={certificate} priceColor= '#0D6375' />)}
        </div> 
      <MdChevronRight onClick={sliderRightCertificate} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
      </div>
    </>
  )
}

const certificateModel2 = ({data, sectionColor}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
    <div className='flex w-full items-center pb-4 justify-start'>
        <img src={data.backgroundCard.icon} alt="" className='h-[30px] w-[30px]' />
        <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full ' style={{ color: sectionColor }}>
        Certifications
      </div>
    </div>
    <div className='flex relative items-center gap-3 h-auto w-full'>
      <div id="slider" className='grid grid-flow-row grid-cols-2 w-full'>
      {data.certifications.map((certificate, index) => <certificateUtils.certificateCard2 key={index} product={certificate} priceColor= '#0D6375' />)}
      </div>
    </div>
    </div>
  )
}

const CertificateComponent = {
    certificateModel1,
    certificateModel2,
}

export default CertificateComponent;