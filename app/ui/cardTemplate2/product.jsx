import React from 'react'

const product = () => {



  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
        <div className='flex w-full items-center pb-4 justify-start'>
          <img src="card3/gethub.png" alt="" className='h-[30px] w-[30px]'/>
          <div className='text-xl font-semibold text-black w-full flex items-center justify-start ml-2 h-full '>
            Produk / Jasa
          </div>
        </div>
        <div className=' justify-start  grid grid-flow-col gap-3 items-start pb-8 w-full overflow-x-auto scrollbar-hide relative'>
          <div className=' w-44 h-full'> 
            <div className=' rounded-2xl rounded-b-none bg-white w-44 h-32 '  style={{ backgroundImage: `url('product.png')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition : 'center'}}></div>
            <h1 className='pt-4 font-bold text-xs text-black'> Web Inventaris </h1>
            <p className='text-black text-xs'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className=' w-44 h-32 '> 
            <div className=' rounded-2xl rounded-b-none bg-white w-44 h-32 '  style={{ backgroundImage: `url('product.png')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition : 'center'}}></div>
            <h1 className='pt-4 font-bold text-xs text-black'> Web Inventaris </h1>
            <p className='text-black text-xs'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className=' w-44 h-32 '> 
            <div className=' rounded-2xl rounded-b-none bg-white w-44 h-32 '  style={{ backgroundImage: `url('product.png')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition : 'center'}}></div>
            <h1 className='pt-4 font-bold text-xs text-black'> Web Inventaris </h1>
            <p className='text-black text-xs'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className=' w-44 h-32 '> 
            <div className=' rounded-2xl rounded-b-none bg-white w-44 h-32 '  style={{ backgroundImage: `url('product.png')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition : 'center'}}></div>
            <h1 className='pt-4 font-bold text-xs text-black'> Web Inventaris </h1>
            <p className='text-black text-xs'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

           
        </div>
    </div>
  )
}

export default product