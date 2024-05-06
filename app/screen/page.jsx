import React from 'react';
import data from '../api/route';
import Template1 from '../ui/components/templates/template1';
import Template2 from '../ui/components/templates/template2';
import Template3 from '../ui/components/templates/template3';
import Template4 from '../ui/components/templates/template4';
import Template5 from '../ui/components/templates/template5';
import Template6 from '../ui/components/templates/template6';

const Page = () => {
  return (
    <div>
      <Template5 {...data }  />
      {/* Render other data as needed */}
    </div>
  );
}

export default Page;