import React,{useRef} from 'react'


function Main() {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} />
      <br />
      <button onClick={()=>{inputRef.current.focus()}}>
        Focus Input
      </button>
      <br />
      <button onClick={()=>{inputRef.current.value =""}}>
        Clear Input
      </button>
    </div>
  )
}

export default Main
