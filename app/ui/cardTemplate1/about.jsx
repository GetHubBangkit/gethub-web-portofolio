import React from 'react'


const about = ({description}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-6 w-full mt-[-120px]'>
        <div className='flex w-full items-center pb-4 justify-start'>
          <img src="card1/gethub.png" alt="" className='h-[30px] w-[30px]'/>
          <div className='text-xl font-semibold text-black w-full flex items-center justify-start ml-2 h-full '>
            Tentang Saya
          </div>
            
        </div>
        <div className='font-normal text-black text-xs w-full text-wrap'>
          {description}
        </div>
    </div>
  )
}

export default about