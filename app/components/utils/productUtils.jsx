'use client';

export const sliderLeftProduct = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft -= 200;
  };
  
export const sliderRightProduct = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft += 200;
};

const productCard = ({ product, priceColor }) => (
    <div className='w-44 inline-block h-auto cursor-pointer hover:scale-105 p-2 ease-in-out duration-300 '>
      <img className='rounded-2xl rounded-b-none bg-white w-44 h-32 pb-1' src={product.image_url} alt='Product' />
      {/* <h1 style={{ color: priceColor }} className='mt-4 font-bold text-xs'>Rp. {product.price}</h1> */}
      <h1 className=' font-bold text-xs text-black mb-2 pt-2'>{product.name}</h1>
      <p className='text-black text-xs line-clamp-3'>{product.description}</p>
    </div>
);
  
const productCard2 = ({ product, priceColor }) => (
    <div className='w-34 inline-block h-auto cursor-pointer hover:scale-105 p-2 ease-in-out duration-300 '>
      <img className='rounded-2xl rounded-b-none bg-white w-44 h-32 pb-1' src={product.image_url} alt='Product' />
      {/* <h1 style={{ color: priceColor }} className='mt-4 font-bold text-xs'>Rp. {product.price}</h1> */}
      <h1 className=' font-bold text-xs text-black mb-2 pt-2'>{product.name}</h1>
      <p className='text-black text-xs line-clamp-3'>{product.description}</p>
    </div>
  );

const productUtils = {
    productCard,
    productCard2,
};

export default productUtils;
  
  