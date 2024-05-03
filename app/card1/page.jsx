
import React from 'react'
import CardsImages from '../ui/cardTemplate1/cardsImages'
import SosmedLink from '../ui/cardTemplate1/sosmedLink'
import About from '../ui/cardTemplate1/about'
import Product from '../ui/cardTemplate1/product'
import Header from '../ui/cardTemplate1/header'



const page = () => {
  
  const links = [
    { link : 'https://shopee.co.id/', category: 'shopee' },
    { link : 'https://www.tiktok.com', category: 'tiktok' },
    { link : 'https://www.tokopedia.com/', category: 'tokopedia' },
    { link : 'https://www.tokopedia.com/', category: 'tokopedia' },
  ];

  const products = [
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { image: 'product.png', name: 'Web Inventaris', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ];



  
  return (    
    <div className="flex justify-center h-auto">
      <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
        {/* header background */}
        <Header/>
        <div className='flex flex-col items-center w-full p-8 relative  '>
        {/* kontainer have card image */}
         <CardsImages 
         name = "ARMAN JULIANSYAH" 
         bussines = "Software Engineer" 
         contact = "0983248238324" 
         link = "icikiwir.gethub.com" 
         email = "icikiwir@gmail.com" 
         codeqr = "card3/Code.png" />

        {/* about section  */}
         <About 
          description = 'Saya adalah arsitek digital yang berdedikasi untuk membawa inovasi ke dunia teknolog Dengan pengetahuan mendalam dalam pengembangan perangkat lunak, saya menciptakan solusi yang efektif dan efisien untuk tantangan teknis modern.'
        />

        {/* nama bisnis and social media */}
       
        <SosmedLink links={links} />

        {/* product */}
        <Product products={products}/>
        </div>
        
      </div>

    </div>
  )
}

export default page