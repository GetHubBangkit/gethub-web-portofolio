'use server';

import React, { Suspense } from 'react';
import { StandardTemplate1, StandardTemplate2, StandardTemplate3, StandardTemplate4, StandardTemplate5, StandardTemplate6 } from '../components/templates/standardTemplates';
import { PremiumTemplate1, PremiumTemplate2, PremiumTemplate3, PremiumTemplate4, PremiumTemplate5, PremiumTemplate6 } from '../components/templates/premiumTemplates';
import NotFoundUser from '../components/section/notFound';
import getData from '../api/getData';

const Page = async ({ params }) => {
  const { keyword } = params;
  const response = await getData(keyword);
  if (response.error_code) {
    const message = response.message;
    return <NotFoundUser message={message} />;
  } else {
    const dataUser = response.data;
    let Template;
    switch (dataUser.theme_hub) {
      case 1:
        Template = StandardTemplate1;
        break;
      case 2:
        Template = StandardTemplate2;
        break;
      case 3:
        Template = StandardTemplate3;
        break;
      case 4:
        Template = StandardTemplate4;
        break;
      case 5:
        Template = StandardTemplate5;
        break;
      case 6:
        Template = StandardTemplate6;
        break;
      case 7:
        Template = PremiumTemplate1;
        break;
      case 8:
        Template = PremiumTemplate2;
        break;
      case 9:
        Template = PremiumTemplate3;
        break;
      case 10:
        Template = PremiumTemplate4;
        break;
      case 11:
        Template = PremiumTemplate5;
        break;
      case 12:
        Template = PremiumTemplate6;
        break;
      default:
        Template = StandardTemplate1;
    }
    return (
      <div>
        <Suspense fallback={<p>Loading data...</p>}>
          {dataUser && <Template {...dataUser} />}
        </Suspense>
      </div>
    );
  }
};

export default Page;
