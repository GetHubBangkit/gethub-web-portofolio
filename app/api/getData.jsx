// buat function get data
async function getData(params) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/profile?username=${params}`,{ cache: 'no-store' },{next: { 
      tags: ['collection']
    }});
  
    if(!res.ok){
      throw new Error('Failed to fetch');
    }
  
    return res.json();
  }


export default getData;