import React, { useState } from 'react'

function App() {

  const [count,setCount] = useState(0);

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f5d6b5]'>
      <div className='bg-[#660200] p-10 rounded-xl shadow-lg text-center w-[400px]'>
      <h1 className='text-2xl font-bold mb-4 text-[#f5d6b5]'>Count:{count}</h1>
      <div className='flex justify-center gap-4'>
      <button className='text-[#f5d6b5] border border-current px-5 py-3 rounded-lg ' onClick={()=> setCount(count+1)}>Increase</button>
      <button  className='text-[#f5d6b5] border border-current px-5 py-3 rounded-lg '  onClick={()=> setCount(count-1)}>Decrease</button>
      <button  className='text-[#f5d6b5] border border-current px-5 py-3 rounded-lg '  onClick={()=> setCount(0)}>Reset</button>
       </div>
      </div>
    </div>
  )
}
