'use client';

import React from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';


// komponen product card 
const ProductCard = ({ product }) => (
  <div className='w-44 inline-block h-auto cursor-pointer hover:scale-105 p-2 ease-in-out duration-300 '>
    <img className='rounded-2xl rounded-b-none bg-white w-44 h-32' src={product.image} alt='Product' />
    <h1 className='mt-4 font-bold text-xs text-[#0D6375]'>Rp. {product.price}</h1>
    <h1 className=' font-bold text-xs text-black mb-2'>{product.name}</h1>
    <p className='text-black text-xs line-clamp-3'>{product.description}</p>
  </div>
);


// data product
const Product = ({products}) => {
  

  // function to scroll the slider
  const sliderLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 200;
  }
  const sliderRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 200;
  }

  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
      <div className='flex w-full items-center pb-4 justify-start'>
        <img src="card1/gethub.png" alt="" className='h-[30px] w-[30px]' />
        <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full ' style={{ color:'#0D6375' }}>
          Produk / Jasa
        </div>
      </div>
      <div className='flex relative items-center  h-auto w-full'>
      <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
        <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
          {products.map((product, index) => <ProductCard key={index} product={product} />)}
        </div> 
        <MdChevronRight onClick={sliderRight} size={40} color='black' className='opacity-50 cursor-pointer hover:opacity-100'/>
      </div>
    </div>
  );
};

export default Product;
