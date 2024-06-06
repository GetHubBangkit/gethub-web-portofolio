// buat function get data
async function getDataContractDigital(params) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/public/project?chatRoomId=${params}`,{ cache: 'no-store' },{next: { 
      tags: ['collection']
    }});
  
    return res.json();

  }


export default getDataContractDigital;