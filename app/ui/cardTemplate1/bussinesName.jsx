import React from 'react'
import { FaLinkedin, FaGoogle,FaInstagram } from 'react-icons/fa';


const bussinesName = ({company, bussines} ) => {
  return (
    <div className='flex justify-center flex-col items-center pb-10 pt-10'>
        <div>
            <h1 className='text-4xl font-black pb-2 text-center'> { company } </h1>
        </div>
        <div className='text-2xl font-semibold text-[#DEC364] pb-8  '>
            { bussines }
        </div>
            <div className='flex justify-center space-x-8 items-center '>
            <button className='bg-red-500 text-white py-2 px-4 rounded-full flex justify-center items-center'>
                <FaGoogle className='mr-1' />
                <span className='hidden md:inline'>email</span>
            </button>
            <button className='bg-blue-500 text-white py-2 px-4 rounded-full flex justify-center items-center'>
                <FaLinkedin className='mr-1' />
                <span className='hidden md:inline'>linkedIn</span>
            </button>
            <button className='bg-pink-500 text-white py-2 px-4 rounded-full flex justify-center items-center'>
                <FaInstagram className='mr-1' />
                <span className='hidden md:inline'>instagram</span>
            </button>
            
        </div>
    </div>

  )
}

export default bussinesName