import React from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';



const sliderLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft -= 200;
};

const sliderRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft += 200;
};


// komponen product card 1
const ProductCard = ({ product, priceColor }) => (
  <div className='w-44 inline-block h-auto cursor-pointer hover:scale-105 p-2 ease-in-out duration-300 '>
    <img className='rounded-2xl rounded-b-none bg-white w-44 h-32' src={product.image} alt='Product' />
    <h1 style={{ color: priceColor }} className='mt-4 font-bold text-xs'>Rp. {product.price}</h1>
    <h1 className=' font-bold text-xs text-black mb-2'>{product.name}</h1>
    <p className='text-black text-xs line-clamp-3'>{product.description}</p>
  </div>
);


// komponen product card 
const ProductCard2 = ({ product, priceColor }) => (
  <div className='w-44 inline-block h-auto cursor-pointer hover:scale-105 p-2 ease-in-out duration-300 '>
    <img className='rounded-2xl rounded-b-none bg-white w-44 h-32' src={product.image} alt='Product' />
    <h1 style={{ color: priceColor }} className='mt-4 font-bold text-xs'>Rp. {product.price}</h1>
    <h1 className=' font-bold text-xs text-black mb-2'>{product.name}</h1>
    <p className='text-black text-xs line-clamp-3'>{product.description}</p>
  </div>
);



// product model 1
const productsModel1 = ({products}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
    <div className='flex w-full items-center pb-4 justify-start'>
      <img src="card1/gethub.png" alt="" className='h-[30px] w-[30px]' />
      <div className='text-xl font-bold text-black w-full flex items-center justify-start ml-2 h-full ' style={{ color:'#0D6375' }}>
        Produk / Jasa
      </div>
    </div>
    <div className='flex relative items-center  h-auto w-full'>
    <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
      <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
        {products.map((product, index) => <ProductCard key={index} product={product} priceColor= '#0D6375' />)}
      </div> 
    <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
    </div>
    </div>
  )
}

// product model 2
const productsModel2 = ({products}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
    <div className='flex w-full items-center pb-4 justify-start'>
        <img src="card2/gethub.png" alt="" className='h-[30px] w-[30px]' />
        <div className='text-xl font-bold text-[#4B7328] w-full flex items-center justify-start ml-2 h-full '>
        Produk / Jasa
        </div>
    </div>
    <div className='flex relative items-center  h-auto w-full'>
    <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
      <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
        {products.map((product, index) => <ProductCard key={index} product={product} priceColor= '#4B7328' />)}
      </div> 
    <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
    </div>
    </div>
  )
}

// product model 3
const productsModel3 = ({products}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
    <div className='flex w-full items-center pb-4 justify-start'>
        <img src="card3/gethub.png" alt="" className='h-[30px] w-[30px]' />
        <div className='text-xl font-bold text-[#6207E4] w-full flex items-center justify-start ml-2 h-full '>
        Produk / Jasa
        </div>
    </div>
    <div className='flex relative items-center gap-3 h-auto w-full'>
      <div id="slider" className='grid grid-flow-row grid-cols-2 w-full'>
      {products.map((product, index) => <ProductCard2 key={index} product={product} priceColor= '#6207E4' />)}
      </div>
    </div>
    </div>
  )
}

// product model 4
const productsModel4 = ({products}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
    <div className='flex w-full items-center pb-4 justify-start'>
        <img src="card4/gethub.png" alt="" className='h-[30px] w-[30px]' />
        <div className='text-xl font-bold text-[#53524E] w-full flex items-center justify-start ml-2 h-full '>
        Produk / Jasa
        </div>
    </div>
    <div className='flex relative items-center  h-auto w-full'>
    <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
      <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
        {products.map((product, index) => <ProductCard key={index} product={product} priceColor='#53524E'/>)}
      </div> 
    <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
    </div>
</div>
  )
}

// product model 5
const productsModel5 = ({products}) => {
  return (
  <div className='flex justify-start flex-col items-start pb-10 w-full'>
      {/* Header */}
      <div className='flex w-full items-center pb-4 justify-start'>
          <img src="card5/gethub.png" alt="" className='h-[30px] w-[30px]' />
          <div className='text-xl font-bold text-[#F08A8A] w-full flex items-center justify-start ml-2 h-full '>
              Produk / Jasa
          </div>
      </div>
      {/* Slider */}
      <div className='flex relative items-center  h-auto w-full'>
          {/* Scroll left icon */}
          <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
          {/* Product cards */}
          <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
              {products.map((product, index) => <ProductCard key={index} product={product} priceColor='#F08A8A' />)}
          </div> 
          {/* Scroll right icon */}
          <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
      </div>
    </div>
  )
}

// product model 6
const productsModel6 = ({products}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
            <div className='flex w-full items-center pb-4 justify-start'>
                <img src="card6/gethub.png" alt="" className='h-[30px] w-[30px]' />
                <div className='text-xl font-bold text-[#357CEE] w-full flex items-center justify-start ml-2 h-full '>
                Produk / Jasa
            </div>
    </div>
    <div className='flex relative items-center  h-auto w-full'>
            <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
              <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
                {products.map((product, index) => <ProductCard key={index} product={product} priceColor='#357CEE' />)}
              </div> 
            <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
        </div>
    </div>
  )
}




// premium product here 

// premium product model 1
const premProductsModel1 = ({products}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
            <div className='flex w-full items-center pb-4 justify-start'>
                <img src="premium/PremCard1/gethub.png" alt="" className='h-[30px] w-[30px]' />
                <div className='text-xl font-bold text-[#B67352] w-full flex items-center justify-start ml-2 h-full '>
                Produk / Jasa
            </div>
    </div>
    <div className='flex relative items-center  h-auto w-full'>
            <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
              <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
                {products.map((product, index) => <ProductCard key={index} product={product} priceColor='#B67352' />)}
              </div> 
            <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
        </div>
    </div>
  )
}

// premium product model 3
const premProductsModel3 = ({products}) => {
  return (
    <div className='flex justify-start flex-col items-start pb-10 w-full'>
            <div className='flex w-full items-center pb-4 justify-start'>
                <img src="premium/PremCard3/gethub.png" alt="" className='h-[30px] w-[30px]' />
                <div className='text-xl font-bold text-[#141E61] w-full flex items-center justify-start ml-2 h-full '>
                Produk / Jasa
            </div>
    </div>
    <div className='flex relative items-center  h-auto w-full'>
            <MdChevronLeft onClick={sliderLeft} size={20} color='black' className='opacity-50 cursor-pointer hover:opacity-100 bg-transparent p-0' />
              <div id="slider" className='grid grid-flow-col overflow-x-scroll  w-full scroll scroll-smooth scrollbar-hide'>
                {products.map((product, index) => <ProductCard key={index} product={product} priceColor='#141E61' />)}
              </div> 
            <MdChevronRight onClick={sliderRight} size={20} color='black' className='opacity-50 cursor-pointer h-4 hover:opacity-100  h- p-0'/>
        </div>
    </div>
  )
}


const ProductComponent = {
    productsModel1,
    productsModel2,
    productsModel3,
    productsModel4,
    productsModel5,
    productsModel6,
    premProductsModel1,
    premProductsModel3
}

export default ProductComponent;