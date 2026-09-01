// import React, { useState, useEffect } from 'react'


// function App() {

//   const [name, setName] = useState("");
//   useEffect(() => {
//   document.title = `Hello ${name}`;
//   }, [name]);
  
//   return (
//     <div>
//       <input type="text" 
//       value={name}
//       onChange={(e)=>setName(e.target.value)}
//       placeholder='Enter your name'/>
    
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react'


function App() {

  const [count, setCount] = useState(0);
  useEffect(() => {
  document.title=(`Count: ${count}`);
  }, [count]);
  
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default App
