import { useState } from "react";
 function App() {
  const [color,setcolor] = useState("olive")
  const buttonClass ="outline-none px-4 py-1 rounded-2xl text-white shadow-lg";

  return(
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setcolor("red")}
          className={buttonClass} style={{backgroundColor: "red"}}>Red</button>
          <button
          onClick={() => setcolor("black")}
          className={buttonClass} style={{backgroundColor: "black"}}>Black</button>
          <button
          onClick={() => setcolor("white")}
          className={"outline-none px-4 py-1 rounded-2xl shadow-lg border text-black"} style={{backgroundColor: "white"}}>white</button>
          <button 
          onClick={() => setcolor("green")}
          className={buttonClass} style={{backgroundColor: "Green"}}>Green</button>
          
          <button 
          onClick={() => setcolor("orange")}
          className={buttonClass} style={{backgroundColor: "orange"}}>Orange</button>
          <button 
          onClick={() => setcolor("blue")}
          className={buttonClass} style={{backgroundColor: "blue"}}>Blue</button>

        </div>
      </div>
    </div>
  )
} 
export default App;
