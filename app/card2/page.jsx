import React from 'react'
import Template2 from '../ui/cardTemplate2/template2'
import Template3 from '../ui/cardTemplate3/template3'

const page = () => {

    const data = {
        "theme_hub": 2,
        "is_premium": false,
        "username": "armanjuliansyah12",
        "name": "Arman Juliansyah",
        "bussines" : "Software Engineer",
        "phone": "62895322118828",
        "email": "arman@gmail.com",
        "about": "Saya adalah arsitek digital yang berdedikasi untuk membawa inovasi ke dunia teknologi. Dengan pengetahuan mendalam dalam pengembangan perangkat lunak, saya menciptakan solusi yang efektif dan efisien untuk tantangan teknis modern.",
        "address" : "Bogor, Jawa Barat",
        "codeqr": "card1/Code.png" ,
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






      let Template;
      switch(data.theme_hub) {
          case 2:
              Template = Template2;
              break;
          case 3:
              Template = Template3;
              break;
          case 4:
              Template = Template4;
              break;
          default:
              Template = null;
      }
  
      return (
          <div>
              {Template ? <Template data={data} /> : null}
          </div>
      )
}

export default page