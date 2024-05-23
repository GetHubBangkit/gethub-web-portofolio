'use server';

import  { revalidateTag } from 'next/cache';

import React from 'react';
import Template1 from '../components/templates/template1';
import Template2 from '../components/templates/template2';
import Template3 from '../components/templates/template3';
import Template4 from '../components/templates/template4';
import Template5 from '../components/templates/template5';
import Template6 from '../components/templates/template6';
import PremTemplate1 from '../components/templates/premium/premTemplate1';
import PremTemplate2 from '../components/templates/premium/premTemplate2';
import PremTemplate3 from '../components/templates/premium/premTemplate3';
import NotFoundUser from '../components/section/notFound';
import getData from '../api/getData';
import { Suspense } from 'react'



const Page = async ({params}) => {
  const { keyword }  = params;

  const response = await getData(keyword);
  console.log(response)
  if (response.error_code) {
    const message = response.message
    return (
      <NotFoundUser message={message} />
    );  
  }
  else {
    const dataUser = response.data;
    
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
        <Suspense fallback={<p>Loading feed...</p>}>
        {dataUser && <Template {...dataUser} />}
        </Suspense>
      </div>
    );
  }
}

export default Page;