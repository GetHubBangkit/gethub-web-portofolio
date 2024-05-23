'use client';

import React from 'react'
import CardComponents from '../section/cardModel';
import AboutComponents from '../section/aboutModel';
import LinksComponents from '../section/linksModel';
import ProductComponent from '../section/productsModel';

const template4 = (data) => {
  return (
    <div id="#for font" className="flex justify-center h-auto ">
        <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
            <CardComponents.cardModel4 {...data} />

            <div className='flex flex-col items-center w-full px-8 relative  '>
           
            <LinksComponents.linksModel4 {...data} />
            <AboutComponents.aboutModel4 {...data} />
            <ProductComponent.productsModel4 {...data} />
            </div>
        </div>
    </div>
  )
}

export default template4