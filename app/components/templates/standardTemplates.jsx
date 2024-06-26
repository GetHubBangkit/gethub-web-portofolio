'use client';

import React from 'react';
import CardComponents from '../section/cardModel';
import AboutComponents from '../section/aboutModel';
import LinksComponents from '../section/linksModel';
import ProductComponent from '../section/productsModel';
import CertificateComponent from '../section/certificateModel';

export const StandardTemplate1 = (data) => {
    return (
        <div id="#forfont" className="flex justify-center h-screen latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px', minHeight: '110vh' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3  {...data} /> 
                    <AboutComponents.aboutModel3 {...{ data : data, sectionColor: '#0D6375'}} />
                    <ProductComponent.productsModel2 {...{ data: data, sectionColor: '#0D6375' }} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#0D6375' }} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate2 = (data) => {    
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px', minHeight: '110vh' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'white'}} />  
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...data} />
                    <AboutComponents.aboutModel3 {...{ data : data, sectionColor: '#4B7328', buttonColor : '#99E05B'}}  />
                    <ProductComponent.productsModel2 {...{ data: data, sectionColor: '#4B7328' }} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#4B7328' }} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate3 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px', minHeight: '110vh' }}>
                <CardComponents.cardModel2 {...{data : data, textColor: 'white', qrcolor : '#6207E4'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...data}  /> 
                    <AboutComponents.aboutModel3  {...{ data : data, sectionColor: '#6207E4'}}/>
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#6207E4'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#6207E4' }} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate4 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px', minHeight: '110vh' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'white', qrcolor: '#8F8C89' }} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...data} /> 
                    <AboutComponents.aboutModel3 {...{data : data, sectionColor : '#53524E'}} />
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#53524E'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#53524E' }} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate5 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px', minHeight: '110vh' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black', qrcolor: '#FFD7D7'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3 {...data} /> 
                    <AboutComponents.aboutModel3 {...{data : data, sectionColor : '#FFB6B6'}} />
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#FFB6B6'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#FFB6B6' }} />
                </div>
            </div>
        </div>
    );
};

export const StandardTemplate6 = (data) => {
    return (
        <div id="#for font" className="flex justify-center h-auto latar">
            <div className='h-auto flex flex-col items-center   lg:p-0 bg-white' style={{ width: '430px', minHeight: '110vh' }}>
                <CardComponents.cardModel1 {...{data : data, textColor: 'black'}} />
                <div className='flex flex-col items-center w-full px-8 relative'>
                    <LinksComponents.linksModel3  {...data}  /> 
                    <AboutComponents.aboutModel3 {...{data : data, sectionColor: '#357DEC', buttonColor : '#D2EEFC'}} />
                    <ProductComponent.productsModel2 {...{data : data, sectionColor: '#357DEC'}} />
                    <CertificateComponent.certificateModel2 {...{ data: data, sectionColor: '#357DEC' }} />
                </div>
            </div>
        </div>
    );
};