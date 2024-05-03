import React from 'react'
import Template2 from '../ui/cardTemplate2/template2'
import Template3 from '../ui/cardTemplate3/template3'
import Template4 from '../ui/cardTemplate4/template4'
import Template5 from '../ui/cardTemplate5/template5'
import Template6 from '../ui/cardTemplate6/template6'

const page = () => {

    const data = {
        "theme_hub": 6 ,
        "is_premium": false,
        "username": "armanjuliansyah",
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
            { image: 'product.png', name: 'Web Inventaris', description: 'inventory management System yg didalam nya terdapat fitur komunikasi, chatting dengan seseorang dan juga bisa menyimpan data data penting perusahaan, aplikasi ini juga didukung oleh banyak metode pembayaran', price : '5000,00' },
            { image: 'product.png', name: 'Web Inventaris', description: 'inventory management System yg didalam nya terdapat fitur komunikasi, chatting dengan seseorang dan juga bisa menyimpan data data penting perusahaan, aplikasi ini juga didukung oleh banyak metode pembayaran', price : '50.000,00' },
            { image: 'product.png', name: 'Web Inventaris', description: 'inventory management System yg didalam nya terdapat fitur komunikasi, chatting dengan seseorang dan juga bisa menyimpan data data penting perusahaan, aplikasi ini juga didukung oleh banyak metode pembayaran', price : '15.000,00' },
            { image: 'product.png', name: 'Web Inventaris', description: 'inventory management System yg didalam nya terdapat fitur komunikasi, chatting dengan seseorang dan juga bisa menyimpan data data penting perusahaan, aplikasi ini juga didukung oleh banyak metode pembayaran', price : '15.000,00' },
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
          case 5:
              Template = Template5;
              break;
          case 6:
              Template = Template6;
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