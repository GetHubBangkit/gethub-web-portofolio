'use client';

export const sliderLeftCertificate= () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -= 200;
  };
  
export const sliderRightCertificate = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft += 200;
};

const certificateCard = ({ certificate, priceColor }) => (
    <div className='w-44 inline-block h-auto cursor-pointer hover:scale-105 p-2 ease-in-out duration-300 '>
      <img className='rounded-2xl rounded-b-none bg-white w-44 h-32 pb-1' src={certificate.image} alt='Certificate' />
      {/* <h1 style={{ color: priceColor }} className='mt-4 font-bold text-xs'>Rp. {product.price}</h1> */}
      <h1 className=' font-bold text-xs text-black mb-2'>{certificate.title}</h1>
      <p className='text-black text-xs line-clamp-3'>{certificate.description}</p>
    </div>
);
  
const certificateCard2 = ({ certificate, priceColor }) => (
    <div className='w-44 inline-block h-auto cursor-pointer hover:scale-105 p-2 ease-in-out duration-300 '>
      <img className='rounded-2xl rounded-b-none bg-white w-44 h-32 pb-1' src={certificate.image} alt='Certificate' />
      {/* <h1 style={{ color: priceColor }} className='mt-4 font-bold text-xs'>Rp. {product.price}</h1> */}
      <h1 className=' font-bold text-xs text-black mb-2'>{certificate.title}</h1>
      <p className='text-black text-xs line-clamp-3'>{certificate.description}</p>
    </div>
  );

const certificateUtils = {
    certificateCard,
    certificateCard2,
};
export default certificateUtils;
  
  