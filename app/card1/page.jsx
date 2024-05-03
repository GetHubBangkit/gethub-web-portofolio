
import React from 'react'
import CardsImages from '../ui/cardTemplate1/cardsImages'
import SosmedLink from '../ui/cardTemplate1/sosmedLink'
import About from '../ui/cardTemplate1/about'
import Product from '../ui/cardTemplate1/product'
import Header from '../ui/cardTemplate1/header'



const page = () => {

  const data = {
    "theme_hub": 1,
    "is_premium": false,
    "username": "armanjuliansyah12",
    "name": "Arman Juliansyah",
    "bussines" : "Software Engineer",
    "phone": "62895322118828",
    "email": "arman@gmail.com",
    "about": "Saya adalah arsitek digital yang berdedikasi untuk membawa inovasi ke dunia teknologi. Dengan pengetahuan mendalam dalam pengembangan perangkat lunak, saya menciptakan solusi yang efektif dan efisien untuk tantangan teknis modern.",
    "address" : "Bogor, Jawa Barat",
     "links" : [
      { link : 'https://shopee.co.id/', category: 'shopee' },
      { link : 'https://www.tiktok.com', category: 'tiktok' },
      { link : 'https://www.tokopedia.com/', category: 'tokopedia' },
      { link : 'https://www.tokopedia.com/', category: 'tokopedia' },
    ],
  
     "products" : [
      { image: 'product.png', name: 'Web Inventaris', description: 'inventory management System yg didalam nya terdapat fitur ....', price : '5000,00' },
      { image: 'product.png', name: 'Web Inventaris', description: 'inventory management System yg didalam nya terdapat fitur ....', price : '50.000,00' },
      { image: 'product.png', name: 'Web Inventaris', description: 'inventory management System yg didalam nya terdapat fitur ....', price : '15.000,00' },
    ]
  };
  

  
  


  return (    
    <div className="flex justify-center h-auto">
      <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
        {/* header background */}
        <Header/>
        <div className='flex flex-col items-center w-full p-8 relative  '>
        {/* kontainer have card image */}
         <CardsImages 
         name = {data.name}
         bussines = {data.bussines}
         contact = {data.phone} 
         url={`${data.username}.gethub.com`}
         email = {data.email}
         codeqr = "card1/Code.png" 
         address={data.address}/>
         
        {/* about section  */}
         <About description={data.about}/>
        {/* nama bisnis and social media */}
        <SosmedLink links={data.links} />
        {/* product */}
        <Product products={data.products}/>
        </div>
        
      </div>

    </div>
  )
}

export default page