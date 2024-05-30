import React from 'react'
import CardsImages from '../ui/cardTemplate1/cardsImages'
import BussinesName from '../ui/cardTemplate1/bussinesName'
import About from '../ui/cardTemplate1/about'
import Product from '../ui/cardTemplate1/product'



const page = () => {
  return (    
    <div className="flex justify-center">
      <div className='w-auto p-2 pt-10 flex  flex-col items-center   ' style={{ maxWidth: '472px' }}>
        
        {/* kontainer have card image */}
         <CardsImages 
         background="/card2.png"
         name = "AHMAD IRVAN M" 
         bussines = "Designer" 
         contact = "0983248238324" 
         location = "Semarang" 
         email = "icikiwir@gmail.com" 
         logo = "logo2.png" 
         company = "JAWIR JATENG" 
         tagline ="tagline goes here"
         color1= "black"
         color2="white"  />

        {/* nama bisnis and social media */}
       
          <BussinesName 
          company = "JAWIR JATENG"
          bussines = "Designer" 
          />

        {/* about section  */}
          <About 
          description = 'lorem ipsum icikiwir lorem ipsum icikiwir lorem ipsum icikiwir lorem ipsum icikiwir lorem ipsum icikiwir lorem ipsum icikiwir lorem ipsum icikiwir lorem ipsum icikiwir.'
          />


        {/* product */}
          <Product/>
        
        
      </div>

    </div>
  )
}

export default page