'use client';

import React from 'react';
import CardComponents from '../section/cardModel';
import AboutComponents from '../section/aboutModel';
import LinksComponents from '../section/linksModel';
import ProductComponent from '../section/productsModel';
import CertificateComponent from '../section/certificateModel';

export const PremiumTemplate1 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px' , minHeight: '110vh'}}>
                <CardComponents.cardModel2 {...{data : data, textColor: 'black', qrcolor : '#000'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...{data : data, sectionColor: '#B67352', buttonColor : '#F4D09B'}} />
                    <AboutComponents.aboutModel3 {...data} />
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#B67352'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#B67352' }} />
                </div>
            </div>
        </div>
    );
};

export const PremiumTemplate2 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px' , minHeight: '110vh'}}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'white'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...{data : data, sectionColor: '#6207E4'}} />
                    <AboutComponents.aboutModel3 {...data} />
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#6207E4'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#6207E4' }} />
                </div>
            </div>
        </div>
    );
};

export const PremiumTemplate3 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px' , minHeight: '110vh'}}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...data} />
                    <AboutComponents.aboutModel3 {...{data : data, sectionColor : '#141E61'}} />
                    <ProductComponent.productsModel2  {...{data : data, sectionColor: '#141E61'}}/>
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#141E61' }} />
                </div>
            </div>
        </div>
    );
};
export const PremiumTemplate4 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px' , minHeight: '110vh'}}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...{data : data, sectionColor: '#655AFF', buttonColor : '#655AFF'}} />
                    <AboutComponents.aboutModel3 {...data} />
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#655AFF'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#655AFF' }} />
                </div>
            </div>
        </div>
    );
};

export const PremiumTemplate5 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px', minHeight: '110vh' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...{data : data, sectionColor: '#7D9B76'}} />
                    <AboutComponents.aboutModel3 {...data} />
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#7D9B76'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#7D9B76' }} />
                </div>
            </div>
        </div>
    );
};

export const PremiumTemplate6 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar" >
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px', minHeight: '110vh' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...data} />
                    <AboutComponents.aboutModel3 {...{data : data, sectionColor : '#5C92F4'}} />
                    <ProductComponent.productsModel2  {...{data : data, sectionColor: '#5C92F4'}}/>
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#5C92F4' }} />
                </div>
            </div>
        </div>
    );
};