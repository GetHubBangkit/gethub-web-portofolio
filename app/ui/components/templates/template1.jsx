'use client';

import React from 'react'
import CardComponents from '../section/cardModel';
import AboutComponents from '../section/aboutModel';
import LinksComponents from '../section/linksModel';
import ProductComponent from '../section/productsModel';

const template1 = (data) => {
  return (
    <div id="#for font" className="flex justify-center h-auto ">
        <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
            <CardComponents.cardModel1 {...data} />

            <div className='flex flex-col items-center w-full px-8 relative  '>
            <AboutComponents.aboutModel1 {...data} />
            <LinksComponents.linksModel1 {...data} />
            <ProductComponent.productsModel1 {...data} />
            </div>
        </div>
    </div>
  )
}

export default template1