'use client';
import React from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { sliderLeftProduct, sliderRightProduct } from '../utils/productUtils';
import productUtils from '../utils/productUtils';

const notFilled = {
  dash: '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _'
}

const Header = ({ icon, sectionColor }) => (
  <div className='flex justify-start flex-col items-start w-full'>
    <div className='flex w-full items-center pb-4 justify-start'>
      <img src={icon} alt="" className='h-[30px] w-[30px]' />
      <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full ' style={{ color: sectionColor }}>
        Produk / Jasa
      </div>
    </div>
  </div>
);

const productsModel1 = ({data, sectionColor}) => {
  const   products = data.products;
  if(!data || products.length === 0) {
    return (
      <>
        <Header icon={data?.background_card?.icon} sectionColor={sectionColor} />
        <p className="text-black text-xs pb-6"> {notFilled.dash}</p>
      </>
    );
  }
  return (
    <>
    <Header icon={data?.background_card?.icon} sectionColor={sectionColor} />
      <div className='flex relative items-center pb-6 h-auto w-full'>
      <MdChevronLeft onClick={sliderLeftProduct} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
        <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
          {products.map((product, index) => <productUtils.productCard key={index} product={product} priceColor= '#0D6375' />)}
        </div> 
      <MdChevronRight onClick={sliderRightProduct} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
      </div>
    </>
  )
}

const productsModel2 = ({data, sectionColor}) => {
  const   products = data.products;
  if(!data || products.length === 0) {
    return (
      <>
        <Header icon={data?.background_card?.icon} sectionColor={sectionColor} />
        <p className="text-black text-xs pb-6"> {notFilled.dash}</p>
      </>
    );
  }
  return (
    <>
    <Header icon={data?.background_card?.icon} sectionColor={sectionColor} />
    <div className='flex relative items-center gap-3 h-auto w-full'>
      <div id="slider" className='grid grid-flow-row grid-cols-2 w-full'>
      {data.products.map((product, index) => <productUtils.productCard key={index} product={product} priceColor= '#0D6375' />)}
      </div>
    </div>
    </>
  )
}

const ProductComponent = {
    productsModel1,
    productsModel2,
}

export default ProductComponent;