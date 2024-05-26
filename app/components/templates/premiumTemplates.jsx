'use client';

import React from 'react';
import CardComponents from '../section/cardModel';
import AboutComponents from '../section/aboutModel';
import LinksComponents from '../section/linksModel';
import ProductComponent from '../section/productsModel';

export const PremiumTemplate1 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto">
            <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <AboutComponents.aboutModel2 {...data} />
                    <ProductComponent.productsModel1 {...{data : data, sectionColor: '#B67352'}} />
                    <LinksComponents.linksModel2 {...{data : data, sectionColor: '#B67352', buttonColor : '#F4D09B'}} />
                </div>
            </div>
        </div>
    );
};

export const PremiumTemplate2 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto">
            <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'white'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <AboutComponents.aboutModel1 {...data} />
                    <LinksComponents.linksModel1 {...{data : data, sectionColor: '#6207E4'}} />
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#6207E4'}} />
                </div>
            </div>
        </div>
    );
};

export const PremiumTemplate3 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto">
            <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...data} />
                    <AboutComponents.aboutModel3 {...{data : data, sectionColor : '#141E61'}} />
                    <ProductComponent.productsModel1  {...{data : data, sectionColor: '#141E61'}}/>
                </div>
            </div>
        </div>
    );
};