'use client';

import React from 'react';
import CardComponents from '../section/cardModel';
import AboutComponents from '../section/aboutModel';
import LinksComponents from '../section/linksModel';
import ProductComponent from '../section/productsModel';
import CertificateComponent from '../section/certificateModel';

export const StandardTemplate1 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto">
            <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <AboutComponents.aboutModel1 {...data} />
                    <LinksComponents.linksModel1 {...{ data : data, sectionColor: '#0D6375'}} /> 
                    <ProductComponent.productsModel1 {...{ data: data, sectionColor: '#0D6375' }} />
                    <CertificateComponent.certificateModel1 {...{ data: data, sectionColor: '#0D6375' }} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate2 = (data) => {    
    return (
        <div id="#for font" className="flex justify-center h-auto">
            <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'white'}} />  
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <AboutComponents.aboutModel1 {...data} />
                    <ProductComponent.productsModel1 {...{ data: data, sectionColor: '#4B7328' }} />
                    <LinksComponents.linksModel2 {...{ data : data, sectionColor: '#4B7328', buttonColor : '#99E05B'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#0D6375' }} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate3 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto">
            <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'white'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <AboutComponents.aboutModel1 {...data} />
                    <LinksComponents.linksModel1 {...{ data : data, sectionColor: '#6207E4'}} /> 
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#6207E4'}} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate4 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto">
            <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'white'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...data} /> 
                    <AboutComponents.aboutModel3 {...{data : data, sectionColor : '#53524E'}} />
                    <ProductComponent.productsModel1 {...{data : data, sectionColor: '#53524E'}} />
                    <CertificateComponent.certificateModel1 {...{ data: data, sectionColor: '#0D6375' }} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate5 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto">
            <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...data} /> 
                    <AboutComponents.aboutModel3 {...{data : data, sectionColor : '#FFB6B6'}} />
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#FFB6B6'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#0D6375' }} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate6 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto">
            <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <AboutComponents.aboutModel2 {...data} />
                    <ProductComponent.productsModel1 {...{data : data, sectionColor: '#357DEC'}} />
                    <LinksComponents.linksModel2 {...{data : data, sectionColor: '#357DEC', buttonColor : '#D2EEFC'}} /> 
                    <CertificateComponent.certificateModel1 {...{ data: data, sectionColor: '#0D6375' }} />
                </div>
            </div>
        </div>
    );
};
