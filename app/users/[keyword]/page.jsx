import React from 'react';
import Template1 from '../../ui/components/templates/template1';
import Template2 from '../../ui/components/templates/template2';
import Template3 from '../../ui/components/templates/template3';
import Template4 from '../../ui/components/templates/template4';
import Template5 from '../../ui/components/templates/template5';
import Template6 from '../../ui/components/templates/template6';
import PremTemplate1 from '../../ui/components/templates/premium/premTemplate1';
import PremTemplate2 from '../../ui/components/templates/premium/premTemplate2';
import PremTemplate3 from '../../ui/components/templates/premium/premTemplate3';





// async function getData() {
//   const res = await fetch('http://localhost:4000/data',{ next: { revalidate: 20 } })
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }
 
// const data = await getData()



// fetch api pakai get
// base url (param) : http://localhost:4000/data/?{id}


// url frontend ketika di run gethub.com/ygyg
// ambil params yang di input user : ygygy

// parsing ke api 
// return ... 
// masukan tampilan

  

const dataDummy = {
  "theme_hub": 3 ,
  "is_premium": false,
}
  

const Page = async ({params}) => {
  

  const { keyword }  = params;

  const response =  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/profile?username=${keyword}`)

  const dataUser = await response.json()
  let data = dataUser.data  
  console.log(dataUser.data)
  console.log(keyword)
  
  let Template;


  if (dataDummy.is_premium === true ){
    switch(dataDummy.theme_hub) {
      case 3:
        Template = PremTemplate3;
        break;
      case 2:
        Template = PremTemplate2;
        break;
      case 3:
        Template = PremTemplate3;
        break;
      default:
        Template = PremTemplate1; // default template
    }
  }else{
  switch(dataDummy.theme_hub) {
    case 1:
      Template = Template1;
      break;
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
      Template = Template1; // default template 
  }
  }

  return (
    <div>
      <Template {...data} />
    </div>
  );

}

export default Page;