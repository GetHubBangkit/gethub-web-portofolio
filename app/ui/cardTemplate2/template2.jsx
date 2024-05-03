'use client';

import React from 'react'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';


// komponen product card 
const ProductCard = ({ product }) => (
  <div className='w-44 inline-block h-auto cursor-pointer hover:scale-105 p-2 ease-in-out duration-300 '>
    <img className='rounded-2xl rounded-b-none bg-white w-44 h-32' src={product.image} alt='Product' />
    <h1 className='mt-4 font-bold text-xs text-[#4B7328]'>Rp. {product.price}</h1>
    <h1 className=' font-bold text-xs text-black mb-2'>{product.name}</h1>
    <p className='text-black text-xs line-clamp-3'>{product.description}</p>
  </div>
);



// buttonlink component
const ButtonLink = ({ links }) => (
  <a href={ links.link }>
    <button className=' bg-white text-white  w-80 h-[52px] rounded-3xl flex justify-center items-center shadow'>
      <img src={
        links.category === 'tiktok' ? 'tiktok.png' :
        links.category === 'tokopedia' ? 'tokped.png' :
        links.category === 'shopee' ? 'shopee.png' :
        'ig.png'
      } alt={links.category} className='' />
    </button>
  </a>
);

const  template2 = ({data}) => {
  // define the links and products
  const links = data.links
  const products = data.products
  // function to scroll the slider link


  const sliderLeftLink = () => {
    var slider = document.getElementById('sliderLink');
    slider.scrollLeft = slider.scrollLeft - 200;
  }
  const sliderRightLink = () => {
    var slider = document.getElementById('sliderLink');
    slider.scrollLeft = slider.scrollLeft + 200;
  }

    // function to scroll the slider product
  const sliderLeftProduct = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 200;
  }
  const sliderRightProduct= () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 200;
  }




  return (  
    
    <div id="template2" className="flex justify-center h-auto ">
      <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
        {/* header background */}
            <div className='w-full h-[152px] bg-red-500' style={{ backgroundImage: `url('/card2/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            </div>
        <div className='flex flex-col items-center w-full p-8 relative  '>


        {/* kontainer have card image */}
        <div className='flex items-center justify-center w-full lg:w-full relative ' style={{ backgroundImage: `url('card2/card2.png')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition : 'center',borderRadius: '15px', transform: 'translateY(-70%)'}}>
            <div className='flex justify-between  w-full h-[197px]  items-center '>

            {/* right side  */}
            <div className='   flex flex-col justify-center items-start h-full w-3/4 p-5 '>
            <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-white"> {data.name} </h1>

            {/* bussines name */} 
            <p className='pb-2.5 font-normal text-xs text-white'> {data.bussines} </p>


            {/* phone number */}
            <div className='flex items-center '>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2 '  />
                <p  className=" text-xs text-white">{data.phone}</p>
            </div>

            {/* email */}
            <div className='flex items-center '>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2 '  />
                <p className="font-normal text-xs text-white">{ data.email }</p>
            </div>

            {/* link gethub */}
            <div className='flex items-center pb-3'>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2 ' />
                <p  className="font-normal text-xs text-white truncate ">{`${data.username}.gethub.com`}</p>
            </div>

            {/* location */}
            <p className='text-white text-xs '> { data.address }  </p>
            </div>
            

            {/* left side  */}
            {/* qr code */}
            <div className='w-1/3 h-full justify-center  flex flex-col items-start  '>
                <img src={ data.codeqr } alt="logo" className='text-center items-center' style={{ width : '78px', height : '77px' }}/>
            </div>

            </div>
        </div>
         
        {/* about section  */}
        <div className='flex justify-start flex-col items-start pb-6 w-full mt-[-120px]'>
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

        {/* product */}
        <div className='flex justify-start flex-col items-start pb-10 w-full'>
            <div className='flex w-full items-center pb-4 justify-start'>
                <img src="card2/gethub.png" alt="" className='h-[30px] w-[30px]' />
                <div className='text-xl font-bold text-[#4B7328] w-full flex items-center justify-start ml-2 h-full '>
                Produk / Jasa
                </div>
            </div>
            <div className='flex relative items-center  h-auto w-full'>
            <MdChevronLeft onClick={sliderLeftProduct} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
              <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
                {products.map((product, index) => <ProductCard key={index} product={product} />)}
              </div> 
            <MdChevronRight onClick={sliderRightProduct} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
            </div>
        </div>


        {/* nama bisnis and social media */}
        <div className='flex justify-start flex-col items-start w-full pb-6'>
        <div className='flex w-full items-center pb-2 justify-start'>
          <img src="card2/gethub.png" alt="" className='h-[30px] w-[30px]'/>
          <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full '>
          Get <span className='text-black text-xl' style={{color: '#4B7328'}}> Hub Link </span>
          </div>
        </div>
        <div className='flex relative items-center h-auto w-full'>
          <div id="sliderLink" className='flex flex-col justify-center items-center gap-6 w-full'>
            {links.map((link, index) => (
              <ButtonLink key={index} links={link} />
            ))}
          </div>
        </div>
        </div>

        </div>
        </div>
        </div>

  )
}

export default  template2