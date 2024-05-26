
'use client';
import React from 'react';
import { useQRCode } from 'next-qrcode';

export const QRCodeCanvas = ({ text, options }) => {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={text}
      options={options}
    />
  );
}

const cardModel1 = ({data, textColor}) => {
  return (
    <>
        {/* Image background */}
        <div className='w-full h-[152px]' style={{ backgroundImage: `url(${data.backgroundCard.bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url(${data.backgroundCard.card})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg" style = {{ color : textColor }}>{data.full_name}</h1>
              <p className='pb-2.5 font-normal text-xs' style = {{ color : textColor }} >{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs" style = {{ color : textColor }}>{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs" style = {{ color : textColor }}>{data.email}</p>
              </div>
              <div className='flex items-center pb-3'>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs" style = {{ color : textColor }}>{data.full_name}</p>
              </div>
              <p className='text-xs' style = {{ color : textColor }}>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.qr_code}
                options={{
                  errorCorrectionLevel: 'M',
                  margin: 3,
                  scale: 4,
                  width: 78,
                  height: 77,
                  color: {
                    dark: '#000000',
                    light: '#ffffff',
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CardComponents = {
  cardModel1,
};

export default CardComponents;
