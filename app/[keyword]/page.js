'use server';

import  { revalidateTag } from 'next/cache';

import React from 'react';
import Template1 from '../ui/components/templates/template1';
import Template2 from '../ui/components/templates/template2';
import Template3 from '../ui/components/templates/template3';
import Template4 from '../ui/components/templates/template4';
import Template5 from '../ui/components/templates/template5';
import Template6 from '../ui/components/templates/template6';
import PremTemplate1 from '../ui/components/templates/premium/premTemplate1';
import PremTemplate2 from '../ui/components/templates/premium/premTemplate2';
import PremTemplate3 from '../ui/components/templates/premium/premTemplate3';
import getData from '../api/getData';




const Page = async ({params}) => {
  const { keyword }  = params;

  const data = await getData(keyword);
  const dataUser = data.data

  console.log(dataUser)
  
  let Template;

  if (dataUser && dataUser.is_premium === true ){
    switch(dataUser.theme_hub) {
      case 3:
        Template = PremTemplate3;
        break;
      case 2:
        Template = PremTemplate2;
        break;
      default:
        Template = PremTemplate1; // default template
    }
  }else if (dataUser){
    switch(dataUser.theme_hub) {
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
      {dataUser && <Template {...dataUser} />}
    </div>
  );
}

export default Page;