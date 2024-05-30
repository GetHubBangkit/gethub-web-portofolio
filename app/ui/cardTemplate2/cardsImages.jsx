import React from 'react'
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from 'react-icons/ai';

const cardsImages = ({background, name, bussines, contact, link, email, logo, color1    }) => {
  return (
    <div className='flex items-center justify-center w-full lg:w-full relative ' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition : 'center',borderRadius: '15px', transform: 'translateY(-70%)'}}>

    <div className='flex justify-between  w-full h-[197px]  items-center '>

      {/* right side  */}
      <div className='   flex flex-col justify-center items-start h-full w-3/4 p-5 '>
      <h1 style={{ color: color1 }} className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg"> {name} </h1>

      {/* bussines name */} 
      <p className='pb-2.5 font-normal text-xs text-black'> {bussines} </p>


      {/* phone number */}
      <div className='flex items-center '>
          <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2 ' style={{ color: color1 }} />
          <p style={{ color: color1 }} className=" text-xs">{contact}</p>
      </div>

      {/* email */}
      <div className='flex items-center '>
          <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2 ' style={{ color: color1 }} />
          <p style={{ color: color1 }} className="font-normal text-xs">{ email }</p>
      </div>

      {/* link gethub */}
      <div className='flex items-center pb-3'>
          <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2 ' style={{ color: color1 }} />
          <p style={{ color: color1 }} className="font-normal text-xs">{link}</p>
      </div>

      {/* location */}
      <p className='text-black text-xs '> Bogor, Jawa Barat  </p>
    </div>
      

      {/* left side  */}
      {/* qr code */}
      <div className='w-1/3 h-full justify-center  flex flex-col items-start  '>
        <img src={ logo } alt="logo" className='text-center items-center' style={{ width : '78px', height : '77px' }}/>
      </div>

    </div>
    </div>
  )
}

export default cardsImages