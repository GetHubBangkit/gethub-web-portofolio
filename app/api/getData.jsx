// buat function get data
async function getData(params) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/profile?username=${params}`,{ cache: 'no-store' },{next: { 
      tags: ['collection']
    }});
  
    return res.json();

  }


export default getData;