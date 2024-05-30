import React from 'react'





const bussinesName = () => {
  
  return (
    <div className='flex justify-start flex-col items-start w-full '>
        <div className='flex w-full items-center pb-2 justify-start'>
          <img src="card3/gethub.png" alt="" className='h-[30px] w-[30px]'/>
          <div className='text-xl font-semibold text-black w-full flex items-center justify-start ml-2 h-full '>
            GetHub Link
          </div>
        </div>
        <div className='flex justify-start flex-col items-start pb-8 w-full overflow-x-auto scrollbar-hide relative'>
        <div className=' flex justify-start  items-center flex-row gap-5 w-auto '>
          <button className=' bg-white text-white  w-[144px] h-[52px] rounded-3xl flex justify-center items-center shadow'>
            <img src="shopee.png" alt="shopee" className='p-8' />
          </button>
          <button className=' bg-white text-white  w-[144px] h-[52px] rounded-3xl flex justify-center items-center shadow'>
            <img src="tiktok.png" alt="shopee" className='p-8' />
          </button>
          <button className=' bg-white text-white  w-[144px] h-[52px] rounded-3xl flex justify-center items-center shadow'>
            <img src="tokped.png" alt="shopee" className='p-8' />
          </button>
          <button className=' bg-white text-white  w-[144px] h-[52px] rounded-3xl flex justify-center items-center shadow'>
            <img src="tokped.png" alt="shopee" className='p-8' />
          </button>
        </div>
        </div>
    </div>

  )
}

export default bussinesName