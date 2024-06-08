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
        sosmedLink.category === 'figma' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/figma2.png' :
        sosmedLink.category === 'github' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/github2.png' :
        sosmedLink.category === 'instagram' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/instagram2.png' :
        sosmedLink.category === 'linkedin' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/linkedin2.png' :
        sosmedLink.category === 'gitlab' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/gitlab2.png' :
        sosmedLink.category === 'jupyternotebook' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/jupyternotebook2.png' :
        sosmedLink.category === 'youtube' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/youtube2.png' :
        sosmedLink.category === 'tiktok' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/tiktok2.png' :
        sosmedLink.category === 'tokopedia' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/tokopedia2.png' :
        sosmedLink.category === 'shopee' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/shopee2.png' :
        'notfound.png'
      }  className='' />
    </button>
  </a>
);

export const ButtonLinkVertical = ({ sosmedLink, color }) => (
  <a href={ sosmedLink.link }>
    <button style={{ backgroundColor: color }} className="w-[344px] h-[52px] rounded-3xl flex justify-center items-center shadow">
      <img src={
        sosmedLink.category === 'figma' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/figma2.png' :
        sosmedLink.category === 'github' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/github2.png' :
        sosmedLink.category === 'instagram' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/instagram2.png' :
        sosmedLink.category === 'linkedin' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/linkedin2.png' :
        sosmedLink.category === 'gitlab' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/gitlab2.png' :
        sosmedLink.category === 'jupyternotebook' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/jupyternotebook2.png' :
        sosmedLink.category === 'youtube' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/youtube2.png' :
        sosmedLink.category === 'tiktok' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/tiktok2.png' :
        sosmedLink.category === 'tokopedia' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/tokopedia2.png' :
        sosmedLink.category === 'shopee' ? 'https://storage.googleapis.com/gethub_bucket/link_category/logo%202/shopee2.png' :
        'notfound.png'
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
          sosmedLink.category === 'Shopee' ? '/card4/shopee.png' :
          '/card4/shopee.png'
        }  className='' />
      </button>
    </a>
);
