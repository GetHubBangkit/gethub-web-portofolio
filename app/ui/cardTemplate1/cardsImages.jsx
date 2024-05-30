import React from 'react'
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from 'react-icons/ai';

const cardsImages = ({background, name, bussines, contact, location, email, logo, company, tagline, color1, color2  }) => {
  return (
    <div className='flex items-center justify-center sm:w-1/4 md:w-1/4 lg:w-auto' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', width :'auto', height: '240px', backgroundPosition : 'center',borderRadius: '15px'}}>

    <div className='flex justify-between  w-full h-full  items-center '>

      {/* right side  */}
      <div className='   flex flex-col justify-center items-start h-full p-4 '>
      <h1 style={{ color: color1 }} className="font-bold"> {name} </h1>
      <p className='pb-10 font-medium text-golden'> {bussines} </p>
      <div className='flex items-center pb-1'>
          <AiOutlinePhone className="mr-2 text-sm" style={{ color: color1 }} />
          <p style={{ color: color1 }} className="font-normal text-xs">{contact}</p>
      </div>
      <div className='flex items-center pb-1'>
          <AiOutlineEnvironment className="mr-2 text-sm" style={{ color: color1 }} />
          <p style={{ color: color1 }} className="font-normal text-xs">{location}</p>
      </div>
      <div className='flex items-center pb-1'>
          <AiOutlineMail className="mr-2 text-sm" style={{ color: color1 }} />
          <p style={{ color: color1 }} className="font-normal text-xs">{ email }</p>
      </div>
    </div>
      

      {/* left side  */}
      <div className='w-1/2  flex flex-col items-center p-8  '>
        <img src={ logo } alt="logo" className='p-2' style={{ width : '312px', height : 'auto' }}/>
        <h1 className='text-[#DEC364] font-bold text-center '>{company}</h1>
        <h1 style={{ color: color2 }} className="font-light text-sm text-center"> {tagline} </h1>
      </div>

    </div>
    </div>
  )
}

export default cardsImages