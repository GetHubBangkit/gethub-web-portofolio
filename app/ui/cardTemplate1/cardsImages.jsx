import React from 'react'
const cardsImages = ({ name, bussines, contact, url, email, codeqr, address }) => {
  return (
    <div className='flex items-center justify-center w-full lg:w-full relative ' style={{ backgroundImage: `url('card3/card3.png')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition : 'center',borderRadius: '15px', transform: 'translateY(-70%)'}}>

    <div className='flex justify-between  w-full h-[197px]  items-center '>

      {/* right side  */}
      <div className='   flex flex-col justify-center items-start h-full w-3/4 p-5 '>
      <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-black"> {name} </h1>

      {/* bussines name */} 
      <p className='pb-2.5 font-normal text-xs text-black'> {bussines} </p>


      {/* phone number */}
      <div className='flex items-center '>
          <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2 '  />
          <p  className=" text-xs text-black">{contact}</p>
      </div>

      {/* email */}
      <div className='flex items-center '>
          <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2 '  />
          <p className="font-normal text-xs text-black">{ email }</p>
      </div>

      {/* link gethub */}
      <div className='flex items-center pb-3'>
          <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2 ' />
          <p  className="font-normal text-xs text-black">{url}</p>
      </div>

      {/* location */}
      <p className='text-black text-xs '> { address }  </p>
    </div>
      

      {/* left side  */}
      {/* qr code */}
      <div className='w-1/3 h-full justify-center  flex flex-col items-start  '>
        <img src={ codeqr } alt="logo" className='text-center items-center' style={{ width : '78px', height : '77px' }}/>
      </div>

    </div>
    </div>
  )
}

export default cardsImages