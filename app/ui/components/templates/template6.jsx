'use client';

import React from 'react'
import CardComponents from '../section/cardModel';
import AboutComponents from '../section/aboutModel';
import LinksComponents from '../section/linksModel';
import ProductComponent from '../section/productsModel';

const template6 = (data) => {
  return (
    <div id="#for font" className="flex justify-center h-auto ">
        <div className='h-auto flex flex-col items-center px-6 lg:p-0' style={{ width: '430px' }}>
            <CardComponents.cardModel6 {...data} />

            <div className='flex flex-col items-center w-full px-8 relative  '>
            <AboutComponents.aboutModel6 {...data} />
            <LinksComponents.linksModel6 {...data} />
            <ProductComponent.productsModel6 {...data} />
            </div>
        </div>
    </div>
  )
}

export default template6