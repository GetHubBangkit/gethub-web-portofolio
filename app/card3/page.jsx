import React from 'react'
import CardsImages from '../ui/cardTemplate2/cardsImages'
import BussinesName from '../ui/cardTemplate2/bussinesName'
import About from '../ui/cardTemplate2/about'
import Product from '../ui/cardTemplate2/product'
import Header from '../ui/cardTemplate2/header'
import Head from 'next/head'



const page = () => {

  
  return (    
    <div className="flex justify-center h-full">
      <div className='h-auto flex flex-col items-center px-4 lg:p-0' style={{ width: '430px' }}>
        {/* header background */}
        <Header/>
        <div className='flex flex-col items-center w-full p-8 relative  '>
        {/* kontainer have card image */}
         <CardsImages 
         background="card3/card3.png"
         name = "ARMAN JULIANSYAH" 
         bussines = "Software Engineer" 
         contact = "0983248238324" 
         link = "icikiwir.gethub.com" 
         email = "icikiwir@gmail.com" 
         logo = "card3/Code.png" 
         company = "JAWIR JATENG" 
         tagline ="tagline goes here"
         color1= "black"
         color2="white"  />



        {/* about section  */}
         <About 
          description = 'Saya adalah arsitek digital yang berdedikasi untuk membawa inovasi ke dunia teknolog Dengan pengetahuan mendalam dalam pengembangan perangkat lunak, saya menciptakan solusi yang efektif dan efisien untuk tantangan teknis modern.'
        />


        {/* nama bisnis and social media */}
       
          <BussinesName 
          company = "JAWIR JATENG"
          bussines = "Designer" 
          />

        

        {/* product */}
          <Product/>
        </div>
        
      </div>

    </div>
  )
}

export default page