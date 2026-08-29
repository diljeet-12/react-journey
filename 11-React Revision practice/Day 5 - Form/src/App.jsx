import React from 'react'
import { useState } from 'react'

function App() {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  function handlesubmit(e){
    e.preventDefault();
       alert(`Hello ${name}, you are ${age} years old.Form Submitted`);
  }
  return (
    <div className='min-h-screen flex justify-center items-center bg-[#f5d6b5]'>
      <form className='bg-[#660200] p-10 rounded-xl shadow-lg text-center w-[500px'onSubmit={handlesubmit}>
      <input className='text-2xl font-bold mb-4 text-[#f5d6b5] border border-current p-2'
      type="text"
      value={name}
      placeholder='Enter Your Name'
      onChange={(e)=>setName(e.target.value)} />
      <input 
      className='text-2xl font-bold mb-4 text-[#f5d6b5] border border-current p-2'
      type="number"
      value={age}
      placeholder='Enter Your age'
      onChange={(e)=>setAge(e.target.value)} />
      <br />
      <button className='text-2xl font-bold mb-4 text-[#f5d6b5] border border-current p-2'
      type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
