import React from 'react'

const product = () => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
        <div className='text-2xl font-semibold text-[#DEC364] pb-4 flex justify-center items-start'>
            product
        </div>
        <div class="flex flex-wrap justify-center items-center w-full">
            <div className='border border-gray-300 p-4 rounded-lg bg-white w-32 h-32 m-2'> 01 </div>
            <div className='border border-gray-300 p-4 rounded-lg bg-white w-32 h-32 m-2'> 02 </div>
            <div className='border border-gray-300 p-4 rounded-lg bg-white w-32 h-32 m-2'> 03 </div>
            <div className='border border-gray-300 p-4 rounded-lg bg-white w-32 h-32 m-2'> 04 </div>
            <div className='border border-gray-300 p-4 rounded-lg bg-white w-32 h-32 m-2'> 05 </div>
            <div className='border border-gray-300 p-4 rounded-lg bg-white w-32 h-32 m-2'> 06 </div>
            </div>
        </div>
  )
}

export default product