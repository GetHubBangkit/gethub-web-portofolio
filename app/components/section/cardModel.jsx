
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

function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatName(fullName) {
  const maxLength = 20;

  // Pisahkan nama berdasarkan spasi
  let parts = fullName.split(' ');

  // Cari apakah ada gelar di akhir nama
  let titles = parts.filter(part => /\b[A-Za-z]{2,}\b\./.test(part));
  let nameParts = parts.filter(part => !/\b[A-Za-z]{2,}\b\./.test(part));

  // Gabungkan nama tanpa gelar
  let nameWithoutTitles = nameParts.join(' ');

  // Jika total panjang nama dan gelar kurang dari atau sama dengan 20 karakter, kembalikan apa adanya
  if (fullName.length <= maxLength) {
    return fullName;
  }

  // Jika tidak, mulai singkat nama
  let shortenedName = nameParts[0]; // Ambil nama depan
  for (let i = 1; i < nameParts.length - 1; i++) {
    shortenedName += ' ' + nameParts[i][0]; // Tambahkan inisial nama tengah
  }
  shortenedName += ' ' + nameParts[nameParts.length - 1]; // Tambahkan nama belakang

  // Tambahkan gelar jika ada
  if (titles.length > 0) {
    shortenedName += ' ' + titles.join(' ');
  }

  // Jika panjang masih lebih dari batas, singkat nama belakang menjadi inisial
  if (shortenedName.length > maxLength) {
    let lastNameInitial = nameParts[nameParts.length - 1][0];
    shortenedName = `${nameParts[0]} ${nameParts[1][0]} ${lastNameInitial}`;
    if (titles.length > 0) {
      shortenedName += ' ' + titles.join(' ');
    }
  }

  return shortenedName;
}


const cardModel1 = ({data, textColor, qrcolor}) => {
  const formattedName = formatName(data.full_name);
  return (
    <>
        {/* Image background */}
        <div className='w-full h-[152px]' style={{ backgroundImage: `url(${data.background_card.bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url(${data.background_card.card})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center pb-3'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg" style = {{ color : textColor }}>{capitalizeWords(formattedName)}</h1>
              <p className='pb-4 font-normal text-xs' style = {{ color : data.profession? textColor : textColor }} >{data.profession ? data.profession : '_________________'}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[15px] w-[15px] mr-2' />
                <p className="text-xs" style = {{ color : data.phone ? textColor : textColor }}>{data.phone ? data.phone : '_________________'}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs" style = {{ color : textColor }}>{data.email}</p>
              </div>
              <div className='flex items-center pb-3'>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs" style = {{ color : textColor }}>{data.web ? data.web : '_________________'}</p>
              </div>
              <p className='text-xs' style = {{ color : data.address ? textColor : textColor }}>{data.address ? data.address : '_________________'}</p>
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
                    light: qrcolor,
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
const cardModel2 = ({data, textColor, qrcolor}) => {
  return (
    <>
        {/* Image background */}
        <div className='w-full h-[152px]' style={{ backgroundImage: `url(${data.background_card.bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        
        <div className='flex flex-col items-center w-full p-8 relative  '>

        {/* Card images */}
        <div className='flex items-center justify-center w-full lg:w-full relative' style={{ backgroundImage: `url(${data.background_card.card})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '15px', transform: 'translateY(-70%)' }}>
          <div className='flex justify-between w-full h-[197px] items-center pt-2'>
            {/* Right side */}
            <div className='flex flex-col justify-center items-start h-full w-3/4 p-5'>
              <h1 className="font-bold text-xs sm:text-xs md:text-xs lg:text-lg xl:text-lg" style = {{ color : textColor }}>{capitalizeWords(data.full_name)}</h1>
              <p className='pb-4 font-normal text-xs' style = {{ color : data.profession? textColor : 'black' }} >{data.profession ? data.profession : '_________________'}</p>
              <div className='flex items-center'>
                <img src="wa.png" alt="Phone" className='h-[15px] w-[15px] mr-2' />
                <p className="text-xs" style = {{ color : data.phone ? textColor : textColor }}>{data.phone ? data.phone : '_________________'}</p>
              </div>
              <div className='flex items-center'>
                <img src="gmail.png" alt="email" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs" style = {{ color : textColor }}>{data.email}</p>
              </div>
              <div className='flex items-center pb-3'>
                <img src="link.png" alt="Phone" className='h-[13px] w-[13px] mr-2' />
                <p className="font-normal text-xs" style = {{ color : textColor }}>{data.web ? data.web : '_________________'}</p>
              </div>
              <p className='text-xs' style = {{ color : data.address ? textColor : textColor }}>{data.address ? data.address : '_________________'}</p>
            </div>
            
            {/* Left side - QR Code */}
            <div className='w-1/3 h-full justify-center flex flex-col items-start'>
              <QRCodeCanvas
                text={data.qr_code}
                options={{
                  errorCorrectionLevel: 'M',
                  margin: 3,
                  scale: 4,
                  width: 88,
                  height: 77,
                  color: {
                    light: '#ffff',
                    dark: qrcolor,
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
  cardModel2
};

export default CardComponents;
