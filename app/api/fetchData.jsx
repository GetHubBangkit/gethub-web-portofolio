async function getData() {
    const res = await fetch('http://localhost:4000/data')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page2() {
    const data = await getData()
   
    return <main>
        <p>Username: {data.username}</p>
      <p>Name: {data.name}</p>
    </main>
  }