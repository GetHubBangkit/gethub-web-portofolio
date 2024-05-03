import React from 'react'
import Template2 from '../ui/cardTemplate2/template2'

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
        "codeqr": "card3/Code.png" ,
         "links" : [
          { link : 'https://shopee.co.id/', category: 'shopee' },
          { link : 'https://www.tiktok.com', category: 'tiktok' },
          { link : 'https://www.tokopedia.com/', category: 'tokopedia' },
          { link : 'https://www.tokopedia.com/', category: 'tokopedia' },
        ],
      
         "products" : [
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
        ]
      };






  return (
    <div>
        <Template2 data = { data } />
    </div>
  )
}

export default page