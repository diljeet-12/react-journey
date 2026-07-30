import React from 'react'

function Card(props) {
    console.log(props.username , props.someobj)
  return (
   <div className="flex  w-[400px] flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl bg-black">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/38135827/pexels-photo-38135827.jpeg" />
  </div>
  <div className="flex flex-col md:items-start">
    <span className="text-2xl font-medium text-white" >{props.username || "Nothing"}</span>
    <span className="font-medium text-sky-500 text-white">Age: {props.someobj?.age || "No Age"}
</span>
    <span className="flex flex-col md:items-start  font-medium text-gray-600 dark:text-gray-400 text-white">
      <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400 text-white">City: {props.someobj?.city|| "No city"}</span>
      <span className="flex flex-col md:items-start  font-medium text-gray-600 dark:text-gray-400 text-white">profession: {props.someobj?.profession|| "No profession"}</span>
    </span>
  </div>
</div>
  )
}

export default Card
