

import React from 'react';
import { useQRCode } from 'next-qrcode';


// canvas for qr code
export const QRCodeCanvas = ({ text, options }) => {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={text}
      options={options}
    />
  );
}




// Komponen card model 1
const cardModel1 = (data) => {
  return (
    <>
        {/* Image background */}
        <div className='w-full h-[152px]' style={{ backgroundImage: `url('/card1/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url('card1/card1.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-black">{data.name}</h1>
              <p className='pb-2.5 font-normal text-xs text-black'>{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs text-black">{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black">{data.email}</p>
              </div>
              <div className='flex items-center pb-3'>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black">{data.name}</p>
              </div>
              <p className='text-black text-xs'>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.name}
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

// Komponen card model 2
const cardModel2 = (data) => {
  return (
    <>
        {/* Image background */}
        <div className='w-full h-[152px]' style={{ backgroundImage: `url('/card2/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url('card2/card2.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-white">{data.name}</h1>
              <p className='pb-2.5 font-normal text-xs text-white'>{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs text-white">{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-white">{data.email}</p>
              </div>
              <div className='flex items-center pb-3'>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-white">{data.name}</p>
              </div>
              <p className='text-white text-xs'>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.name}
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

// Komponen card model 3
const cardModel3 = (data) => {
  return (
    <>
        {/* Image background */}
        <div className='w-full h-[152px]' style={{ backgroundImage: `url('/card3/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url('card3/card3.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-white">{data.name}</h1>
              <p className='pb-2.5 font-normal text-xs text-white'>{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs text-white">{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-white">{data.email}</p>
              </div>
              <div className='flex items-center pb-3'>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-white">{data.name}</p>
              </div>
              <p className='text-white text-xs'>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.name}
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

// Komponen card model 4
const cardModel4 = (data) => {
  return (
   <>
        {/* Image background */}
        <div className='w-full h-[152px]' style={{ backgroundImage: `url('/card4/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url('card4/card4.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-white">{data.name}</h1>
              <p className='pb-2.5 font-normal text-xs text-white'>{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs text-white">{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-white">{data.email}</p>
              </div>
              <div className='flex items-center pb-3'>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-white">{data.name}</p>
              </div>
              <p className='text-white text-xs'>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.name}
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

// Komponen card model 5
const cardModel5 = (data) => {
  return (
      <>
        {/* Image background */}
        <div className='w-full h-[152px]' style={{ backgroundImage: `url('/card5/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url('card5/card5.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-black">{data.name}</h1>
              <p className='pb-2.5 font-normal text-xs text-black'>{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs text-black">{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black">{data.email}</p>
              </div>
              <div className='flex items-center pb-1'>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black">{data.name}</p>
              </div>
              <p className='text-black text-xs'>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.name}
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

// Komponen card model 6
const cardModel6 = (data) => {
  return (
    <>
      {/* Image background */}
      <div className='w-full h-[152px]' style={{ backgroundImage: `url('/card6/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url('card6/card6.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-black">{data.name}</h1>
              <p className='pb-2.5 font-normal text-xs text-black'>{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs text-black">{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black">{data.email}</p>
              </div>
              <div className='flex items-center pb-3 '>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black text-wrap ">{data.name}</p>
              </div>
              <p className='text-black text-xs'>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.name}
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


// premium Card here 

// premcard1
const premCardModel1 = (data) => {
  return (
    <>
      {/* Image background */}
      <div className='w-full h-[152px]' style={{ backgroundImage: `url('premium/PremCard1/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url('premium/PremCard1/card1.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-black">{data.name}</h1>
              <p className='pb-2.5 font-normal text-xs text-black'>{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs text-black">{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black">{data.email}</p>
              </div>
              <div className='flex items-center pb-3 '>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black text-wrap ">{data.name}</p>
              </div>
              <p className='text-black text-xs '>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.name}
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

// premcard2
const premCardModel2  = (data) => {
  return (
    <>
      {/* Image background */}
      <div className='w-full h-[152px]' style={{ backgroundImage: `url('premium/PremCard2/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url('premium/PremCard2/card2.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-white">{data.name}</h1>
              <p className='pb-2.5 font-normal text-xs text-white'>{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs text-white">{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-white">{data.email}</p>
              </div>
              <div className='flex items-center pb-3 '>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-white text-wrap ">{data.name}</p>
              </div>
              <p className='text-white text-xs '>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.name}
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


// premcard3
const premCardModel3   = (data) => {
  return (
    <>
      {/* Image background */}
      <div className='w-full h-[152px]' style={{ backgroundImage: `url('premium/PremCard3/backgroundCard.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url('premium/PremCard3/card3.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg text-black">{data.name}</h1>
              <p className='pb-2.5 font-normal text-xs text-black'>{data.bussines}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="text-xs text-black">{data.phone}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black">{data.email}</p>
              </div>
              <div className='flex items-center pb-3 '>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs text-black text-wrap ">{data.name}</p>
              </div>
              <p className='text-black text-xs '>{data.address}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.name}
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




// Export semua komponen dalam satu objek
const CardComponents = {
  cardModel1,
  cardModel2,
  cardModel3,
  cardModel4,
  cardModel5,
  cardModel6,
  premCardModel1,
  premCardModel2,
  premCardModel3,
};

export default CardComponents;
