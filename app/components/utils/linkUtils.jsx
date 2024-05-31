'use client';

export const sliderLeft = () => {
    var slider = document.getElementById('sliderLink');
    slider.scrollLeft -= 200;
};
  
export const sliderRight = () => {
    var slider = document.getElementById('sliderLink');
    slider.scrollLeft += 200;
};

export const ButtonLinkHorizontal = ({ sosmedLink }) => (
  <a href={ sosmedLink.link }>
    <button className='w-[144px] h-[52px] rounded-3xl flex justify-center items-center shadow'>
      <img src={
        sosmedLink.category === 'tiktok' ? 'tiktok.png' :
        sosmedLink.category === 'tokopedia' ? 'tokped.png' :
        sosmedLink.category === 'shopee' ? 'shopee.png' :
        'tiktok.png'
      }  className='' />
    </button>
  </a>
);

export const ButtonLinkVertical = ({ sosmedLink, color }) => (
  <a href={ sosmedLink.link }>
    <button style={{ backgroundColor: color }} className="w-[344px] h-[52px] rounded-3xl flex justify-center items-center shadow">
      <img src={
        sosmedLink.category === 'tiktok' ? 'tiktok.png' :
        sosmedLink.category === 'tokopedia' ? 'tokped.png' :
        sosmedLink.category === 'shopee' ? 'shopee.png' :
        'tiktok.png'
      }  className='object-contain p-2' />
    </button>
  </a>
);

export const ButtonLinkGrid = ({ sosmedLink }) => (
    <a href={ sosmedLink.link }>
      <button className='bg-white text-white w-[60px] h-[35px] rounded-md flex justify-center items-center shadow-lg'>
        <img src={
          sosmedLink.category === 'tiktok' ? '/card4/tiktok.png' :
          sosmedLink.category === 'tokopedia' ? '/card4/tokped.png' :
          sosmedLink.category === 'shopee' ? '/card4/shopee.png' :
          '/card4/shopee.png'
        }  className='' />
      </button>
    </a>
);
