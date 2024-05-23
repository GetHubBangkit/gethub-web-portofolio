'use client';

import React from 'react'
import CardComponents from '../section/cardModel';
import AboutComponents from '../section/aboutModel';
import LinksComponents from '../section/linksModel';
import ProductComponent from '../section/productsModel';

const template3 = (data) => {
  return (
    <div id="#for font" className="flex justify-center h-auto ">
        <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
            <CardComponents.cardModel3 {...data} />

            <div className='flex flex-col items-center w-full px-8 relative  '>
            <AboutComponents.aboutModel3 {...data} />
            <LinksComponents.linksModel3 {...data} />
            <ProductComponent.productsModel3 {...data} />
            </div>
        </div>
    </div>
  )
}

export default template3