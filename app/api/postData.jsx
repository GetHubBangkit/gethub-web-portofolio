// buat function post data
async function postData(params) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/post/web_viewers`,{
    method : 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
        username : params,
    }),
    cache: 'no-store'
    });
  
    return res.json();

  }


export default postData;