import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/diljeet-12')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            setdata(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers:{data.followers}
      <img className='h-20 w-20' src={data.avatar_url} alt="Gitpicture" />
    </div>
  )
}

export default Github
