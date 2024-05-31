'use client';
import React from 'react';

const aboutModel1 = (data) => {
    return (
        <div className='flex justify-start flex-col items-start pb-5 w-full mt-[-150px]'>
        <div className='flex w-full items-center pb-4 justify-start'>
            <img src={data.background_card.icon} alt="" className='h-[30px] w-[30px]'/>
            <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
            Tentang Saya
            </div>
        </div>
        <div className='font-normal text-xs w-full text-wrap' style={{ color : data.about ? 'black' : 'red' }}>
            {data.about ? data.about : 'Deskripsi belum diisi'}
        </div>
        </div>
    );
}

const aboutModel2 = (data) => {
    return (
        <>
        <div className='flex justify-start flex-col items-start align-center pb-6 w-full mt-[-150px]'>
            <div className='font-medium text-black text-center items-center text-xs w-full text-wrap'>
            {data.about}
            </div>
        </div>
        </>
    );
}

const aboutModel3 = ({data, sectionColor}) => {
    return (
        <div className='flex justify-start flex-col items-start pb-5 w-full'>
        <div className='flex w-full items-center pb-4 justify-start'>
            <img src={data.background_card.icon} alt="" className='h-[30px] w-[30px]'/>
            <div className='text-xl font-bold w-full flex items-center justify-start ml-2 h-full' style = {{ color : sectionColor }}>
            Tentang Saya
            </div>
        </div>
        <div className='font-normal text-black text-xs w-full text-wrap'>
            {data.about}
        </div>
        </div>
    );
}

const AboutComponents = {
    aboutModel1,
    aboutModel2,
    aboutModel3,
};
  

export default AboutComponents;