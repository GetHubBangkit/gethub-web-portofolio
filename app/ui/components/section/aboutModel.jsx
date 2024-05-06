'use client';

import React from 'react';


// about model 1
const aboutModel1 = (data) => {
    return (
        <div className='flex justify-start flex-col items-start pb-5 w-full mt-[-150px]'>
        <div className='flex w-full items-center pb-4 justify-start'>
            <img src="card1/gethub.png" alt="" className='h-[30px] w-[30px]'/>
            <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
            Tentang Saya
            </div>
        </div>
        <div className='font-normal text-black text-xs w-full text-wrap'>
            {data.about}
        </div>
        </div>
    );
}

// about model 2
const aboutModel2 = (data) => {
    return (
        <div className='flex justify-start flex-col items-start pb-5 w-full mt-[-150px]'>
        <div className='flex w-full items-center pb-4 justify-start'>
            <img src="card2/gethub.png" alt="" className='h-[30px] w-[30px]'/>
            <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
            Tentang Saya
            </div>
        </div>
        <div className='font-normal text-black text-xs w-full text-wrap'>
            {data.about}
        </div>
        </div>
    );
}

// about model 3
const aboutModel3 = (data) => {
    return (
        <div className='flex justify-start flex-col items-start pb-5 w-full mt-[-150px]'>
        <div className='flex w-full items-center pb-4 justify-start'>
            <img src="card3/gethub.png" alt="" className='h-[30px] w-[30px]'/>
            <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
            Tentang Saya
            </div>
        </div>
        <div className='font-normal text-black text-xs w-full text-wrap'>
            {data.about}
        </div>
        </div>
    );
}

// about model 4
const aboutModel4 = (data) => {
    return (
        <div className='flex justify-start flex-col items-start pb-5 w-full '>
        <div className='flex w-full items-center pb-4 justify-start'>
            <img src="card4/gethub.png" alt="" className='h-[30px] w-[30px]'/>
            <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
            Tentang Saya
            </div>
        </div>
        <div className='font-normal text-black text-xs w-full text-wrap'>
            {data.about}
        </div>
        </div>
    );
}

// about model 5
const aboutModel5 = (data) => {
    return (
        <div className='flex justify-start flex-col items-start pb-5 w-full mt-[-150px]'>
        <div className='flex w-full items-center pb-4 justify-start'>
            <img src="card5/gethub.png" alt="" className='h-[30px] w-[30px]'/>
            <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
            Tentang Saya
            </div>
        </div>
        <div className='font-normal text-black text-xs w-full text-wrap'>
            {data.about}
        </div>
        </div>
    );
}

// about model 6
const aboutModel6 = (data) => {
    return (
        <>
        {/* about section */}
        <div className='flex justify-start flex-col items-start align-center pb-6 w-full mt-[-150px]'>
            <div className='font-medium text-black text-center items-center text-xs w-full text-wrap'>
            {data.about}
            </div>
        </div>
        </>
    );
}


// Export semua komponen dalam satu objek
const AboutComponents = {
    aboutModel1,
    aboutModel2,
    aboutModel3,
    aboutModel4,
    aboutModel5,
    aboutModel6
  };
  

export default AboutComponents;