import React from 'react'

const about = ({description}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
        <div className='text-2xl font-semibold text-[#DEC364] pb-4  '>
            About
        </div>
        <div className='font-medium text-black'>
          {description}
        </div>
    </div>
  )
}

export default about